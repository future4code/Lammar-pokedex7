import React from "react";
import { useNavigate } from "react-router-dom";
import { goToAddPoke } from "../../Rotas/coordinator";
import { ButtonLeft, ButtonRight, HeaderPoke, HeaderTitle } from "./styled"; 

export function Header({title, leftButtonFunction, showRightButton}){
    const navigate = useNavigate()

    const leftButtonTitle = () =>{
        switch (title) {
            case "Lista de Pokémons":
                return "Ir para Pokedex";
            case "Pokedex":
                return "Voltar para lista de Pokemons";
            default:
                return "Voltar"
        }
    }
    return(
        <HeaderPoke>
            <ButtonLeft onClick={leftButtonFunction}>
                {leftButtonTitle}
            </ButtonLeft>
            <HeaderTitle>{title}</HeaderTitle>
            {<ButtonRight onClick={() => goToAddPoke(navigate)}>Ir para Pokedex</ButtonRight>}
            {/* {showRightButton && 
            <ButtonRight onClick={() => goToAddPoke(navigate)}>Ir para Pokedex</ButtonRight>} */}
        </HeaderPoke>
    )
}