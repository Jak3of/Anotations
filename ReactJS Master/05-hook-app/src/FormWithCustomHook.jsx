import { useEffect } from "react"
import { Message } from "./Message"
import { useForm } from "./hooks/useForm"


export const FormWithCustomHook = () => {

    const {
        formState,
        onInputChange,
        onResetForm,
        username, 
        email, 
        password
    } = 
    useForm({
        username : '',
        email : '',
        password : '',
    })

    // const {username, email, password} = formState
    

    const onSubmit = () =>{
        console.log(formState)
        onResetForm()
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
            <input 
            type="password" 
            placeholder="Password" 
            name="password" 
            className="form-control mb-2"
            value={password}
            onChange={onInputChange}
            />
            <input onClick={ onSubmit} type='button' value="Enviar" className="btn btn-primary" />
        </form>
        {
            // deja de existiren el template
            (username == 'daniel') && <Message />
        }
    </>
  )
}
