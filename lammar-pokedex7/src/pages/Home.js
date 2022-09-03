import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../Constants/constants';
import { goToPokedexDetails, goToAddPoke} from '../coordinator/coordinator';
import useRequestData from '../Hooks/useRequestData';



const Home = () => {

    const [data]=useRequestData(`${BASE_URL}pokemon/`)
    // const navigate=useNavigate()
    const listaPoke = data && data.pokemon.map((list)=>{
            return <ul key={list.name}>              
            </ul>
            console.log(listaPoke)
    })
   
    
    return (
        <div>
           {/* {data && data&&listaPoke} */}
           {listaPoke}
           
        </div>
    )
}

export default Home;