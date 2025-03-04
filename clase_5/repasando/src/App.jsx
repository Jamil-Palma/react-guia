import Inicio from "./componentes/inicio/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registro from "./componentes/registro/Registro";
import Cabezera from "./componentes/Cabezera";
import { AuthProvider } from "./context/AuthContext";
import Login from "./componentes/Login";
import ProtectedRoute from "./componentes/ProtectedRoute";
import PdfProcesador from "./componentes/PdfProcesador";

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
                    </Routes>
            </BrowserRouter>
        </AuthProvider>

    </>
);
}
export default App;