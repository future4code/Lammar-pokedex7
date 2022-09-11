import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Header } from '../components/Header/Header'
import PokemonCard from '../components/PokemonCard/PokemonCard'
import GlobalStateContext from '../global/GlobalStateContext'
import { goToHome } from '../Rotas/coordinator'

const PokedexContainer=styled.div`
    display: flex;
    margin: 30px;
    width: 50%;
    
`

const Pokedex = () => {
    const navigate = useNavigate()
    const {pokedex} = useContext(GlobalStateContext)
    
    return (
        <>
        <Header title={"Pokedex"}
        leftButtonFunction={() => goToHome(navigate)}/>

        <PokedexContainer>
        {
          pokedex && pokedex.map((poke) =>{
            return <PokemonCard key={poke.name} isPokedex pokemon={poke}/>
          })  
        }
        </PokedexContainer>
        </>
     
    )
}

export default Pokedex;