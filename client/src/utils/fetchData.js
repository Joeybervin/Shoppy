

export const fetchData = async (url, data, method) => {

    const rawResponse = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })

    const response = await rawResponse.json()
    console.log(response)

    return response
}

