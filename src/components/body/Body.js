import React from 'react'
import './Body.css'
import Slider from '../slider/Slider'
import ToggleSwitch from '../toggleswitch/ToggleSwitch'
import Paragraph from '../paragraph/Paragraph'

const Body = () => {
  return (
    <div className="body">
        <Slider />
        <ToggleSwitch />
        <hr></hr>
        <Paragraph />
      </div>
  )
}

export default Body
