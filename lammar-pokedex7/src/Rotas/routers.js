import React from 'react'
import Pokedex from "../pages/Pokedex";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import PokemonDetails from '../pages/PokemonDetails/PokemonDetails';


export function Rotas () {
    return(
        <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/addPoke" element={<Pokedex/>}/>
            <Route path="/pokeDetails/:name" element={<PokemonDetails/>}/>

         </Routes>
        </BrowserRouter>
    )
}

