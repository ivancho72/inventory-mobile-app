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
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonSlides,
  IonSlide,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { Product } from "../components/ProductsList";
import PRODUCT_QUERY from "../queries/product";
import { useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import { STRAPI_SERVER_URL } from "../constants";
import "./ProductDetails.css";

const ProductDetails: React.FC = () => {
  let { id } = useParams();

  return (
    <Query query={PRODUCT_QUERY} id={id}>
      {(props) => {
        const { product } = props as { product: Product };
        const slideOpts = {
          initialSlide: 0,
        };

        return (
          <IonPage>
            <IonHeader>
              <IonToolbar>
                <IonButtons slot="start">
                  <IonBackButton defaultHref="/merchandise" />
                </IonButtons>
                <IonTitle>Inventory Markestplace</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>{product.Name}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonSlides
                    pager={true}
                    options={slideOpts}
                    className="picture-size"
                  >
                    {product.Pictures.map((pic, idx) => (
                      <IonSlide key={`slide-${idx}`}>
                        <IonImg
                          key={`img-${idx}`}
                          src={`${STRAPI_SERVER_URL}${pic.url}`}
                        ></IonImg>
                      </IonSlide>
                    ))}
                  </IonSlides>
                  <IonGrid>
                    <IonRow className="ion-align-items-center">
                      <IonCol
                        offsetLg="4"
                        sizeLg="4"
                        offsetMd="2"
                        sizeMd="8"
                        sizeSm="12"
                      >
                        <h2>{product.Description}</h2>
                        <ReactMarkdown source={product.Details} />
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonCardContent>
              </IonCard>
            </IonContent>
          </IonPage>
        );
      }}
    </Query>
  );
};

export default ProductDetails;
