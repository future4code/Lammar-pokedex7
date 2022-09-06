import React from 'react';
import Card from './Components/Card/card';
import CardDetail from './Components/CardDetail/cardDetail';
import CardPokedex from './Components/CardPokedex/CardPokedex';
// import { Rotas } from './Rotas/routers';
import Home from "./pages/Home"; 
import Pokedex from './pages/Pokedex';
import PokedexDetails from './pages/PokedexDetails';



function App() {
  return (
    <div>
cards
       {/* <Rotas/> */}
       <Home/>
       <Pokedex/>
       <PokedexDetails/>
       <Card/>
       <CardDetail/>
       <CardPokedex/>

      <Home/>
 master
    </div>
  );
}

export default App;
