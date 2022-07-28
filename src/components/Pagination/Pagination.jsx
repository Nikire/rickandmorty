import React from 'react'
import { getCharacterByName} from '../../actions';
import './Pagination.css'
import { useDispatch, useSelector} from 'react-redux/es/exports';
export default function Pagination() {
    
    const prev = useSelector((state)=>state.prev);
    const next = useSelector((state)=>state.next);
    const filters= useSelector((state)=>state.filters);
    const search= useSelector((state)=>state.search);
    const dispatch= useDispatch()
    
    const onHandleChangeNext = (e)=>{
        dispatch(getCharacterByName(search,filters,next))
    }
    const onHandleChangePrev = (e)=>{
        dispatch(getCharacterByName(search,filters,prev))
    }

    return (
        <div className='container-pagination'>
            <div className="pagination">
                {prev ? <button className='pagBut' onClick={onHandleChangePrev}> {'<'} </button>:<button disabled  className='pagBut dissabledButton'>{'<'} </button>} 
                {next ? <button className='pagBut' onClick={onHandleChangeNext}> {'>'} </button>:<button disabled  className='pagBut dissabledButton'>{'>'}</button>}
                
            </div>
        </div>
    )
}
