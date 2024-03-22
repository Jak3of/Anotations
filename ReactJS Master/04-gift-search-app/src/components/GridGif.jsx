import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

import PropTypes from 'prop-types';


export const GridGif = ({category}) => {

    // custom hook useFetchGifs se utiliza para separar la logica del componente
    const { gifs  , isLoading } = useFetchGifs(category);

    
    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>) 
            }
            <div className="card-grid">
            {
                gifs.map( 
                    (gif) => 
                    <GifItem key={gif.id} {...gif} />
                    )
            }
            </div>
           

        </>
    )
}


GridGif.propTypes = {
    category: PropTypes.string.isRequired
}