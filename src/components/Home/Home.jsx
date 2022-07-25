import React from 'react'
import Cards from '../Cards/Cards'
import SearchBox from '../SearchBox/SearchBox'
import './Home.css'

export default function Home() {
    return (
        <div className='wrapper'>
            <SearchBox/>
            <Cards />
        </div>
    )
}
