import "./SingleCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SingleCard({ card, handleChoice, flipped, disabled }) {

    const handleClick = () => {
        if (!disabled) {
            handleChoice(card)
        }
    }
    return (
        <div className="card">
            <div className={flipped ? "flipped" : ""}>
                <div className='front'>
                    <FontAwesomeIcon id="icon-div" icon={card.icon}></FontAwesomeIcon>
                </div>
                <div className="back" onClick={handleClick} alt="card back"></div>
            </div>
        </div>
    )
}