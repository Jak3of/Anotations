import { useEffect, useState } from "react"




export const Message = () => {

    const [coords, setCoords] = useState( { x : 0 , y : 0})

    useEffect(() => {

        const onMouseMove = ({ x , y} ) => {
            setCoords({ x , y})
            
        }

        // cuando el componente se muestra se construye 
        window.addEventListener('mousemove', onMouseMove )
        

        return () => {
            // cuando el componente se destruye
            window.removeEventListener('mousemove', onMouseMove )
        }
    }, [])
    


  return (
    <>
        <h3>Usuario ya existente</h3>
        {
            JSON.stringify(coords)
        }
    </>
  )
}
