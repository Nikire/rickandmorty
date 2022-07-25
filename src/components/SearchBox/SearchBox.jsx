import React, { useId } from 'react'
import Searchbar from '../Searchbar/Searchbar'
import Filter from '../Filter/Filter'
import './SearchBox.css'


export default function SearchBox() {
return (
    <div className='Limiter'>
        <div className='SearchBox'>
            <Searchbar />
            <Filter key={useId()} filterType='status'/> {/* STATUS */}
            <Filter key={useId()} filterType='species'/> {/* SPECIES */}
            <Filter key={useId()} filterType='type'/> {/* TYPE */}
            <Filter key={useId()} filterType='gender'/> {/* GENDER */}
        </div>
        <div></div>
    </div>
    )
}