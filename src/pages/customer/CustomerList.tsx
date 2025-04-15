/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */


import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams, useRouteMatch } from 'react-router';
import { removeCustomer, saveCustomer, searchCustomer } from './CustomerApi';
import Customer from './Customer';


const CustomerList= () => {
  const { name } = useParams<{ name: string; }>();
  const roueMatch: any = useRouteMatch("'page/customers/:id")
  const [usuarios, setUsuarios] = useState<Customer[]>([]);
  const history = useHistory();

  useEffect(()=>{
    search();
  }, [history.location.pathname]);
  const search = async ()=>{
    let id = roueMatch.params?.id;
    if (id!=='new'){
      let result = await searchCustomer(id);
      editCustomer(result);
    }
  };   
  async function remove(id: string) {
      await removeCustomer(id);
      search();

    }
  const addCustomer = () =>{
    history.push('/page/customer/new');
  }
  const editCustomer = (id:string) =>{
    history.push('/page/customer/'+ id);

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
      {usuarios.map((usuario:Customer)=>
       <IonRow>
       <IonCol>{usuario.firstname} {usuario.lastname}</IonCol>
         <IonCol>{usuario.email}</IonCol>
         <IonCol>{usuario.phone}</IonCol>
         <IonCol>{usuario.address}</IonCol>
         <IonCol>
           <IonButton color="primary" fill="clear" 
           onClick={()=>editCustomer(String(usuario.id))}>
             <IonIcon icon={pencil} slot="icon-only"/>
           </IonButton>
           <IonButton color="danger" fill="clear"
           onClick={() => remove(String(usuario.id))}>
             <IonIcon icon={close} slot="icon-only"/>
           </IonButton>
         </IonCol>
       </IonRow>
      )}
      
      </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default CustomerList;
