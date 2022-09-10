import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants/constants";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) =>{
    const [pokemonNames, setPokemonName] = useState([])
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])

    console.log(pokemons)

    useEffect(()=>{
        getPokemonNames()
    },[])

    useEffect(() => {
        
        const newList =[]
        pokemonNames.forEach((item) => {
            axios.get(item.url)
            .then((response)=>{
                newList.push(response.data)
                if(newList.length === 20){
                  const orderedList = newList.sort((a,b)=>{
                    return a.id - b.id
                  })
                    setPokemons(orderedList)
                }
            })
            .catch((error)=>console.log(error.message))
        })

    },[pokemonNames])

    const getPokemonNames=()=>{
        axios.get(`${BASE_URL}/pokemon`)
        .then((response)=>setPokemonName(response.data.results))
        .catch((error)=>console.log(error.message))
    }

    const data = {pokemons, setPokemons, pokedex, setPokedex}

    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState