import React from "react";
import {
  IonMenu,
  IonContent,
  IonList,
  IonListHeader,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel,
  isPlatform,
} from "@ionic/react";
import {
  bookmarksOutline,
  help,
  logIn,
  logOut,
  person,
  personAdd,
  trailSignOutline,
  searchCircleOutline,
  heartHalfOutline,
  exit,
} from "ionicons/icons";

import "./Menu.css";
import { useLocation } from "react-router";
import { Plugins } from "@capacitor/core";

const mobiApp = Plugins.App;

const routes = {
  appPages: [
    { title: "Categories", path: "/categories", icon: bookmarksOutline },
    { title: "Store Browse", path: "/merchandise", icon: trailSignOutline },
    { title: "Extended Search", path: "/search", icon: searchCircleOutline },
    { title: "Community", path: "/community", icon: heartHalfOutline },
  ],
  loggedInPages: [
    { title: "Account", path: "/account", icon: person },
    { title: "Support", path: "/support", icon: help },
    { title: "Logout", path: "/logout", icon: logOut },
  ],
  loggedOutPages: [
    { title: "Login", path: "/login", icon: logIn },
    { title: "Support", path: "/support", icon: help },
    { title: "Signup", path: "/signup", icon: personAdd },
  ],
};

interface Pages {
  title: string;
  path: string;
  icon: string;
  routerDirection?: string;
}
const Menu: React.FC = () => {
  const location = useLocation();

  const exitApp = () => {
    mobiApp.exitApp();
  };

  function renderlistItems(list: Pages[], exitIcon?: boolean) {
    const menuList = list
      .filter((route) => !!route.path)
      .map((p) => (
        <IonMenuToggle key={p.title} auto-hide="false">
          <IonItem
            detail={false}
            routerLink={p.path}
            routerDirection="none"
            className={
              location.pathname.startsWith(p.path) ? "selected" : undefined
            }
          >
            <IonIcon slot="start" icon={p.icon} />
            <IonLabel>{p.title}</IonLabel>
          </IonItem>
        </IonMenuToggle>
      ));

    if (isPlatform("hybrid") && exitIcon) {
      menuList.push(
        <IonMenuToggle key="exit" auto-hide="false">
          <IonItem detail={false} onClick={exitApp}>
            <IonIcon slot="start" icon={exit}></IonIcon>
            <IonLabel>Exit App.</IonLabel>
          </IonItem>
        </IonMenuToggle>
      );
    }

    return menuList;
  }

  return (
    <IonMenu type="overlay" contentId="main">
      <IonContent forceOverscroll={false}>
        <IonList lines="none">
          <IonListHeader>Marketplace</IonListHeader>
          {renderlistItems(routes.appPages)}
        </IonList>
        <IonList lines="none">
          <IonListHeader>Account</IonListHeader>
          {renderlistItems(routes.loggedOutPages, true)}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
