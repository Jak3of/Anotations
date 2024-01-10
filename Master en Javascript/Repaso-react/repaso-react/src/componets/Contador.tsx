import { useState } from "react";



const Contador = () => {

    const [count, setCount] = useState(0);

    return (
        <>
        <h2 style={{textAlign: "start", color: "#ccc"}}>Contador:</h2>
      <p style={{textAlign: "center"}}>{count}</p>
      <button onClick={() => setCount(precount => {return precount + 1})} style={{margin: "0 auto", display: "block"}}>Incrementar</button>

        </>
    )
}

export default Contador