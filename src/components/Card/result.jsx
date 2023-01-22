import Button from '../Button/Button'

//import css
import './result.css'

const Result = (props) => {
    return (
        <div className='result_continer'>
            <div className='results'>
                <h3>Tip Amount</h3>
                <p>$ <span>4.27</span></p>
            </div>
            <div className='results'>
                <h3>Total</h3>
                <p>$ <span>32.27</span></p>
            </div>
            <Button width='333px' height='48px' text='RESET' Backcolor='#26C2AE'/>
        </div>
    )
}

export default Result;