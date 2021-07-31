import React from 'react'
import './Paragraph.css'
import Button from '../button/Button'

const Paragraph = () => {
  return (
    <div className="paragraph">
      <ul>
        <li>Unlimited websites</li>
        <li>100% data ownership</li>
        <li>Email reports</li>
      </ul>
      <Button cta="Start my trial" />
    </div>
  )
}

export default Paragraph