import React from 'react'
import './ToggleSwitch.css'

const ToggleSwitch = () => {
  return (
    <div className="switch-body">
      <p>Monthly Billing</p>
      <label className="switch">
        <input type="checkbox" name="checkbox" id="checkbox" />
        <span className="slider"></span>
      </label>
      <p>Yearly Billing</p>
      <span>-25% <span>discount</span></span>
    </div>
  )
}

export default ToggleSwitch