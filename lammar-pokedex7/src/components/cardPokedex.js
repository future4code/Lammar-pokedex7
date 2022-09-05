import React from "react";

const cardPokedex = (props) => {

    return(
        <container>
            <img>
                alt={"charmeleon"}
                src={"https://pokeapi.co/api/v2/pokemon/5/"}
            </img>
            <h1>{"charmeleon"}</h1>
            <button>Adcionar</button>
            <button>Ver Detalhes</button>
        </container>
    )
}

export default cardPokedex;