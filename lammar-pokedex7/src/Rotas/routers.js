import React from 'react'
import Home from "../pages/Home";
import Pokedex from "../pages/Pokedex";
import PokedexDetails from "../pages/PokedexDetails";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export function Rotas () {
    return(
        <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/addPoke" element={<Pokedex/>}/>
            <Route path="/addDetails" element={<PokedexDetails/>}/>
         </Routes>
        </BrowserRouter>
    )
}

