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
} from "ionicons/icons";

import "./Menu.css";
import { useLocation } from "react-router";

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
export const Menu: React.FC = () => {
  const location = useLocation();

  function renderlistItems(list: Pages[]) {
    return list
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
          {renderlistItems(routes.loggedOutPages)}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};
