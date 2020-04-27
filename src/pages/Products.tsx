import React from "react";
import PRODUCTS_QUERY from "../queries/products";
import Query from "../components/Query";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
} from "@ionic/react";
import { ProductsList, Product } from "../components/ProductsList";

const Products: React.FC = () => {
  return (
    <Query query={PRODUCTS_QUERY}>
      {(props) => {
        const data = props as { products: Product[] };
        return (
          <IonPage>
            <IonHeader>
              <IonToolbar>
                <IonButtons slot="start">
                  <IonMenuButton />
                </IonButtons>
                <IonTitle>Inventory Marketplace - Products</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent>
              <IonHeader collapse="condense">
                <IonToolbar>
                  <IonTitle size="large">
                    Inventory Marketplace - Products
                  </IonTitle>
                </IonToolbar>
              </IonHeader>
              <ProductsList products={data.products}></ProductsList>
            </IonContent>
          </IonPage>
        );
      }}
    </Query>
  );
};

export default Products;
