import React from 'react'
import Home from "../pages/Home";
import Pokedex from "../pages/Pokedex";
import PokedexDetails from "../pages/PokedexDetails";
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import  Card from "../Components/Card/card";
import CardDetail from '../Components/CardDetail/cardDetail';
import CardPokedex from '../Components/CardPokedex/CardPokedex';

export function Rotas () {
    return(
        <BrowserRouter>
         <Routes>
            <Route path = "/" elements = {<Home/>}/>
            <Route path = "/addPoke" elements = {<Pokedex/>}/>
            <Route path = "/addDetails" elements = {<PokedexDetails/>}/>
            <Route path = "/addcard" elements = {<Card/>}/>
            <Route path = "/addCdetail" elements = {<CardDetail/>}/>
            <Route path = "addPokedex" elements = {<CardPokedex}/>

         </Routes>
        </BrowserRouter>
    )
}

