import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Empleados from './Empleado';
import { removeEmpleados, searchEmpleadoss } from './EmpleadosApi';


// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
const EmpleadosList: React.FC = (props: any) => {
  const { name } = useParams<{ name: string; }>();
  const [proveedors, setproveedors] = useState<Empleados[]>([]);
  const history = useHistory();

  useEffect(() => {
    search();
  }, [history.location.pathname]);

  const search = async () => {
    // eslint-disable-next-line prefer-const
    let result = await searchEmpleadoss();
    setproveedors(result);
  }

  const remove = async (id: string) => {
    await removeEmpleados(id);
    search();
  }

  const addEmpleados = () => {
    history.push('/page/empleados/new');
  }

  const editEmpleados = (id: string) => {
    history.push('/page/empleados/' + id);
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
            <IonTitle>Gestión de Empleados</IonTitle>

            <IonItem>
              <IonButton onClick={addEmpleados} color="primary" fill="solid" slot="end" size="default">
                <IonIcon icon={add} />
                Agregar Empleado
              </IonButton>
            </IonItem>

            <IonGrid className="table">
              <IonRow>
                <IonCol>Nombre</IonCol>
                <IonCol>Email</IonCol>
                <IonCol>Teléfono</IonCol>
                <IonCol>Dirección</IonCol>
                <IonCol>Acciones</IonCol>
              </IonRow>

              {proveedors.map((proveedor: Empleados) =>
                <IonRow>
                  <IonCol>{proveedor.firstname} {proveedor.lastname}</IonCol>
                  <IonCol>{proveedor.email}</IonCol>
                  <IonCol>{proveedor.phone}</IonCol>
                  <IonCol>{proveedor.address}</IonCol>
                  <IonCol>
                    <IonButton color="primary" fill="clear"
                      onClick={() => editEmpleados(String(proveedor.id))}>
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

export default EmpleadosList;