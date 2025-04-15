/* eslint-disable prefer-const */
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/react';

import { checkmark } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams, useRouteMatch } from 'react-router';
import Empleados from './Empleado';
import { saveEmpleados, searchEmpleadosById } from './EmpleadosApi';

const EmpleadosEdit: React.FC = () => {
  const { name } = useParams<{ name: string }>();
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
      let result = await searchEmpleadosById(id);
      setEmpleados(result);
    }
  };

  const save = async () => {
    await saveEmpleados(empleados);
    history.push('/page/empleadoss');
  };

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
        <IonCard>
          <IonTitle className="ion-padding">
            {id === 'new' ? 'Agregar Empleado' : 'Editar Empleado'}
          </IonTitle>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Nombre</IonLabel>
                <IonInput
                  value={empleados.firstname}
                  onIonChange={e => setEmpleados({ ...empleados, firstname: String(e.detail.value) })}
                />
              </IonItem>
            </IonCol>

            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Apellido</IonLabel>
                <IonInput
                  value={empleados.lastname}
                  onIonChange={e => setEmpleados({ ...empleados, lastname: String(e.detail.value) })}
                />
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Email</IonLabel>
                <IonInput
                  value={empleados.email}
                  onIonChange={e => setEmpleados({ ...empleados, email: String(e.detail.value) })}
                />
              </IonItem>
            </IonCol>

            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Dirección</IonLabel>
                <IonInput
                  value={empleados.address}
                  onIonChange={e => setEmpleados({ ...empleados, address: String(e.detail.value) })}
                />
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Teléfono</IonLabel>
                <IonInput
                  value={empleados.phone}
                  onIonChange={e => setEmpleados({ ...empleados, phone: String(e.detail.value) })}
                />
              </IonItem>
            </IonCol>

            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Salario</IonLabel>
                <IonInput
                  value={empleados.salary}
                  type="number"
                  onIonChange={e => setEmpleados({ ...empleados, salary: Number(e.detail.value) })}
                />
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol className="ion-text-end ion-padding">
              <IonButton color="success" onClick={save}>
                <IonIcon icon={checkmark} slot="start" />
                Guardar
              </IonButton>
            </IonCol>
          </IonRow>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default EmpleadosEdit;
