
import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { checkmark } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams, useRouteMatch } from 'react-router';
import Empleados from './Empleado';
import { saveEmpleados, searchEmpleadosById } from './EmpleadosApi';


const EmpleadosEdit: React.FC = () => {
  const { name } = useParams<{ name: string; }>();

  const [empleados, setEmpleados] = useState<Empleados>({});
  const history = useHistory();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const routeMatch: any = useRouteMatch("/page/empleados/:id");
  const id = routeMatch?.params?.id;

  useEffect(() => {
    search();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history.location.pathname]);

  const search = async () => {
    if (id === 'new') {
      setEmpleados({});
    } else {
      // eslint-disable-next-line prefer-const
      let result = await searchEmpleadosById(id);
      setEmpleados(result);
    }
  }

  const save = async () => {
    await saveEmpleados(empleados);
    history.push('/page/empleadoss');
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
            <IonTitle>{id === 'new' ? 'Agregar Empleado' : 'Editar Empleado'}</IonTitle>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Nombre</IonLabel>
                  <IonInput onIonChange={e => empleados.firstname = String(e.detail.value)}
                    value={empleados.firstname}> </IonInput>
                </IonItem>
              </IonCol>

              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Apellido</IonLabel>
                  <IonInput onIonChange={e => empleados.lastname = String(e.detail.value)}
                    value={empleados.lastname}> </IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Email</IonLabel>
                  <IonInput onIonChange={e => empleados.email = String(e.detail.value)}
                    value={empleados.email}> </IonInput>
                </IonItem>
              </IonCol>

              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Dirección</IonLabel>
                  <IonInput onIonChange={e => empleados.address = String(e.detail.value)}
                    value={empleados.address}> </IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Teléfono</IonLabel>
                  <IonInput onIonChange={e => empleados.phone = String(e.detail.value)}
                    value={empleados.phone}> </IonInput>
                </IonItem>
              </IonCol>

              <IonCol>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Salario</IonLabel>
                  <IonInput onIonChange={e => empleados.salary = Number(e.detail.value)}
                    value={empleados.salary}> </IonInput>
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

export default EmpleadosEdit;




