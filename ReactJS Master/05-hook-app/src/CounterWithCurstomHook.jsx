import { useCounter } from "./hooks/useCounter";


export const CounterWithCurstomHook = () => {

    const {counter , increment, decrement, reset} = useCounter(10);


  return (
    <>
        <h1>Counter With Hook : {counter} </h1>
        <hr />
        <button className="btn btn-primary" onClick={() => increment(1)} > +1 </button>
        <button className="btn btn-primary" onClick={() => decrement(1)} > -1 </button>
        <button className="btn btn-primary" onClick={reset} > Reset </button>
    </>
  )
}
