import { useState } from "react"
import './Bar.css'

const Bar = () =>{

    let ratingsList = {
        1: 'Very Low 😔',
        2: 'Low 😒',
        3: 'Moderate 🙂',
        4: 'High 😄',
        5: 'Very High 🥳',
    }

    const [rating,updateRating] = useState([1])
    
    return (
        <section id="bar-container">
            <div id="grade-display">
                {ratingsList[rating]}
            </div>
            <div id="bar-slider">
                <div className={`level level-5 ${rating >= 5 ? 'selected' : ''}`} onClick={()=>updateRating(5)}></div>
                <div className={`level level-4 ${rating >= 4 ? 'selected' : ''}`} onClick={()=>updateRating(4)}></div>
                <div className={`level level-3 ${rating >= 3 ? 'selected' : ''}`} onClick={()=>updateRating(3)}></div>
                <div className={`level level-2 ${rating >= 2 ? 'selected' : ''}`} onClick={()=>updateRating(2)}></div>
                <div className={`level level-1 ${rating >= 1 ? 'selected' : ''}`} onClick={()=>updateRating(1)}></div>
            </div>
        </section>
    )
}
export default Bar