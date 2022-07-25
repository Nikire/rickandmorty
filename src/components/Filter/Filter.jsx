import React from 'react'
import './Filter.css'
import { useDispatch } from 'react-redux';
import { setFilter } from '../../actions';

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

    }

    const dispatch= useDispatch();

    const [selected, setSelected] = React.useState(props.filterType);

    const onHandleChange = (e)=>{
        setSelected(e.target.value)
        if (e.target.value === props.filterType) dispatch(setFilter('', props.filterType))
        else  dispatch(setFilter(e.target.value, props.filterType))
    }

return (
    <div className='Filter'>
        <select name='filter' onChange={onHandleChange} value={selected}>
            <option defaultValue=''>{props.filterType}</option>
            {
                options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))
            }
        </select>
    </div>
    )
}