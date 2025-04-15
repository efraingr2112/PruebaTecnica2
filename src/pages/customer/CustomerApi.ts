/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */

import Customer from "./Customer";
export async function searchCustomer(id: any){
    let url= process.env.REACT_APP_API + 'customer'
    let response=await fetch(url,{
        "method": 'GET',
        "headers":{
            "content-type": 'application/json'
        }

    })
    return await response.json();
}   
export async function removeCustomer (id: string){
    let url= process.env.REACT_APP_API + 'customer/'+ id
    await fetch(url,{
        "method": 'DELETE',
        "headers":{
            "content-type": 'application/json'
        }

    })

} 


export async function saveCustomer(customer:Customer) {
    let url= process.env.REACT_APP_API + 'customer'
    await fetch(url,{
        "method": 'POST',
        "body": JSON.stringify(customer),
        "headers":{
            "content-type": 'application/json'
        }

    })

} ;



export async function searchCustomerId(id:string) {
    let url= process.env.REACT_APP_API + 'customer/' + id
    let response=await fetch(url,{
        "method": 'GET',
        "headers":{
            "content-type": 'application/json'
        }

    })
    return await response.json();
} 


