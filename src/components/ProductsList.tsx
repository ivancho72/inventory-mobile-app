import React from "react";
import {
  IonList,
  IonItem,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { STRAPI_SERVER_URL } from "../constants";

export interface Product {
  id: string;
  Name: string;
  Description: string;
  Details: string;
  QuantityAvailable: number;
  Category: {
    id: string;
    Name: string;
  };
  Pictures: {
    url: string;
    previewUrl: string;
  }[];
}

export interface ProductListProps {
  products: Product[];
}

export const ProductsList: React.FC<ProductListProps> = (props) => (
  <>
    {props.products.map((item, idx) => {
      return (
        <IonList key={`list-${idx}`}>
          <IonItem key={`item-${idx}`} href={`/product/${item.id}`}>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>{item.Name}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonGrid>
                  <IonRow>
                    <IonCol size="2">
                      <img
                        src={`${STRAPI_SERVER_URL}${item.Pictures[0].url}`}
                        alt={`${item.Pictures[0].url}`}
                      ></img>
                    </IonCol>
                    <IonCol>{item.Description}</IonCol>
                  </IonRow>
                </IonGrid>
              </IonCardContent>
            </IonCard>
          </IonItem>
        </IonList>
      );
    })}
  </>
);
