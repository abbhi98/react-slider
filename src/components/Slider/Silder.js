import { useState } from 'react';
import './Slider.css'

const Slider = ()=>{

    const [rating,updateRating] = useState([0])

    function handleChange(e){
      updateRating(e.target.value)
      document.documentElement.style.setProperty("--background", `conic-gradient(white ${e.target.value*36}deg, #31396e ${e.target.value*36}deg)`);
    }
    
    return (
        <section id="slider-container">
            <div id='circle-container'>
                <div id='circle'>
                    <div id='percentage'>
                        {rating}
                    </div>
                </div>
            </div>
            <input id='range-input' type='range' min='0' value={rating} max='10' onChange={handleChange}></input>
        </section>
    )
}
export default Slider