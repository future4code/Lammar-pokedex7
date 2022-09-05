import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../constants/constants';
import { goToPokedexDetails, goToAddPoke} from '../coordinator/coordinator';
import useRequestData from '../Hooks/useRequestData';



const Home = () => {

    const [data]=useRequestData(`${BASE_URL}pokemon`)
    console.log(data)

    // const[image]=useRequestData(`${BASE_URL}pokemon/1/`)
    
    const listPoke = data && data.results.map((list)=>{
        return(
            <div key={list.name}>
                <container>
                    <p>{list.name}</p>
                    {/* <img src="https://pokeapi.co/api/v2/pokemon/2/"></img> */}
                </container>
                <div>
                    <button>Adicionar</button>
                    <button>Ver detalhes</button>
                </div>     
            </div>
        )
    })
    
   
}

export default Home;


// const listaPoke = data && data.pokemon.map((list)=>{
//     return <ul key={list.name}>              
//     </ul>
//     console.log(listaPoke)
// })


// return (
// <div>
//    {/* {data && data&&listaPoke} */}
//    {listaPoke}
   
// </div>