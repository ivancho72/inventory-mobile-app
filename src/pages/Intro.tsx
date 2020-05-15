import React from "react";
import {
  IonSlides,
  IonSlide,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { arrowForward } from "ionicons/icons";

const Intro: React.FC = () => {
  const slideOpts = {
    initialSlide: 0,
    speed: 10,
  };

  return (
    <IonContent fullscreen={true}>
      <IonSlides pager={true} options={slideOpts}>
        <IonSlide>
          <IonCard>
            <img src="../images/image4.png" alt="1" />
            <IonCardHeader>
              <h1>Slide 1</h1>
            </IonCardHeader>
          </IonCard>
        </IonSlide>
        <IonSlide>
          <IonCard>
            <img src="../images/image2.png" alt="2" />
            <IonCardHeader>
              <h1>Slide 2</h1>
            </IonCardHeader>
          </IonCard>
        </IonSlide>
        <IonSlide>
          <IonCard>
            <img src="../images/image3.png" alt="3" />
            <IonCardHeader>
              <h1>Slide 3</h1>
            </IonCardHeader>
          </IonCard>
        </IonSlide>
        <IonSlide>
          <IonCard>
            <img src="../images/image1.png" alt="4" />
            <IonCardHeader>
              <h1>Slide 4</h1>
            </IonCardHeader>
            <IonCardContent>
              <IonButton href="/">
                Continue <IonIcon slot="end" icon={arrowForward}></IonIcon>
              </IonButton>
            </IonCardContent>
          </IonCard>
        </IonSlide>
      </IonSlides>
    </IonContent>
  );
};

export default Intro;
