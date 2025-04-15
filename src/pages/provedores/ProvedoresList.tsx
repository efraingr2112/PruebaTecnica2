/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Provedores from './Provedores';
import { removeProvedor, searchProvedors } from './ProvedoresApi';


const ProvedoresList: React.FC = (props: any) => {
  const { name } = useParams<{ name: string; }>();
  const [provedoress, setProvedoress] = useState<Provedores[]>([]);
  const history = useHistory();

  useEffect(() => {
    search();
  }, [history.location.pathname]);

  const search = async () => {
    let result = await searchProvedors();
    setProvedoress(result);
  }

  const remove = async (id: string) => {
    await removeProvedor(id);
    search();
  }

  const addProvedores = () => {
    history.push('/page/provedores/new');
  }

  const editProvedores = (id: string) => {
    history.push('/page/provedores/' + id);
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
            <IonTitle>Gestión de Proveedors</IonTitle>

            <IonItem>
              <IonButton onClick={addProvedores} color="primary" fill="solid" slot="end" size="default">
                <IonIcon icon={add} />
                Agregar Proveedor
              </IonButton>
            </IonItem>

            <IonGrid className="table">
              <IonRow>
                <IonCol>Nombre</IonCol>
                <IonCol>Email</IonCol>
                <IonCol>Teléfono</IonCol>
                <IonCol>Web</IonCol>
                <IonCol>Acciones</IonCol>
              </IonRow>

              {provedoress.map((proveedor: Provedores) =>
                <IonRow>
                  <IonCol>{proveedor.name} {proveedor.name}</IonCol>
                  <IonCol>{proveedor.email}</IonCol>
                  <IonCol>{proveedor.phone}</IonCol>
                  <IonCol>{proveedor.web}</IonCol>
                  <IonCol>
                    <IonButton color="primary" fill="clear"
                      onClick={() => editProvedores(String(proveedor.id))}>
                      <IonIcon icon={pencil} slot="icon-only" />
                    </IonButton>

                    <IonButton color="danger" fill="clear"
                      onClick={() => remove(String(proveedor.id))}>
                      <IonIcon icon={close} slot="icon-only" />
                    </IonButton>
                  </IonCol>
                </IonRow>
              )}

            </IonGrid>
          </IonCard>


        </IonContent>






      </IonContent>
    </IonPage>
  );
};

export default ProvedoresList;