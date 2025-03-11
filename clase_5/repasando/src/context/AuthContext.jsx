import { createContext, useContext, useEffect, useState } from "react"
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";


const AuthContext = createContext()
export const useAuth = ()=> useContext(AuthContext)

export const AuthProvider = ({children}) => {
    console.log("paso 1 auth provider")
    const [user, setUser] =useState(null);
    const [load, setLoad] = useState(true);

    useEffect(()=>{
        console.log("paso 2 auth provider")
        const cuenta = onAuthStateChanged(auth, (usuarioActual) => {
            setUser(usuarioActual);
            setLoad(false)
        })
        return cuenta
    })
    const logout = async()=>{
        await signOut(auth);
    }
    console.log("paso 3 auth provider")
    return (
        <AuthContext.Provider value={{user, logout}}>
            {!load && children}
        </AuthContext.Provider>
    );
}


