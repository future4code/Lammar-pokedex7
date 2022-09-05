import React from "react";

const cardDetail = (props) => {

    return(
        <container>
            <img>
                alt={"bulbasaur"}
                src={"https://pokeapi.co/api/v2/pokemon/1/"}
            </img>
            <h1>{"bulbasaur"}</h1>
            <button>Remover</button>
            <button>Ver Detalhes</button>
        </container>
    )
}

export default cardDetail;