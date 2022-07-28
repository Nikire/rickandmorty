import React,{useEffect} from 'react'
import { getAllCharacters } from '../../actions';
import Card from '../Card/Card'
import {useDispatch, useSelector} from 'react-redux'
import './Cards.css'

export default function Cards() {
    const dispatch= useDispatch();
    const error= useSelector(state=>state.error);
    useEffect(()=>{

        dispatch(getAllCharacters())},[]);
        let characters=useSelector((state)=> state.characters)
        return (
        <div className='Cards'>
            {
            (error!=='') ? <label className='error'>error {error.status} {error.data.error}</label> :
            characters.map(character=>(
                <Card key={character.id} id={character.id} name={character.name} status={character.status} image={character.image}/>
            ))}
            
        </div>
    )
}
