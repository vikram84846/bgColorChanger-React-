import React, { useState } from 'react'

const Button = ({color ="button",onClick, bgcolor}) => {
  return (
    <button className={`text-white bg-black px-3 py-3 rounded-3xl mx-2 w-24 ${bgcolor} font-bold`} onClick={onClick}>{color}</button>
  )
}

export default Button