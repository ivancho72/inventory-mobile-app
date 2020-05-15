import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Plugins } from "@capacitor/core";
import { ApolloProvider } from "react-apollo";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

/* App Components */
import Menu from "./components/Menu";
import client from "./utils/apolloClient";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import CategoryProducts from "./pages/CategoyProducts";
import ProductDetails from "./pages/ProductDetails";
import Intro from "./pages/Intro";
import Home from "./pages/Home";

const { Storage } = Plugins;

const App: React.FC = () => {
  const [intro, setIntro] = useState(false);
  useEffect(() => {
    if (!intro) getIntroFlag();
  }, [intro]);

  const getIntroFlag = async () => {
    const introStored = await Storage.get({ key: "intro" });
    if (!introStored.value) {
      await Storage.set({ key: "intro", value: "true" });
    } else {
      setIntro(true);
    }
  };

  return (
    <ApolloProvider client={client}>
      <IonApp className="dark-theme">
        <IonReactRouter>
          <IonSplitPane contentId="main">
            {intro ? <Menu /> : <></>}
            <IonRouterOutlet id="main">
              <Route
                path="/home"
                exact={true}
                render={() => {
                  if (intro) {
                    return <Home />;
                  } else {
                    return <Intro></Intro>;
                  }
                }}
              />
              <Route path="/categories" component={Categories} exact={true} />
              <Route path="/merchandise" component={Products} exact={true} />
              <Route
                path="/categoryproducts/:id"
                component={CategoryProducts}
                exact={true}
              />
              <Route
                path="/product/:id"
                component={ProductDetails}
                exact={true}
              />
              <Route path="/search" component={Home} exact={true} />
              <Route path="/community" component={Home} exact={true} />
              <Route path="/account" component={Home} exact={true} />
              <Route path="/support" component={Home} exact={true} />
              <Route path="/login" component={Home} exact={true} />
              <Route path="/logout" component={Home} exact={true} />
              <Route path="/signup" component={Home} exact={true} />
              <Route exact path="/" render={() => <Redirect to="/home" />} />
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </IonApp>
    </ApolloProvider>
  );
};

export default App;
