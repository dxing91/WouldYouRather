import React from 'react'
import { formatTime } from 'helpers/utils'

export default function ListItem({firstOptionText, secondOptionText, author, timestamp, answered, onClick}) {
  const classname = answered ? 'list-item list-item__answered' : 'list-item'
  return (
    <div className={classname} onClick={onClick}>
      <h3 className='list-item__h3'>{firstOptionText} or {secondOptionText}</h3>
      <p className='list-item__p'>Created on {formatTime(timestamp)} by {author}</p>
    </div>
  )
}
