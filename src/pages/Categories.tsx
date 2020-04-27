import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonTitle,
  IonContent,
  IonList,
  IonLabel,
  IonItem,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonBackButton,
} from "@ionic/react";
import Query from "../components/Query";
import CATEGORIES_QUERY from "../queries/categories";
import { addOutline, removeOutline, chevronForward } from "ionicons/icons";

export interface Category {
  id: string;
  Name: string;
  Description: string;
  SubCategoryOf: { Name: string };
}

interface CategorySelected extends Category {
  selected: boolean;
}

const Categories: React.FC = () => {
  return (
    <Query query={CATEGORIES_QUERY}>
      {(props) => {
        const categories = props as { productCategories: Category[] };
        return (
          <HeaderItemsForCateogry categories={categories.productCategories} />
        );
      }}
    </Query>
  );
};

const HeaderItemsForCateogry: React.FC<{ categories: Category[] }> = (
  props
) => {
  const catsSelection = props.categories.map((cat) => {
    return { ...cat, selected: false };
  });

  const [categoriesSelected, setCategoriesSelected] = useState<
    CategorySelected[]
  >(catsSelection);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Inventory Marketplace - Categories</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Inventory Marketplace - Categories</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ItemsForCategory
          categories={categoriesSelected}
          level={0}
          OnSelectedChanged={(cats) => {
            setCategoriesSelected([...cats]);
          }}
        />
      </IonContent>
    </IonPage>
  );
};

interface itemCategoriesProps {
  categories: CategorySelected[];
  categoryName?: string;
  level: number;
  OnSelectedChanged: (cats: CategorySelected[]) => void;
}

const ItemsForCategory: React.FC<itemCategoriesProps> = (props) => {
  let list = props.categories
    .filter((cat) => cat.SubCategoryOf?.Name === props.categoryName)
    .map((item, idx) => {
      return (
        <IonList key={`list-${props.level}-${idx}`}>
          <IonItem key={`item-${props.level}-${idx}`}>
            {item.selected ? (
              <IonButton
                slot="start"
                color="dark"
                fill="clear"
                onClick={() => {
                  item.selected = false;
                  props.OnSelectedChanged(props.categories);
                }}
              >
                <IonIcon icon={removeOutline} slot="icon-only"></IonIcon>
              </IonButton>
            ) : (
              <IonButton
                slot="start"
                color="dark"
                fill="clear"
                onClick={() => {
                  item.selected = true;
                  props.OnSelectedChanged(props.categories);
                }}
              >
                <IonIcon icon={addOutline} slot="icon-only"></IonIcon>
              </IonButton>
            )}
            <IonButton
              slot="end"
              color="dark"
              fill="clear"
              href={`/categoryproducts/${item.id}`}
            >
              <IonIcon icon={chevronForward}></IonIcon>
            </IonButton>
            <IonLabel key={`label-${props.level}-${idx}`}>{item.Name}</IonLabel>
          </IonItem>
          {item.selected ? (
            <IonGrid>
              <IonRow>
                <IonCol offset="1">
                  <ItemsForCategory
                    categories={props.categories}
                    categoryName={item.Name}
                    level={props.level + 1}
                    OnSelectedChanged={props.OnSelectedChanged}
                  ></ItemsForCategory>
                </IonCol>
              </IonRow>
            </IonGrid>
          ) : null}
        </IonList>
      );
    });
  return <>{list}</>;
};

export default Categories;
