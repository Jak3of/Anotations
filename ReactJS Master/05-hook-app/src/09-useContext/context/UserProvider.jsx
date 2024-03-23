import { useState } from "react"
import { UserContext } from "./UserContext"


// const userLocal = () => {
//     return {
//         id: 123,
//         name: 'Daniel',
//         email: 'daniel@.com'
//     }
// }

export const UserProvider = ({ children }) => {


    const [user , setUser] = useState();

    const setUserFrom = () => {

    }

    return (
        <UserContext.Provider value={{user, setUser}} >
            {children}
        </UserContext.Provider>
    )
}
