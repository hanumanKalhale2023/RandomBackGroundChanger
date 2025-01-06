import React from 'react'
import { useState } from 'react'

const App = () => {

  const [color, setColor]=useState('#000000');
  const changeColor=()=>{
    const randomColor="#" + (Math.random()*255*10000).toFixed()
    console.log(randomColor)
    setColor(randomColor)
  }
  return (
    <div style={{
      height:'100vh',
      width:'100vw',
      background:color

    }}>
  <center><button className='btn btn-warning ' onClick={changeColor}>
    Change Background
  </button></center>
    </div>
  )
}

export default App