import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { cartOutline, barcodeOutline } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import Comprar from "./pages/Comprar";
import Carrinho from "./pages/Carrinho";
import Adicionar from "./pages/Adicionar";
import Cadastrar from "./pages/Cadastrar";

import { AppContextProvider } from './services/State';

const App: React.FC = () => (
  <AppContextProvider>
    <IonApp>
      <IonReactRouter>

        <IonTabs>
          <IonRouterOutlet>
            <Route path="/adicionar/:id" component={Adicionar} exact={true} />
            <Route path="/cadastrar/:id" component={Cadastrar} exact={true} />
            <Route path="/comprar" component={Comprar} exact={true} />
            <Route path="/carrinho" component={Carrinho} exact={true} />
            <Route path="/" render={() => <Redirect to="/comprar" />} exact={true} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="comprar" href="/comprar">
              <IonIcon icon={barcodeOutline} />
              <IonLabel>Comprar</IonLabel>
            </IonTabButton>
            <IonTabButton tab="carrinho" href="/carrinho">
              <IonIcon icon={cartOutline} />
              <IonLabel>Carrinho</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  </AppContextProvider>
);

export default App;
