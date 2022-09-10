import React, { useContext } from 'react'
import  PokemonCard  from '../../components/PokemonCard/PokemonCard';
import { Header } from '../../components/Header/Header';
import { PokeHomeContainer } from './styled';
import GlobalStateContext from '../../global/GlobalStateContext';
import { goToAddPoke } from '../../Rotas/coordinator';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate()
    const {pokemons} = useContext(GlobalStateContext)

    return (
        <>
         <Header 
         title={"Lista de Pokémons"}
         leftButtonFunction={()=>goToAddPoke(navigate)}/>
         
         <PokeHomeContainer>
         {
            pokemons.map((poke)=> {
                return <PokemonCard key={poke.name} pokemon={poke}/>
            })
         }
         
         </PokeHomeContainer>
    
        </>
    )

}

export default Home;