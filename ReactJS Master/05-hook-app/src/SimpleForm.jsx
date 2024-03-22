import { useEffect, useState } from "react"
import { Message } from "./Message"


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'daniel',
        email: 'daniel@.com'
    })

    const {username, email} = formState

    const onSubmit = () => {
        console.log( username , email)
    }

    const onInputChange = ({target}) => {
        const {name, value} = target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
        console.log('email called!')   
    }, [])

    



  return (
    <>
        <h1>SimpleForm</h1>
        <form onSubmit={onSubmit} >
            <input type="text"
            placeholder="Username"
            name="username"
            className="form-control mb-2"
            value={username}
            onChange={onInputChange}
            />
            <input 
            type="email" 
            placeholder="Email" 
            name="email" 
            className="form-control mb-2"
            value={email}
            onChange={onInputChange}
            />
            <input type="submit" value="Enviar" className="btn btn-primary" />
        </form>
        {
            // deja de existiren el template
            (username == 'daniel') && <Message />
        }
    </>
  )
}
