import { useContext, useState } from "react"
import { UserContext } from "./context/UserContext"



export const LoginPage = () => {

    const [show , setShow] = useState(false)

    const { user, setUser } = useContext(UserContext)


    const onClick = () => {
        if (!show) {
            setUser(
                {
                    id: 123,
                    name: 'Daniel',
                    email: 'daniel@.com'
                }
            )
            setShow(true)
        } else {
            setUser({});
            setShow(false)
        }
    }

    return (
        <>
            <div>LoginPage</div>
            <p>Bienvenido {user?.name}</p>
            <button
                onClick={() => onClick() }
                className="btn btn-primary">Set user</button>
        </>
    )
}
