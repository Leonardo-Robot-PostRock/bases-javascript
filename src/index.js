const apiKey = 'CaLzFBSf9WESCfQPoiHahB9GipP88cGW';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=CaLzFBSf9WESCfQPoiHahB9GipP88cGW`);

peticion
    .then(resp => resp.json())
    //desestructuracion
    .then(({ data }) => {
        //desestructuracion
        const { url } = data.images.original;
        const img = document.createElement('img')
        img.src = url;
        document.body.append(img)
    })
    .catch(console.warn)