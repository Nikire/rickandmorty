import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as actions from "../../actions";
import './Searchbar.css'


export default function Searchbar() {

    const dispatch= useDispatch();
    
    const [search,setSearch]=React.useState('')
    const filters=useSelector((state)=>state.filters)
    const onHandleChange = (e)=>{
    setSearch(e.target.value);
    }

    const onSubmitChange = (e)=>{
        e.preventDefault();
        dispatch(actions.getCharacterByName(search,filters,'https://rickandmortyapi.com/api/character?page=1'))
        dispatch(actions.setSearch(search))
        setSearch('');
    }

return (
    <div className='Searchbar'>
        <form onSubmit={onSubmitChange}>
            <input type='text' className='input' value={search} onChange={onHandleChange} placeholder='Search here...'></input>
            <button type='submit'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg></button>
        </form>
    </div>
    )
}