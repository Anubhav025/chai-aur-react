import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200 "
    style={{backgroundColor: color}} >
    <div className="fixed flex flex-wrap display-flex justify-center bottom-12 px-50">
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button onClick={()=>setColor("green")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor: 'green'}}>
          green
        </button>
        <button onClick={()=>setColor("red")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor: 'red'}}>
          red
        </button>
        <button onClick={()=>setColor("white")}
        className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
        style={{backgroundColor: 'white'}}>
          white
        </button>
        <button onClick={()=>setColor("yellow")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor: 'Yellow'}}>
          yellow
        </button>
        <button onClick={()=>setColor("blue")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor: 'blue'}}>
          blue
        </button>
      </div>
    </div>
    </div>
  )
}

export default App
