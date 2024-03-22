import { useCounter, useFetch } from "../hooks";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";


export const MultipleCustomHooks = () => {

    const {counter, increment, decrement} = useCounter(1);

    const { data, isLoading } = useFetch('https://pokeapi.co/api/v2/pokemon/' + counter);

    return (
        <>
            <h1>Informacion de pokemon</h1>
            <hr />
            <h3>Pokemon Info</h3>
            {
                isLoading ? 
                <LoadingMessage/> : 
                <PokemonCard 
                id={data.id} 
                name={data.name} 
                sprites={[
                    data.sprites.front_default,
                    data.sprites.back_default,
                    data.sprites.front_shiny,
                    data.sprites.back_shiny
                ]} 
                />
            }

            <button className="btn btn-primary mr-3" onClick={ () => counter > 1 ?  decrement(1) : 0 }>Prev</button>
            <button className="btn btn-primary" onClick={ () => increment(1) }>Next</button>

        </>
    )
}
