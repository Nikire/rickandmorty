import React, { useEffect } from 'react'
import Cards from '../Cards/Cards'
import SearchBox from '../SearchBox/SearchBox'
import Pagination from '../Pagination/Pagination'
import './Home.css'

export default function Home() {
    useEffect(()=>{
        //reset filter state
    },[])
    return (
        <div className='wrapper'>
            <SearchBox/>
            <Pagination />
            <Cards />
        </div>
    )
}
