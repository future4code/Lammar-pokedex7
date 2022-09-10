import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import GlobalStateContext from '../../global/GlobalStateContext'
import { goToBack } from '../../Rotas/coordinator'

const PokemonDetails = () => {
    const navigate = useNavigate()
    const [selectedPokemon, setSelectedPokemon] = useState()
    const {name} = useParams()
    const {pokemons} = useContext(GlobalStateContext)

    useEffect(()=>{
        const currentPokemon = pokemons.find((item) => {return item.name === name})
        setSelectedPokemon(currentPokemon)
    }, [])
   
    return (
        <>
        <Header
        title={"Detalhes do Pokemon"}
        leftButtonFunction={()=>goToBack(navigate)}
        showRightButton
        />
        <div>
            {selectedPokemon && selectedPokemon.sprites &&
            <div>
        <img src={selectedPokemon.sprites.front_default}/>
        <img src={selectedPokemon.sprites.back_default}/>
            </div>
             }
            <div>
                <h1>Poderes</h1>
                {selectedPokemon&&selectedPokemon.stats&&selectedPokemon.stats.map((stat)=>{
                    return (
                        <p key={stat.stat.name}>
                          <strong>{stat.stat.name}</strong>{stat.base_stat}
                        </p>
                    )})}
            </div>
            <>
            <>
            {selectedPokemon&&selectedPokemon.types && selectedPokemon.types.map((type)=>{
                return <p key={type.type.name}>{type.type.name}</p>
            })}
            </>
            <>
            <h1>Principais ataques</h1>
            {selectedPokemon && selectedPokemon.moves && selectedPokemon.moves.map((move, index) =>{
                return(
                    index < 5 && <p key={move.move.name}>{move.move.name}</p>
                )
            })}
            </>
            </>
        </div>
        </>
    )

}

export default PokemonDetails