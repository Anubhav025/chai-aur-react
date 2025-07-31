import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(5)

  const addValue = ()=>{
    if(counter>=20){
      alert("Counter can't be greater than 20")
    }
    else setCounter(counter + 1)
  }
  const removeValue = () => {
    if(counter<=0){
      alert("Counter can't be negative")
    }
    else setCounter(counter - 1)
  } 

  return (
    <>
     <h1>Chai Aur React</h1>
     <h2>Value change: {counter}</h2>
     <button
      onClick={addValue}
     >Add Value </button>
     <br/>
     <button
     onClick={removeValue}
     >Remove value</button>
    </>
  )
}

export default App
