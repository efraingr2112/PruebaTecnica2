/* eslint-disable prefer-const */
import Empleados from "./Empleado";

export async function searchEmpleadoss() {
  let url = process.env.REACT_APP_API + 'empleados'
  let response = await fetch(url, {
    "method": 'GET',
    "headers": {
      "Content-Type": 'application/json'
    }
  })

  return await response.json();
}

export async function removeEmpleados(id: string) {
  let url = process.env.REACT_APP_API + 'empleados/' + id
  await fetch(url, {
    "method": 'DELETE',
    "headers": {
      "Content-Type": 'application/json'
    }
  })
}

export async function saveEmpleados(empleados: Empleados) {
  let url = process.env.REACT_APP_API + 'empleadoss'
  await fetch(url, {
    "method": 'POST',
    "body": JSON.stringify(empleados),
    "headers": {
      "Content-Type": 'application/json'
    }
  });
}

export async function searchEmpleadosById(id: string) {
  let url = process.env.REACT_APP_API + 'empleadoss/' + id
  let response = await fetch(url, {
    "method": 'GET',
    "headers": {
      "Content-Type": 'application/json'
    }
  })

  return await response.json();
}