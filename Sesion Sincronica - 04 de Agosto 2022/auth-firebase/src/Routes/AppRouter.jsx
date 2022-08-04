import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "../Containers/Home";
import Login from "../Containers/Login";
import Register from "../Containers/Register";


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Rutas publicas */}
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                {/* Rutas privadas */}
                <Route path='/' element={<Home />} />

                {/* Redireccionamiento */}
                <Route path='*' element={<Navigate to='/login' />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter