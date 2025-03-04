import { useNavigate } from "react-router-dom"
import { auth, googleProvider } from "../firebase"
import { Button, Paper, Typography } from "@mui/material"
import { signInWithPopup } from "firebase/auth"


const Login = () => {
    console.log("componente login")
    const navigate = useNavigate()

    const signInGoogleLogin = async()=>{
        try{
            await signInWithPopup(auth, googleProvider);
            navigate('/')
        }catch(error){
            console.log("error login ", error.message)
        }
    }
    return (
        <Paper>
            <Typography>
                Iniciar sesion
            </Typography>
            <Button onClick={signInGoogleLogin}>
                Hacer login con Google
            </Button>
        </Paper>
    )
}
export default Login;