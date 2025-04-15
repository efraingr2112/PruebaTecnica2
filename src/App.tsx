import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';


import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/palettes/dark.system.css';
import './theme/variables.css';
import CustomersEdit from './pages/customer/CustomersEdit';
import EmpleadosList from './pages/empleados/EmpleadosList';
import EmpleadosEdit from './pages/empleados/EmpleadosEdit';


setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/page/costomers" />
              
            </Route>
                <Route path="/page/customers" exact={true}>
                </Route> 
            
                <Route path="/page/customer/:id" exact={true}>
                <CustomersEdit />
                </Route>
                
                <Route path="/page/empleados" exact={true}>
                <EmpleadosList />
                </Route> 
            
                <Route path="/page/empleados/:id" exact={true}>
                <EmpleadosEdit />
                </Route>

                <Page />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
