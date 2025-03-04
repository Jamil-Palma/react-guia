import { Button, Paper, TextField, Typography } from "@mui/material";

import { useState } from "react";

function Registro(){
    const [datos, setDatos] = useState({
        nombre:"",
        correo:"",
        numero:"",
        comentario:""
    })
    const [error,setError] = useState(false)
    const [mensajeError, setMensajeError] = useState("")
    const  enviarDatos = async()=>{
        console.log("se enviaron los datos")
        console.log(datos)
        const respuesta = await axios.post("http::123", data)
    }
    function leerDatos(event){
        const {name, value} = event.target
        console.log("name and ", event.target)
        console.log("datdos ", name, value)
        if(name=="numero" && isNaN(Number(value))){
            console.log("error")
            setError(true)
            setMensajeError("En el campo numero,solo acepta numeros validos")
            return ;
        }
        setError(false)
        setDatos((prevData)=>({
            ...prevData,
            [name]: value
        }))
    }
    return (
        <Paper elevation={3}>
            <Typography variant="h5" sx={{mb:2}}>
                {!error && "Contactanos"}
                {error && mensajeError}
            </Typography>
            <TextField 
                id="id-nombre" 
                label="Nombre" 
                variant="outlined"
                required="true"
                name="nombre"
                value={datos.nombre}
                onChange={leerDatos}
                sx={{mb:3}}
            />
            <TextField 
                id="id-correo" 
                label="Correo" 
                variant="outlined"
                name="correo"
                value={datos.correo}
                onChange={leerDatos}
                sx={{mb:3}}
                />
            <TextField 
                id="id-numero"
                label="Numero"
                variant="outlined" 
                
                name="numero"
                value={datos.numero}
                onChange={leerDatos}
                sx={{mb:3}}
            />
            <TextField id="id-comentario"
                label="Comentarios"
                variant="outlined"
                multiline
                maxRows={4}

                name="comentario"
                value={datos.comentario}
                onChange={leerDatos}
                sx={{mb:3,
                    background: "#cafe55"
                }}
            />
            <Button onClick={enviarDatos}>
                Enviar datos
            </Button>
        </Paper>
    );
}
export default Registro;
