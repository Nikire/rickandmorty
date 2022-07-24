import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'


export default function Nav() {
return (
    <nav>
        <div className="Links">
            <div className="item"><Link to='/' className='link' ><span>Home</span></Link></div>
        </div>
        <div className="item"><h2>Rick and Morty App</h2></div>
        <div className="item"></div>
    </nav>
    )
}