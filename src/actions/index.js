import axios from 'axios';



export const GET_ALL_CHARACTERS = 'GET_ALL_CHARACTERS';
export const GET_CHARACTER_DETAIL='GET_CHARACTER_DETAIL';
export const GET_CHARACTER_BY_NAME = 'GET_CHARACTER_BY_NAME';
export const SET_FILTER = 'SET_FILTER';
export const SET_SEARCH = 'SET_SEARCH';
export const RESET_PAGES= 'RESET_PAGES';
export const GET_ERROR= 'GET_ERROR';

export const getAllCharacters= ()=> async dispatch =>{
    await axios.get("https://rickandmortyapi.com/api/character")
        .then(res=>dispatch ({
            type:GET_ALL_CHARACTERS,
            payload: res.data
            }))
        .catch((err)=> dispatch ({
            type:GET_ERROR,
            payload: err.response,
        }));
        }

export const getCharacterDetail=(id)=> async dispatch =>{
    await axios.get("https://rickandmortyapi.com/api/character/"+id)
    .then(res=>dispatch ({
        type:GET_CHARACTER_DETAIL,
        payload: res.data
        }))
        .catch((err)=> dispatch ({
            type:GET_ERROR,
            payload: err.response,
        }));
}

export const getCharacterByName=(search,filters,page)=> async dispatch =>{
    let filterString='';
    for (const filter in filters) {
        filterString+='&'+filter+'='+filters[filter];
    }
    //BUENA MANERA DE UTILIZAR EL AXIOS
    await axios.get(page+'&name='+search.toLowerCase()+filterString)
    .then(res => dispatch ({
        type:GET_CHARACTER_BY_NAME,
        payload: res
    }))
    .catch((err)=> dispatch ({
        type:GET_ERROR,
        payload: err.response,
    }))
    //BUENA MANERA DE UTILIZAR EL AXIOS
}


export const setFilter=(filter,filterType)=>{
    return ({
        type:SET_FILTER,
        payload: {filter,filterType}
    })
}
export const setSearch=(search)=> {
    return ({
        type:SET_SEARCH,
        payload: search
    })
}

export const resetPages=()=> {
    return ({
        type:RESET_PAGES,
        payload: 'https://rickandmortyapi.com/api/character?page=2',
    })
}
