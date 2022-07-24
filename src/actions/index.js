import axios from 'axios';



export const GET_ALL_CHARACTERS = 'GET_ALL_CHARACTERS';
export const GET_CHARACTER_DETAIL='GET_CHARACTER_DETAIL';

export const getAllCharacters= ()=> async dispatch =>{
    const res=await axios.get("https://rickandmortyapi.com/api/character")
        dispatch ({
            type:GET_ALL_CHARACTERS,
            payload: res.data.results
            });
        }

export const getCharacterDetail=(id)=> async dispatch =>{
    const res=await axios.get("https://rickandmortyapi.com/api/character/"+id)
    dispatch ({
        type:GET_CHARACTER_DETAIL,
        payload: res.data
    })
}