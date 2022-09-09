import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../components/Header/Header'
import PokemonCard from '../components/PokemonCard/PokemonCard'
import GlobalStateContext from '../global/GlobalStateContext'
import { goToHome } from '../Rotas/coordinator'

const Pokedex = () => {
    const navigate = useNavigate()
    const {pokedex} = useContext(GlobalStateContext)
    
    return (
        <>
        <Header title={"Pokédex"}
        leftButtonFunction={() => goToHome(navigate)}/>

        <div>
        {
          pokedex && pokedex.map((poke) =>{
            return <PokemonCard key={poke.name} isPokedex pokemon={poke}/>
          })  
        }
        </div>
        </>
     
    )
}

export default Pokedex