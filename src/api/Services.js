// Post Services data in database
export const postService = async (service) => {
    const url = `http://localhost:5000/services`;
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
    const url = `http://localhost:5000/services`;

    const response = await fetch(url)
    const data = await response.json();
    return data;
}

