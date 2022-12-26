// const getImagenPromesa = () => new Promise((reslove) =>
//     reslove('https://sdfadfsadfsd.com')
// )


// getImagenPromesa().then(console.log)

getImage = async () => {
    try {
        const apiKey = 'CaLzFBSf9WESCfQPoiHahB9GipP88cGW';
        const peticion = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await peticion.json()

        const { url } = data.images.original;
        const img = document.createElement('img')
        img.src = url;
        document.body.append(img)
        console.log('ver', data);
    } catch (err) {
        console.log(err);
    }
}
getImage().then(console.log)