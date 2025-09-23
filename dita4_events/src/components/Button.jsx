//Krijimi i komponentes duke e perdorur shkurtesen 'rfc'.
import React,{ useState } from 'react'

function Button() {
const [name, setName] = useState('Arianit')
  return (
    <>
        <button onClick={() => setName("Petro")}>Click Me</button>
        <p>{name}</p>
    </>
  )
}
export default Button