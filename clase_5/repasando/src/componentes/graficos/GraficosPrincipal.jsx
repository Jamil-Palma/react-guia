import React,{ useState } from "react";
import BarCharComponent from "./BarCharComponent";
import { Box } from "@mui/material";
import LineChartComponent from "./LineChartComponent";
import { datosProductos } from "../../datos/data";
import { FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";


const GraficosPrincipal = () =>{
    console.log("graficos")
    const [mesSelecionado, setMesSelecionado] = useState("2023-07")
    const [mesComparacion, setMesComparacion] = useState("2023-08")
    //filtrar meses para comparar
    const filtrarMeses = [...new Set(datosProductos.map(item=> item.month))]
    const cambiarMes = (e)=>{
        console.log("evento ", e.target.value)
        console.log(" e" , e)
        setMesSelecionado(e.target.value)
    }

    const cambiarMesComparacion = (e)=>{
        console.log("evento ", e.target.value)
        console.log(" e" , e)
        setMesComparacion(e.target.value)
    }
    return (
    <Box
        sx={{with: 500, height:500}}
    >
                <FormControl fullWidth >
            <InputLabel>
                Selecionar mes
            </InputLabel>
            <Select value={mesSelecionado} onChange={cambiarMes}>
                {filtrarMeses.map((mes)=>(
                    <MenuItem key={mes} value={mes}>
                        {mes}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
        <FormControl fullWidth >
            <InputLabel>
                Selecionar mes Control
            </InputLabel>
            <Select value={mesComparacion} onChange={cambiarMesComparacion}>
                {filtrarMeses.map((mes)=>(
                    <MenuItem key={mes} value={mes}>
                        {mes}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
        <BarCharComponent
            mesSelecionado={mesSelecionado}
            mesComparacion={mesComparacion}
        />
        <LineChartComponent
            mesSelecionado={mesSelecionado}
            mesComparacion={mesComparacion}
        />
    </Box>
    )
}
export default GraficosPrincipal;