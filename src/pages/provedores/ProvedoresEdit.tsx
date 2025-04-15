import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { checkmark } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams, useRouteMatch } from 'react-router';
import Provedores from './Provedores';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { saveProvedor, searchProvedorById } from './ProvedoresApi';


const ProvedoresEdit: React.FC = () => {
  const { name } = useParams<{ name: string; }>();

  const [provedores, setProvedores] = useState<Provedores>({});
  const history = useHistory();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const routeMatch: any = useRouteMatch("/page/provedores/:id");
  const id = routeMatch?.params?.id;

  useEffect(() => {
    search();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history.location.pathname]);

  const search = async () => {
    if (id === 'new') {
      setProvedores({});
    } else {
      // eslint-disable-next-line prefer-const
      let result = await searchProvedorById(id);
      setProvedores(result);
    }
  }

  const save = () => {
    setProvedores(provedores);
    history.push('/page/provedoress');
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>





        <IonContent>
          <IonCard>
            <IonTitle>{id === 'new' ? 'Agregar Proveedor' : 'Editar Proveedor'}</IonTitle>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Nombre</IonLabel>
                  <IonInput onIonChange={e => provedores.name = String(e.detail.value)}
                    value={provedores.name}> </IonInput>
                </IonItem>
              </IonCol>

              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Contacto</IonLabel>
                  <IonInput onIonChange={e => provedores.contact = String(e.detail.value)}
                    value={provedores.contact}> </IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Email</IonLabel>
                  <IonInput onIonChange={e => provedores.email = String(e.detail.value)}
                    value={provedores.email}> </IonInput>
                </IonItem>
              </IonCol>

              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Dirección</IonLabel>
                  <IonInput onIonChange={e => provedores.address = String(e.detail.value)}
                    value={provedores.address}> </IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Teléfono</IonLabel>
                  <IonInput onIonChange={e => provedores.phone = String(e.detail.value)}
                    value={provedores.phone}> </IonInput>
                </IonItem>
              </IonCol>

              <IonCol>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Web</IonLabel>
                  <IonInput onIonChange={e => provedores.web = String(e.detail.value)}
                    value={provedores.web}> </IonInput>
                </IonItem>
              </IonCol>

              <IonCol>
              </IonCol>
            </IonRow>






            <IonItem>
              <IonButton onClick={save} color="success" fill="solid" slot="end" size="default">
                <IonIcon icon={checkmark} />
                Guardar
              </IonButton>
            </IonItem>

          </IonCard>


        </IonContent>






      </IonContent>
    </IonPage>
  );
};

export default ProvedoresEdit;