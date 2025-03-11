import { useSVGOverlay } from "react-leaflet/SVGOverlay";
import { datosProductos } from "../../datos/data";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";


const BarCharComponent = (
    {            mesSelecionado,    mesComparacion}
)=>{

    //filtrar meses para comparar
    const filtrarMeses = [...new Set(datosProductos.map(item=> item.month))]
    
    //filtrado de datos por mes
    const filtrarDatosMes = datosProductos.filter(item => item.month === mesSelecionado)
    const filtrarDatosMesControl = datosProductos.filter(item => item.month === mesComparacion)
    
    
    const charData = filtrarDatosMes.map((item)=>{
        const unirDatos = filtrarDatosMesControl.find(i=>i.product === item.product)
        return {
            name: item.product,
            ventasMes1: item.sales,
            vetnasMes2: unirDatos.sales
        }
    })
    
    console.log("datos producto", datosProductos);
    console.log("datos charData", charData);

    return (<>

        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={charData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="ventasMes1" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
            <Bar dataKey="vetnasMes2" fill="#123caf" activeBar={<Rectangle fill="gold" stroke="purple" />} />
            </BarChart>
      </ResponsiveContainer>
    </>)
}
export default BarCharComponent;
