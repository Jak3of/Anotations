

export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=bfwqsSYhjQ1N2sZNgKRzX21K6L7Z9qbz`;

    const response = await fetch(url);
    const {data} = await response.json();
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url:  img.images.downsized_medium.url ?? img.images.downsized.url
        }
    });
    
    return gifs;
}