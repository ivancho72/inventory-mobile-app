import React from "react";
import Query from "../components/Query";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonTitle,
  IonContent,
  IonBackButton,
} from "@ionic/react";
import { ProductsList, Product } from "../components/ProductsList";
import CATEGORY_PRODUCTS_QUERY from "../queries/categoryProducts";
import { useParams } from "react-router";

interface ProductCategory {
  id: string;
  Name: string;
  Products: Product[];
}

const CategoryProducts: React.FC = () => {
  let { id } = useParams();

  return (
    <Query query={CATEGORY_PRODUCTS_QUERY} id={id}>
      {(props) => {
        const { productCategory } = props as {
          productCategory: ProductCategory;
        };
        return (
          <IonPage>
            <IonHeader>
              <IonToolbar>
                <IonButtons slot="start">
                  <IonBackButton defaultHref="/categories" />
                </IonButtons>
                <IonTitle>
                  Inventory Markestplace - {productCategory.Name}
                </IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent>
              <ProductsList products={productCategory.Products}></ProductsList>
            </IonContent>
          </IonPage>
        );
      }}
    </Query>
  );
};

export default CategoryProducts;
