import React,  { useState }from 'react'
import Button from './Button'
const App = () => {
  const [color, setColor] = useState("bg-black")
  const setBgColor = (colorName) =>{
          setColor(colorName)
  }

  return (
    <>
    <div className={`flex w-screen h-screen ${color}`}>
      <div className='bg-white  h-20 pb-4 pt-4 w-screen rounded-3xl px-4 mx-16 mt-[560px] flex flex-wrap justify-center items-center'> 
          <Button  color="red" onClick={()=>setBgColor("bg-red-600")} bgcolor="bg-red-600"/>
          <Button color="blue" onClick={() => setBgColor("bg-blue-600")} bgcolor="bg-blue-600" />
          <Button color="green" onClick={() => setBgColor("bg-green-600")} bgcolor="bg-green-600" />
          <Button color="yellow" onClick={() => setBgColor("bg-yellow-600")} bgcolor="bg-yellow-600" />
          <Button color="purple" onClick={() => setBgColor("bg-purple-600")} bgcolor="bg-purple-600" />
          <Button color="gray" onClick={() => setBgColor("bg-gray-600")} bgcolor="bg-gray-600" />
          <Button color="amber" onClick={() => setBgColor("bg-amber-600")} bgcolor="bg-amber-600" />
          <Button color="emerald" onClick={() => setBgColor("bg-emerald-600")} bgcolor="bg-emerald-600" />


      </div>
    </div>
    </>
  )
}

export default App