import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Containers/Home';

const AppRoutes = () => {

  return (
    <BrowserRouter>
        <Routes>
            {/* Rutas publicas */}
            <Route path='/' element={ <Home /> } />


            {/* Redireccionamiento */}

        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;