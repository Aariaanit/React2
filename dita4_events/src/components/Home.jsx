import React from 'react'
import Button from './Button'

function Home() {
   {/* Function */}
  const vlera = () => {
    console.log("Hello")
  }

  const vlera2 = (name) => {
    console.log("Hello "+name)
  }

  const h1 = {
    color: 'red',
    backgroundColor: 'black',
    padding: '10px',
    borderRadius: '5px'
  }
  const p1 = {
    color: 'white',
    backgroundColor: 'darkblue',
    padding: '10px',
    borderRadius: '15px'
  }

  return (
    <>
        <h1 style={h1}>Home Page</h1>
        <p style={p1}>Welcome to the Home Page!</p>
        <Button />
        <button onClick={vlera}>Kliko</button>
        <button onClick={() => vlera2("Prizren")}>Kliko ketu</button>
       


    </>
  )
}

export default Home