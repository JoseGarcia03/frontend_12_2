import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "../Containers/Home";
import Login from "../Containers/Login";
import Register from "../Containers/Register";

import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";


const AppRouter = () => {

    const auth = false

    return (
        <BrowserRouter>
            <Routes>
                {/* Rutas publicas */}
                <Route path='/login' element={<PublicRouter isAutentication={auth}> <Login /> </PublicRouter>} />
                <Route path='/register' element={<PublicRouter isAutentication={auth}> <Register /> </PublicRouter>} />
                
                {/* Rutas privadas */}
                <Route path='/' element={<PrivateRouter isAutentication={auth}> <Home /> </PrivateRouter>} />

                {/* Redireccionamiento */}
                <Route path='*' element={<Navigate to='/login' />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter