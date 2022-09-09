import React from "react";
import { useNavigate } from "react-router-dom";
import { goToAddPoke } from "../../Rotas/coordinator";

export function Header({title, leftButtonFunction, showRightButton}){
    const navigate = useNavigate()

    const leftButtonTitle = () =>{
        switch (title) {
            case "Lista de Pokémons":
                return "Ir para Pokedex";
            case "Pokédex":
                return "Voltar para lista de pokémons";
            default:
                return "Voltar"
        }
    }
    return(
        <>
        <button onClick={leftButtonFunction}>
            {leftButtonTitle}
        </button>
        <h1>{title}</h1>
        {showRightButton && 
        <button onClick={() => goToAddPoke(navigate)}>Ir para Pokédex</button>}
        
        </>
    )
}