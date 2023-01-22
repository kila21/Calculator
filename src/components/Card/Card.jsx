
import Button from '../Button/Button'
import Input from '../Input/Input'
import Result from './result'

//import images
import icon1 from '../../images/$.svg'
import icon2 from '../../images/person.svg'


//import css
import './Card.css'

const Card = () => {
    const tips = [5,10,15,25,50,100]

    return (
        <div className="container">
            <div className='Tip-splitter-info'>
                <Input label='Bill' src={icon1}/>

                <div className='tip-percentage'>
                    {
                       tips.map((tip,index) => {
                        return <Button key={index} width='117px' height='48px' text={tip + ' %'} Backcolor='#00474B'/>
                       })
                    }
                </div>

                <Input label='number of people' src={icon2}/>
            </div>

            <div className='section'>
                <Result />
            </div>
            
        </div>
    )
}

export default Card;