// Post Services data in database
export const postService = async (service) => {
    const url = `https://y-rust-psi.vercel.app/services`;
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
    const url = `https://y-rust-psi.vercel.app/services`;

    const response = await fetch(url)
    const data = await response.json();
    return data;
}

