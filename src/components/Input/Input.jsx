import './Input.css'

import dollar from '../../images/$.svg'

const Input = (props) => {
    return (
        <div className='input-container'>
            <label>{props.label}</label>
            <div className='input'>
                <input type='number'/>
                <img src={props.src}/>
            </div>
            
        </div>
        
    )
}

export default Input;