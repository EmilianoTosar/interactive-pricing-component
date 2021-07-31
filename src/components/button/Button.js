import React from 'react'
import './Button.css'

const Button = ({cta}) => {
  return (
    <button className="btn">{cta}</button>
  )
}

export default Button