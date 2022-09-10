import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../../global/GlobalStateContext";
import { goToPokemonDetails } from "../../Rotas/coordinator";


const PokemonCard = ({pokemon, isPokedex}) =>{
    const navigate = useNavigate()
    const {pokemons, setPokemons, pokedex, setPokedex} = useContext(GlobalStateContext)

    const addToPokedex = () =>{
        const pokeIndex = pokemons.findIndex((item) => item.name === pokemon.name)
        const newPokemonsList = [...pokemons]
        newPokemonsList.splice(pokeIndex, 1)
        const orderedPokemons = newPokemonsList.sort((a,b) => {return a.id - b.id})
        const newPokedexList = [...pokedex, pokemon]
        const orderedPokedex = newPokedexList.sort((a,b) =>{return a.id - b.id})

        setPokedex(orderedPokedex)
        setPokemons(orderedPokemons)

    }

    const removeFromPokedex = () =>{
        const pokeIndex = pokedex.findIndex((item) => item.name === pokemon.name)
        const newPokedexList =[...pokedex]
        newPokedexList.splice(pokeIndex, 1)
        const orderedPokedex = newPokedexList.sort((a,b) =>{return a.id - b.id})
        const newPokemonsList = [...pokemons, pokemon]
        const orderedPokemons = newPokemonsList.sort((a,b) => {return a.id - b.id})

        setPokedex(orderedPokedex)
        setPokemons(orderedPokemons)
        
    }

    return(
        <>
        <img src={pokemon.sprites && pokemon.sprites.front_default} 
        alt={pokemon.name}/>

        <button onClick={isPokedex ? removeFromPokedex : addToPokedex}>
            {isPokedex ? "Remover da Pokédex" : "Adicionar a Pokédex"}
        </button>

        <button onClick={()=>{goToPokemonDetails(navigate, pokemon.name)}}>Ver detalhes</button>
       
        </>
    )
}
export default PokemonCard;