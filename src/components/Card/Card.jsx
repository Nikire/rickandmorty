import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

export default function Card(props) {
    const statusIcon={
        display:'inline-block',
        width:'10px',
        height:'10px',
        borderRadius:'50%',
    };
    switch (props.status){
        case 'Alive':
            statusIcon.background='green';
            break;
        case 'Dead':
            statusIcon.background='red';
            break;
            case 'unknown':
            statusIcon.background='grey';
            break;
            default:
            statusIcon.background='green';

    }

    return (
        <div className='Card'>
            <Link className='link' to={`/characters/${props.id}`}><span>{props.name}</span></Link>
            <img src={props.image} alt=''/>
            <span><div style={statusIcon}></div> {props.status}</span>
        </div>
    )
}
