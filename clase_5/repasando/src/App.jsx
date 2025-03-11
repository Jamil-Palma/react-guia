import Inicio from "./componentes/inicio/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registro from "./componentes/registro/Registro";
import Cabezera from "./componentes/Cabezera";
import { AuthProvider } from "./context/AuthContext";
import Login from "./componentes/Login";
import ProtectedRoute from "./componentes/ProtectedRoute";
import PdfProcesador from "./componentes/PdfProcesador";
import MapasManejo from "./componentes/MapasManejo";
import GraficosPrincipal from "./componentes/graficos/GraficosPrincipal";

function App() {
    console.log("app")
return (
    <>
        <AuthProvider>
            <BrowserRouter>
                <Inicio/>
                <Cabezera/>
                    <Routes>
                        <Route path='/' element={<Login/>}/>
                        <Route path='/registro' element={
                            <ProtectedRoute>
                                <Registro/>
                            </ProtectedRoute>
                            }/>
                        <Route path='/registro' element={
                            <ProtectedRoute>
                                <Registro/>
                            </ProtectedRoute>
                            }/>
                        <Route path='/pdf' element={
                            <ProtectedRoute>
                                <PdfProcesador/>
                            </ProtectedRoute>
                            }/>
                        <Route path='/mapas' element={
                            <ProtectedRoute>
                                <MapasManejo/>
                            </ProtectedRoute>
                            }/>
                        <Route path='/graficos' element={
                            <ProtectedRoute>
                                <GraficosPrincipal/>
                            </ProtectedRoute>
                            }/>
                    </Routes>
            </BrowserRouter>
        </AuthProvider>

    </>
);
}
export default App;