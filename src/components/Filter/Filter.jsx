import React from 'react'
import './Filter.css'
import { useDispatch, useSelector } from 'react-redux';
import { setFilter,resetPages, getCharacterByName } from '../../actions';

export default function Filter(props) {
    let options = [];
    switch (props.filterType) {
        case 'status':
            options=['Alive','Dead','unknown'];
            break;
        case 'species':
            options=['Human','Alien','Humanoid','unknown'];
            break;
        case 'type':
            options=['Parasite','Human with antennae','Fish-Person','Cat-Person'];
            break;
        case 'gender':
            options=['Female','Male','Genderless','unknown'];
            break;
        default:

    }

    const dispatch= useDispatch();

    const [selected, setSelected] = React.useState(props.filterType);
    const search = useSelector((state)=>state.search);
    const filters= useSelector((state)=>state.filters);

    const onHandleChange = (e)=>{
        setSelected(e.target.value)
        if (e.target.value === props.filterType) dispatch(setFilter('', props.filterType))
        else  dispatch(setFilter(e.target.value, props.filterType))
        dispatch(resetPages())
    }
    React.useEffect(() => {
        dispatch(getCharacterByName(search,filters,'https://rickandmortyapi.com/api/character?page=1'))
    }, [filters])
    
return (
    <div className='filters'>
        <select className='filter' name='filter' onChange={onHandleChange} value={selected} >
            <option className='option' defaultValue='' hidden>{props.filterType}</option>
            <option className='option' value=''>All</option>

            {
                options.map((option) => (
                    <option className='option' key={option} value={option}>{option}</option>
                ))
            }
        </select>
    </div>
    )
}