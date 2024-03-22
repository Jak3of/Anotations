import { useState } from "react"


export const CounterApp=() => {

    const [state, setState]=useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    })


    const onhandlercounter=(key) => {
        setState(
            {
                ...state,
                [key]: state[key]+1
            }
        )
    }

    return (
        <>
            <h1>Counters : </h1>
            <hr />
            {
                Object.keys(state).map(
                    key => (
                        <h3 key={key}>{key} : {state[key]}</h3>
                    )
                )
            }


            <hr />
            {
                Object.keys(state).map(
                    key => (
                        <button
                            key={key}
                            className="btn btn-primary"
                            onClick={() => onhandlercounter(key)}
                        >
                            {key} | +1
                        </button>
                    ))
            }





        </>
    )
}
