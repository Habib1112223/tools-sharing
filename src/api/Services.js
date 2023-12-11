// Post Services data in database
export const postService = async (service) => {
    const url = `https://y-rust-psi.vercel.app//services`;
    console.log(url)

    const response = await fetch(url, {
        method: "POST",
        headers: {
            'content-type': ['application/json']
        },
        body: JSON.stringify(service)
    })

    const data = await response.json();
    return data;
}


export const getServices = async (service) => {
    const url = `https://y-rust-psi.vercel.app//services`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
          "Content-Type": "application/json"
      }
  })
    const data = await response.json();
    return data;
}


export const getServicesByEmail = async (email) => {
    const url = `https://y-rust-psi.vercel.app//service/provider?email=${email}`;

    const response = await fetch(url, {
      headers: {
          "Content-Type": "application/json",
          
      }
  })
    const data = await response.json();
    return data;
}



export const updateService = async (id, service) => {
    const url = `https://y-rust-psi.vercel.app//service/update/${id}`;

    const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(service),
      });
    const data = await response.json();
    return data;
}


export const deleteService = async (id) => {
    const url = `https://y-rust-psi.vercel.app//service/delete/${id}`;

    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    const data = await response.json();
    return data;
}



