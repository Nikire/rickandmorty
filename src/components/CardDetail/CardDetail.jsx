import React,{ useEffect } from 'react'
import { getCharacterDetail } from '../../actions';
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './CardDetail.css'

export default function CardDetail() {
    const dispatch= useDispatch();
    let params=useParams();
    useEffect(()=>{
        dispatch(getCharacterDetail(params.id))},[]);
        let character= useSelector((state)=> state.characterDetails);
    return (
        <div className='CardDetail'>
            
            <p>Name{character.name}</p>
            <p>status:{character.status}</p>
            <p>specie:{character.species}</p>
            <p>Location :{character.location.name}</p>
            <img src={character.image} alt=''/>
        </div>
    )
}
