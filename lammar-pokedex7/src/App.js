import React from 'react';
// import { Rotas } from './Rotas/routers';
import Home from "./pages/Home"; 
import Pokedex from './pages/Pokedex';
import PokedexDetails from './pages/PokedexDetails';



function App() {
  return (
    <div>
       {/* <Rotas/> */}
       <Home/>
       <Pokedex/>
       <PokedexDetails/>
    </div>
  );
}

export default App;
