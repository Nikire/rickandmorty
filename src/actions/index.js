import axios from 'axios';



export const GET_ALL_CHARACTERS = 'GET_ALL_CHARACTERS';
export const GET_CHARACTER_DETAIL='GET_CHARACTER_DETAIL';
export const GET_CHARACTER_BY_NAME = 'GET_CHARACTER_BY_NAME';
export const SET_FILTER = 'SET_FILTER';

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

export const getCharacterByName=(name,filters)=> async dispatch =>{
    let filterString='';
    for (const filter in filters) {
        filterString+='&'+filter+'='+filters[filter];
    }
    console.log(filterString)
    const res=await axios.get("https://rickandmortyapi.com/api/character/?name="+name.toLowerCase()+filterString)
    dispatch ({
        type:GET_CHARACTER_BY_NAME,
        payload: res.data.results
    })
}


export const setFilter=(filter,filterType)=> async dispatch =>{
    dispatch ({
        type:SET_FILTER,
        payload: {filter,filterType}
    })
}