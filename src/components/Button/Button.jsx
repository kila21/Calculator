import './button.css'

const Button = (props) => {
    return (
        <button className='button' style={{width: props.width, height: props.height, backgroundColor: props.Backcolor}}>
            {props.text}
        </button>
    )
}

export default Button;