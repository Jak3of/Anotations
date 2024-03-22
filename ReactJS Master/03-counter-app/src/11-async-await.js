
export const getImagen = async() => {
    try {
    const apikey = 'bfwqsSYhjQ1N2sZNgKRzX21K6L7Z9qbz';
    const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
    const {data} = await res.json();

    const {url} = data.images.original;

    return url;
    } catch (error) {
        console.error(error);
        return 'No se encontro la imagen';
    }

}
