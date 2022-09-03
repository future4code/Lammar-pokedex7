import React, { useState, useEffect} from 'react';
import axios from "axios";


const useRequestData = (url)=>{
    const [data, setData]=useState()
    // const [isLoading, setSloading]=useState(undefined)
    // const [erro, setErro]=useState(undefined)

    useEffect(()=>{
        // setSloading(true);
        axios.get(`${url}`)
        .then(response =>{setData(response.data)})
        .catch(error=>{
            // setSloading(false)
            // setErro(error)
        })
    }, [url])
}

export default useRequestData;