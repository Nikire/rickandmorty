import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

export default function Card(props) {
    return (
        <div className='Card'>
            <Link to={`/characters/${props.id}`}><p>{props.name}</p></Link>
            <p>{props.status}</p>
            <img src={props.image}/>
        </div>
    )
}
