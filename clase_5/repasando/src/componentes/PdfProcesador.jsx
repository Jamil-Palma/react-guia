import { Button, Paper, TextField, Typography } from "@mui/material";
import { PDFDocument } from "pdf-lib";
import { useEffect, useState } from "react";

const PdfProcesador = ()=>{
    const [pdfArchivo, setPdfArchivo] = useState(null)
    const [pdfDoc, setPdfDoc] = useState(null);
    const [paginasSelecionadas, setPaginasSeleccionadas] = useState("")
    const [pdfResult, setPdfResult] = useState("");
    useEffect(()=>{
        console.log("test use Effect")
    },[])
    async function guardarPDF(event) {
        try {
            console.log(event);
            const archivo = event.target.files[0]
            if(archivo && archivo.type == "application/pdf"){
                console.log("guardar datos", archivo)
                setPdfArchivo(archivo)
                const datosArchivo = await archivo.arrayBuffer(); // 1ms 
                const documento = await PDFDocument.load(datosArchivo); // 2ms
                setPdfDoc(documento)
                console.log('nuestro documento es: ', documento);
                console.log("numero de paginas es", documento.getPageCount())
            } else {
                alert("Porfavor suba un archivo pdf valido")
                setPdfArchivo(null)
            }
                
        } catch (error) {
            console.log("error es", error)
        }
    }
    const obtenerPaginas = (rango, MaximasPaginas)=>{
        const partes = rango.split(",")
        let paginas = []
        partes.forEach((parte)=>{
            if(parte.includes("-")){
                const [inicio,fin] = parte.split("-").map(   (num)=>parseInt(num.trim(), 10)  )
                for(let i = inicio; i <= fin; i++){
                    if(i>=1 && i<=MaximasPaginas)
                        paginas.push(i-1)
                }
            }else{
                const pag = parseInt(parte.trim(),10)
                if(pag>=1 && pag<=MaximasPaginas)
                    paginas.push(pag-1);
            }
        })
        // paginas sin; repetir y ordenadas
        //const respuesta = [...new Set(paginas)].sort() // .sort( (a,b)=>a-b )

        //admite paginas repetidas pero ordenadas
        //const respuesta = [...paginas].sort() // .sort( (a,b)=>a-b )

        //admite paginas repetidas y en el orden ingresado
        const respuesta = [...paginas] // .sort( (a,b)=>a-b )
        
        console.log("respuetas es", respuesta)
        return respuesta
    }

    const extraerPaginas = async ()=>{
        if(!pdfDoc) return alert("Porfavor Cargue un archivo pdf")
        if(!paginasSelecionadas.trim()) return alert("Porfavor selecione algunas paginas a dividir")
        try {
            const nuevoPdf = await PDFDocument.create();
            const totalPaginas = pdfDoc.getPageCount();
            const paginas = obtenerPaginas(paginasSelecionadas,totalPaginas);//obtener las paginas selecionadas, en indices
            for(const paginaIndex of paginas) {
                const [copiaPagina] = await nuevoPdf.copyPages(pdfDoc, [paginaIndex]);
                nuevoPdf.addPage(copiaPagina)
            }
            console.log(nuevoPdf)
            const pdfBytes = await nuevoPdf.save();
            const blob = new Blob([pdfBytes], {type: "application/pdf"})
            const blobUrl = URL.createObjectURL(blob);
            console.log("tu url de descarga es: " , blobUrl)
            setPdfResult(blobUrl);
        } catch (error) {
            console.log("error en extraer paginas", error)
        }

    }
    
    const descargar = ()=>{
        const link = document.createElement("a")
        link.href = pdfResult;
        link.download = "pdf-dividido.pdf"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link);
    }
    return ( 
    <Paper>
        Pdf procesador
        <input type="file"
            onChange={guardarPDF} 
            accept="application/pdf"
            ></input>
        {pdfArchivo?
        <>
            <Typography>
                Documento existe
            </Typography>

            <Typography>
                    Numero de paginas son: {pdfDoc?.getPageCount()}
                </Typography>
        :
        </>
        :
        <Typography>
            Documento no cargado    
        </Typography>}
        {pdfDoc &&
        <>
                <Typography>
                    Numero de paginas son: {pdfDoc.getPageCount()}
                    Porfavor agregue las paginas separadas por ,
                    y si quiere un rango de paginas, con guion
                    ejemplos
                    1,2,3-10,11
                </Typography>
                <TextField
                    label="paginas a dividir"
                    onChange={(e)=>setPaginasSeleccionadas(e.target.value)}
                />
        </>
        }
        {pdfResult && 
            <Typography>
                Descarga tu archivo: {pdfResult}
            </Typography>
        }
        <Typography>valor es: {paginasSelecionadas}</Typography>
        <Button onClick={extraerPaginas}>
            Procesar nuevo PDF
        </Button>
        <Button onClick={descargar}>
            Descargar nuevo PDF
        </Button>
    </Paper>
    );
}
export default PdfProcesador