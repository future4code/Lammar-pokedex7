import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import GlobalStateContext from '../../global/GlobalStateContext'
import { goToBack } from '../../Rotas/coordinator'
import { DetailContainer, ContainerPoderes, ContainerAtaques, ContainerImg, TitleDetail } from './Style'

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
        <TitleDetail>
            {selectedPokemon&&selectedPokemon.types && selectedPokemon.types.map((type)=>{
                return <p key={type.type.name}>{type.type.name}</p>
            })}
        </TitleDetail>
        <DetailContainer>
            {selectedPokemon && selectedPokemon.sprites &&
            <ContainerImg>
                <img src={selectedPokemon.sprites.front_default}/>
                <img src={selectedPokemon.sprites.back_default}/>
            </ContainerImg>
             }
            <ContainerPoderes>
                <h1>Poderes</h1>
                {selectedPokemon&&selectedPokemon.stats&&selectedPokemon.stats.map((stat)=>{
                    return (
                        <p key={stat.stat.name}>
                          <strong>{stat.stat.name}</strong>{stat.base_stat}
                        </p>
                    )})}
            </ContainerPoderes>
            <>
            {/* <>
            {selectedPokemon&&selectedPokemon.types && selectedPokemon.types.map((type)=>{
                return <p key={type.type.name}>{type.type.name}</p>
            })}
            </> */}
            <ContainerAtaques>
            <h1>Principais ataques</h1>
            {selectedPokemon && selectedPokemon.moves && selectedPokemon.moves.map((move, index) =>{
                return(
                    index < 5 && <p key={move.move.name}>{move.move.name}</p>
                )
            })}
            </ContainerAtaques>
            </>
        </DetailContainer>
        </>
    )

}

export default PokemonDetails;