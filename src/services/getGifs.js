const apiKey = "bLYKE1gTTZglI0ARuqKeg7a6IiD0oHA6";

 function getGifs ({keyword = 'simpsons'} = {}) {

    const urlApi = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;

    return fetch(urlApi)
    .then(res => res.json())
    .then(response => {
        const {data = []} = response
        const gifs = data.map(image => image.
        images.downsized_medium.url)

        return gifs;
    })

}

export default getGifs;