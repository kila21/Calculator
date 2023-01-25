import './button.css'

const Button = (props) => {
    // const clickHandler = () => {
    //     console.log(props.onClick)
    // }

    return (
        <button onClick={props.onClick} className='button' style={{width: props.width, height: props.height, backgroundColor: props.Backcolor}}>
            {props.text}
        </button>
    )
}

export default Button;