
import Button from '../Button/Button'
import Input from '../Input/Input'
import Result from './result'

//import images
import icon1 from '../../images/$.svg'
import icon2 from '../../images/person.svg'


//import css
import './Card.css'
import { useEffect, useState } from 'react'

const Card = () => {
    const tips = [5,10,15,25,50,100]

    const [bill, setBill] = useState(0);
    const [people, setPeople] = useState(0)
    const [tip, setTip] = useState(0)
    // const [totalperPerson, setTotal] 

    const inputChanged = (value,name) => {
        if(name === 'bill') {
            setBill(value)
        }
        if(name=== 'people') {
            setPeople(value)
        }
    }

    const buttonClickHandler = (tip) => {
        setTip(tip)
    }


    return (
        <div className="container">
            <div className='Tip-splitter-info'>
                <Input label='Bill' src={icon1} changed={inputChanged}/>

                <div className='tip-percentage'>
                    {
                       tips.map((tip,index) => {
                        return <Button
                         key={index}
                         width='117px'
                         height='48px'
                         text={tip + ' %'}
                         Backcolor='#00474B' 
                         onClick={() => buttonClickHandler(tip)}/>
                       })
                    }
                </div>

                <Input label='number of people' src={icon2} changed={inputChanged}/>
            </div>

            <div className='section'>
                <Result bill={bill} people={people} tip={tip}/>
            </div>
            
        </div>
    )
}

export default Card;