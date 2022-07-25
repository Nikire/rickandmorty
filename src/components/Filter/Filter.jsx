import React from 'react'
import './Filter.css'


export default function Filter() {
return (
    <div className='Filter'>
        <select name='filter'>
            <option value='' selected>none</option>
        </select>
    </div>
    )
}