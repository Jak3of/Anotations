import { useCounter, useFetch } from "../hooks";
import { LoadingMessage } from "../03-examples/LoadingMessage";
import { Quote } from "./Quote";


export const Layout = () => {

    const {counter, increment, decrement} = useCounter(1);
    const { data , isLoading } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    const { author , quote} = !!data && data[0];

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />
            {
                isLoading ? 
                <LoadingMessage/> : 
                <Quote 
                    author={author}
                    quote={quote}
                />
            }

            <div className="btn-group position-absolute" style={{top: 200, right: 50}} >
                <button className="btn btn-primary mr-3" onClick={ () => counter > 1 ?  decrement(1) : 0 }>Prev</button>
                <button className="btn btn-primary" onClick={ () => increment(1) }>Next</button>
            </div>

        </>
    )
}
