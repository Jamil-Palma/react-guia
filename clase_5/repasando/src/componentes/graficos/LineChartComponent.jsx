import React, { PureComponent, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { datosProductos } from '../../datos/data';



const LineChartComponent = (
    {            mesSelecionado,    mesComparacion}
)=>{
    console.log("componentes")
 
    
        //filtrado de datos por mes
        const filtrarDatosMes = datosProductos.filter(item => item.month === mesSelecionado)
        const filtrarDatosMesControl = datosProductos.filter(item => item.month === mesComparacion)
        
        
        const charData = filtrarDatosMes.map((item)=>{
            const unirDatos = filtrarDatosMesControl.find(i=>i.product === item.product)
            return {
                name: item.product,
                ventasMes1: item.sales,
                ventasMes2: unirDatos.sales
            }
        })
        
        console.log("datos producto", datosProductos);
        console.log("datos charData", charData);
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
    return(
        <div style={{width: "100%", height: 400, padding: 10}}>
            lineas

            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={charData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="ventasMes1" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="ventasMes2" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );   
}
export default LineChartComponent;