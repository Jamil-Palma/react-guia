import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";




const Cabezera = ()=>{
    console.log("entra cabezera")
    const {user, logout} = useAuth();
    const navigate = useNavigate();
    console.log("usuario ", user)
    return (
        <AppBar>
            <Toolbar>
            {user?
            <Box>
                <Box>hola {user.displayName}</Box>
                
                <Button color="inherit" onClick={logout}>
                    Cerrar sesion
                </Button>
            </Box>
            :
            <Box>No existe usuario
                <Button onClick={()=>navigate("/")}>
                    Hacer login
                </Button>
            </Box>        }

            </Toolbar>

        </AppBar>
    );
}
export default Cabezera;