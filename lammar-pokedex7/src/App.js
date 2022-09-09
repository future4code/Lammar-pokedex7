import React from 'react';
import  GlobalState  from './global/GlobalState';
import { Rotas } from './Rotas/routers';


function App() {
  return (
    <GlobalState>
       <Rotas/>
    </GlobalState>
  );
}

export default App;
