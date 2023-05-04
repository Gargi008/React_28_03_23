import { createContext,useState } from "react";

// the actual value that you need to access.
export const UserContext= createContext({
    currentUser: null,
    setCurrentUser:() => null
})
/* current context value, as given by the nearest context provider for the given context. */
export const UserProvider = ({children})=>{
    const [currentUser,setCurrentUser] = useState(null)
    const value = {currentUser,setCurrentUser}


    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}





