import React from 'react'
import Home from "../pages/Home";
import Pokedex from "../pages/Pokedex";
import PokedexDetails from "../pages/PokedexDetails";
import { BrowserRouter, Routes, Route  } from 'react-router-dom';

export function Rotas () {
    return(
        <BrowserRouter>
         <Routes>
            <Route path = "/" elements = {<Home/>}/>
            <Route path = "/addPoke" elements = {<Pokedex/>}/>
            <Route path = "/addDetails" elements = {<PokedexDetails/>}/>
         </Routes>
        </BrowserRouter>
    )
}

