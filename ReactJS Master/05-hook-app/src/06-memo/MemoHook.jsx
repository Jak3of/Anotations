import { useMemo, useState } from "react";
import { useCounter } from "../hooks";


const heavyStuff = (iterationNumber = 100) => {

  for (let i = 0; i < iterationNumber; i++) {
    console.log('Ahi vamos...');
  }
  return `${iterationNumber} iteraciones realizadas`;
}


export const MemoHook = () => {

    const { counter, increment } = useCounter(4000);

    const [show, setShow] = useState(true);

    // no dispara el heavyStuff si el counter no cambia
    // si solo si el counter cambia lo dispara
    // es como useEffect pero solo cuando cambia el counter
    const memoHeavyStuff = useMemo(() => {
        heavyStuff(counter);
    }, [counter]);
    

  return (
    <>
        <h1>Counter : <small>{ counter }</small></h1>
        <hr />

        <h4>{ memoHeavyStuff }</h4>

        <button 
        type="button" 
        className="btn btn-outline-primary"
        onClick={() => increment(1) }
        >+1</button>
        <button  
        type="button"
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
        >Show/Hide {JSON.stringify(show)}</button>
    </>
  )
}
