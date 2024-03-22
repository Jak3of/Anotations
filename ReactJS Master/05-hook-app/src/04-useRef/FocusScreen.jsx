import { useRef } from "react"



export const FocusScreen = () => {

    const ref = useRef();


    const onSetFocus = () => {
        ref.current.select()
    }

  return (
    <>
        <h1>Focus Screen</h1>
        <hr />
        <input 
            ref={ ref }
            type="text"
            name="name"
            placeholder="Ingrese su nombre"
        />

        <button
        className="btn btn-primary"
        onClick={ () => onSetFocus() }
        >Set Focus</button>
    </>
  )
}
