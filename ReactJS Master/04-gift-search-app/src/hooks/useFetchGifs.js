import { useEffect, useState } from "react";
import { getGifs } from "../service/gifsService";





export const useFetchGifs = ( category) => {


    const [gifs, setGifs] = useState([]);

    const [isLoading, setIsLoading] = useState(true);
    

    useEffect(() => {
        getGifs(category).then((gifs) => {
            setGifs(gifs);
            setIsLoading(false);
        });
        console.log('cargando',gifs.length);
    }, []);

    return {
        gifs,
        isLoading
    }
}
