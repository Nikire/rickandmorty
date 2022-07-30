import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SoftNotFound() {
    const navigate= useNavigate();
    const redirect= ()=>(setTimeout(()=>navigate('/rickandmorty/'),3000))

    useEffect(()=>{redirect()},[])

    return (
        <div>Página no encontrada,redirigiendo en 3 segundos al home...</div>
    )
}
