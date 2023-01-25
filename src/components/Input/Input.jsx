import './Input.css'

import dollar from '../../images/$.svg'
import { useEffect, useState } from 'react'

const Input = (props) => {
    const [value, setValue] = useState(0)
    const changeHandler = (e) => {
        setValue(e.target.value)
        if(props.label === 'Bill') {
            props.changed(e.target.value,'bill')
        }
        props.changed(e.target.value,'people')
    }


    return (
        <div className='input-container'>
            <label>{props.label}</label>
            <div className='input'>
                <input type='number' min={1} onChange={changeHandler}/>
                <img src={props.src} />
            </div>
            
        </div>
        
    )
}

export default Input;