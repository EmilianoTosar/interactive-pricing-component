import React, { useState } from 'react'
import './Slider.css'
import './rangeInput'

const Slider = () => {
  const [value, setValue] = useState(16)

  return (
    <div className="slider-container">
      <h4>100K PAGEVIEWS</h4>
      <input 
        type="range" 
        name="price" 
        id="slider" 
        min="1.00"
        max="32.00"
        step="0.05"
        value={value}
        onChange={e => setValue(e.target.value)}
        
      />
      <p><span>$</span><span className="value">{value}</span> /month</p>
    </div>
  )
}

export default Slider