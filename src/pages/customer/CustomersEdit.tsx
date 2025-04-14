/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, checkbox, checkmark, close, pencil, remove, text } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { removeCustomer, saveCustomer, searchCustomer, searchCustomerId } from './CustomerApi';
import Customer from './Customer';


const CustomersEdit: React.FC = () => {
  const { name, id } = useParams<{ name: string;id:  string;}>();
  const [customer, setCustomer] = useState<Customer>([]);
  const [usuarios, setUsuarios] = useState<Customer>([]);
  const history = useHistory();
  useEffect(()=>{
    search();
  }, []);
  const search = ()=>{
    if(id =='new'){
     let customer = searchCustomerId(id); 
     setCustomer(result);
    }
    //const result = searchCustomer();
   // setUsuarios(result);
  }
    const save = () =>{
        saveCustomer(customer);
        history.push('/page/customer/');
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
          <IonTitle>{id == 'new'? 'Agregar Usuario': 'Editar Usuario'}</IonTitle>
          <IonRow>
            <IonCol>
                <IonItem>
                    <IonLabel position="stacked">Nombre</IonLabel>
                    <IonInput onIonChange={e => customer.firstname =String(e.detail.value   )} 
                    value={customer.firstname}>
                        </IonInput> 
                </IonItem>
            </IonCol>
            <IonCol>
            <IonItem>
          <IonLabel position="stacked">Apellido</IonLabel>
          <IonInput onIonChange={e => customer.lastname =String(e.detail.value   )}
                    value={customer.lastname}>
                        </IonInput>  
        </IonItem>
        </IonCol>
        </IonRow>
        <IonRow>
            <IonCol>
            <IonItem>
          <IonLabel position="stacked">Correo</IonLabel>
          <IonInput onIonChange={e => customer.email =String(e.detail.value   )}
                    value={customer.email}>
                        </IonInput> 
        </IonItem>
            </IonCol>
            <IonCol>
            <IonItem>
          <IonLabel position="stacked">Direccion</IonLabel>
          <IonInput onIonChange={e => customer.address =String(e.detail.value   )}
                    value={customer.address}>
                        </IonInput> 
        </IonItem>
            </IonCol>
            </IonRow>
            <IonRow>
            <IonCol>
            <IonItem>
          <IonLabel position="stacked">Telefono</IonLabel>
          <IonInput onIonChange={e => customer.phone =String(e.detail.value   )}
                    value={customer.phone}>
                        </IonInput> 
        </IonItem>
            </IonCol>
            <IonCol>
            <IonItem>
          
        </IonItem>
            </IonCol>
            </IonRow>
          
        
        
      



        <IonItem>
        <IonButton onClick ={save}color="primary" fill="solid" slot="end" size="default">
          <IonIcon icon={checkmark}/>
          Guardar
        </IonButton>
        </IonItem>









      {usuarios.map((usuario:any)=>
       <IonRow>
       <IonCol>{usuario.firstname} {usuario.lastname}</IonCol>
         <IonCol>{usuario.email}</IonCol>
         <IonCol>{usuario.phone}</IonCol>
         <IonCol>{usuario.address}</IonCol>
         <IonCol>
           <IonButton color="primary" fill="clear">
             <IonIcon icon={pencil} slot="icon-only"/>
           </IonButton>
           <IonButton color="danger" fill="clear"
           onClick={() => remove(usuario.id)}>
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

export default CustomersEdit;