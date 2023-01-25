import { useEffect, useState } from 'react'
import Button from '../Button/Button'

//import css
import './result.css'

const Result = (props) => {
    const [tipAmountPerPerson, setTipAmountPerPerson] = useState(0);
    const [totalAmountPerPerson, setTotalAmountPerPerson] = useState(0);

    useEffect(()=> {
        if(props.people > 0) {
            const totalTip = +props.bill * +props.tip / 100
            setTipAmountPerPerson(totalTip / +props.people)
            
            const totalAmount = (+props.bill / +props.people) + tipAmountPerPerson;
            console.log(totalAmount)
            setTotalAmountPerPerson(totalAmount)
        }
    }, [props.bill,props.tip, props.people,totalAmountPerPerson,tipAmountPerPerson])

    // const tipAmount = +props.tip / +props.people

    
    // console.log(typeof(props.tip))
    return (
        <div className='result_continer'>
            <div className='results'>
                <h3>Tip Amount</h3>
                <p>$ <span>{tipAmountPerPerson.toFixed(2)}</span></p>
            </div>
            <div className='results'>
                <h3>Total</h3>
                <p>$ <span>{totalAmountPerPerson.toFixed(2)}</span></p>
            </div>
            <Button width='333px' height='48px' text='RESET' Backcolor='#26C2AE'/>
        </div>
    )
}

export default Result;