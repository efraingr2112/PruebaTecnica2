/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */


import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { removeCustomer, saveCustomer, searchCustomer } from './CustomerApi';


const CustomerList: React.FC = () => {
  const { name } = useParams<{ name: string; }>();
  const [usuarios, setUsuarios] = useState<any>([]);
  const history = useHistory();

  useEffect(()=>{
    search();
  }, []);
  const search = ()=>{
    const result = searchCustomer();
    setUsuarios(result);
  }
  const remove =(id: string) =>{
      removeCustomer(id);
      search();

  }
  const pruebaLocalStorage = () =>{
    const ejemplo={
      id: '1',
      firstname: 'efrain',
      lastname:'gutierrez',
      email:'gr@gmail.com',
      phone:'12345678',
      address:'san jose',
    }
    saveCustomer(ejemplo);
  }
  const addCustomer = () =>{
    history.push('/page/customer/new');
  }
  const editCustomer = (id:string) =>{
    history.push('/page/customer');

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
        <IonCard>
          <IonTitle>Gestion de Usuarios</IonTitle>

        <IonItem>
        <IonButton onClick ={addCustomer} color="primary" fill="solid" slot="end" size="default">
          <IonIcon icon={add}/>
          Agragar Usuario
        </IonButton>
        </IonItem>


        <IonGrid className='table'>
        <IonRow>
          <IonCol>Nombre</IonCol>
          <IonCol>Correo</IonCol>
          <IonCol>Contacto</IonCol>
          <IonCol>Domicilio</IonCol>
          <IonCol>Acciones</IonCol>
        </IonRow>
      </IonGrid>
      {usuarios.map((usuario:any)=>
       <IonRow>
       <IonCol>{usuario.firstname} {usuario.lastname}</IonCol>
         <IonCol>{usuario.email}</IonCol>
         <IonCol>{usuario.phone}</IonCol>
         <IonCol>{usuario.address}</IonCol>
         <IonCol>
           <IonButton color="primary" fill="clear" 
           onClick={()=>editCustomer(usuarios.id)}>
             <IonIcon icon={pencil} slot="icon-only"/>
           </IonButton>
           <IonButton color="danger" fill="clear"
           onClick={() => remove(usuarios.id)}>
             <IonIcon icon={close} slot="icon-only"/>
           </IonButton>
         </IonCol>
       </IonRow>
      )}
      
      </IonCard>


      <IonButton  onClick= {pruebaLocalStorage}color="danger" fill="clear">
              Prueba Local Storage
      </IonButton>



      </IonContent>
    </IonPage>
  );
};

export default CustomerList;
