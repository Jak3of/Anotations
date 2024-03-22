import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";



export const CallbackHooks = () => {

  const [counter , setCounter] = useState(10);



  const incrementFather = useCallback(
    ( count = 1) => 
    {
        setCounter((value) => value + count);
    }
  , []);

  // siempre apuntan a un espacio en memoria diferente
//   useEffect(() => {

//     incrementFather();
//   }, [incrementFather]);
  


    return (
        <>
            <h1>Callback Hooks : {counter}</h1>
            <hr />
            <ShowIncrement increment={incrementFather} />
        </>
    )
}
