import React,{useEffect} from 'react'
import { getAllCharacters } from '../../actions';
import Card from '../Card/Card'
import {useDispatch, useSelector} from 'react-redux'
import './Cards.css'

export default function Cards() {
    const dispatch= useDispatch();
    useEffect(()=>{

        dispatch(getAllCharacters())},[]);
        let characters=useSelector((state)=> state.characters)
        return (
        <div className='Cards'>
            {characters.map(character=>(
                <Card id={character.id} name={character.name} status={character.status} image={character.image}/>
            ))}
            
        </div>
    )
}
