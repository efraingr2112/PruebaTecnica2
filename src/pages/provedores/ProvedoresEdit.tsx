/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { checkmark } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams, useRouteMatch } from 'react-router';
import Provedores from './Provedores';
import { saveProvedor, searchProvedorById } from './ProvedoresApi';


const ProvedoresEdit: React.FC = () => {
  const { name } = useParams<{ name: string; }>();

  const [provedores, setProvedores] = useState<Provedores>({});
  const history = useHistory();

  const routeMatch: any = useRouteMatch("/page/provedores/:id");
  const id = routeMatch?.params?.id;

  useEffect(() => {
    search();
  }, [history.location.pathname]);

  const search = async () => {
    if (id === 'new') {
      setProvedores({});
    } else {
      let result = await searchProvedorById(id);
      setProvedores(result);
    }
  }

  const save = () => {
    setProvedores(provedores);
    history.push('/page/provedores');
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