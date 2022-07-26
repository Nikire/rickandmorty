import React,{ useEffect, useState } from 'react'
import { getCharacterDetail } from '../../actions';
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './CardDetail.css'

export default function CardDetail() {
    const dispatch= useDispatch();
    const error= useSelector(state=>state.error);
    const loading=useSelector(state=>state.loading);
    let params=useParams();
    useEffect(()=>{
        dispatch(getCharacterDetail(params.id))},[]);
        const character= useSelector((state)=> state.characterDetails);
        let location;
        let origin;
        if(character.location !== undefined) {
            location=character.location.name;
            origin=character.origin.name;
        }
    return (
        <div className='wrapperDetails'>
            
            {
            loading?
            <div class="spinner-border" role="status">
                <span class="sr-only">  </span>
            </div>
            :
            (error!=='') ? <label className='error'>error {error.status} {error.data.error}</label> :
            <div className='CardDetail'>
                <p>Name: {character.name}</p>
                <p>Status: {character.status}</p>
                <p>Specie: {character.species}</p>
                <p>Location: {location}</p>
                <p>Origin: {origin}</p>
                <img src={character.image} alt=''/>    
            </div>
            }
            
        </div>
    )
}
