import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detalle from '../Components/Detalle';

import Navbar from '../Components/Navbar';
import Hobbit from '../Containers/Hobbit';
import Home from '../Containers/Home';
import Lord from '../Containers/Lord';
import Search from '../Containers/Search';

const AppRoutes = () => {

  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            {/* Rutas publicas */}
            <Route path='/' element={ <Home /> } />
            <Route path='/lord' element={ <Lord /> } />
            <Route path='/hobbit' element={ <Hobbit /> } />
            <Route path='/search' element={ <Search /> } />
            <Route path='/detalle/:id' element={ <Detalle /> } />


            {/* Redireccionamiento */}

        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;