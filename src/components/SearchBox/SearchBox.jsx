import React from 'react'
import Searchbar from '../Searchbar/Searchbar'
import Filter from '../Filter/Filter'
import './SearchBox.css'


export default function SearchBox() {
return (
    <div className='Limiter'>
        <div className='SearchBox'>
            <Searchbar />
            <Filter /> {/* STATUS */}
            <Filter /> {/* SPECIES */}
            <Filter /> {/* TYPE */}
            <Filter /> {/* GENDER */}
            {/* ButtonSearch */}
        </div>
        <div></div>
    </div>
    )
}