import Provedor from "./Provedores";

export async function searchProvedors() {
  // eslint-disable-next-line prefer-const
  let url = process.env.REACT_APP_API + 'provedores'
  // eslint-disable-next-line prefer-const
  let response = await fetch(url, {
    "method": 'GET',
    "headers": {
      "Content-Type": 'application/json'
    }
  })

  return await response.json();
}

export async function removeProvedor(id: string) {
  // eslint-disable-next-line prefer-const
  let url = process.env.REACT_APP_API + 'provedores/' + id
  await fetch(url, {
    "method": 'DELETE',
    "headers": {
      "Content-Type": 'application/json'
    }
  })
}

export async function saveProvedor(provedores: Provedor) {
  // eslint-disable-next-line prefer-const
  let url = process.env.REACT_APP_API + 'provedoress'
  await fetch(url, {
    "method": 'POST',
    "body": JSON.stringify(provedores),
    "headers": {
      "Content-Type": 'application/json'
    }
  });
}

export async function searchProvedorById(id: string) {
  // eslint-disable-next-line prefer-const
  let url = process.env.REACT_APP_API + 'provedores/' + id
  // eslint-disable-next-line prefer-const
  let response = await fetch(url, {
    "method": 'GET',
    "headers": {
      "Content-Type": 'application/json'
    }
  })

  return await response.json();
}