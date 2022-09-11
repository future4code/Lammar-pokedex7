import styled from "styled-components";

export const CardPokeContainer=styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    background: #F5DCBA;
    padding: 0.5em;
    margin: 1em;
    border-radius: 10px;
    border-top: 0.5px solid #e4c439;
    border-bottom: 0.5px solid #e4c439;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0.23);
    width: 20%;
`

export const CardImage=styled.img`
    width: 150px;
    display: block;
    margin: auto;
    
`
export const ButtonCardRemoveAdd = styled.button`
    color: darkblue;
    background-color: white;
    font-size: 0.8em;
    margin: 0.5em;
    border: 2px solic white;
    border-radius: 6px;
    margin-top: 1em;
    /* padding: 0.5em; */
    
`

export const ButtonCardDetail = styled.button`
    color: darkblue;
    background-color: white;
    font-size: 0.8em;
    /* margin-left: em; */
    /* padding: 1em 0.5em; */
    border: 2px solic white;
    border-radius: 6px;
    /* padding: 0.5em; */
    
    `