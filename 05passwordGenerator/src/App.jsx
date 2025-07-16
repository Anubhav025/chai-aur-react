import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(8)
  const [numberAllowed,setnumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false) 
  const [Password,setPassword] = useState("");

  const PasswordGenerator = useCallback(()=> {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str += "1234567890"
    if(charAllowed) str += "!@#$%^&*(){}:"
    for(let i = 1; i <= length; i++) {
      let char= Math.floor(Math.random() * str.length +1);
      pass += str.charAt(char);
    }
    setPassword(pass)
  },[length, numberAllowed, charAllowed, setPassword])
  //useRef
  const refPassword = useRef(null);

  //for copy password
   const copyPassword = useCallback(()=>{
    refPassword.current?.select()
    window.navigator.clipboard.writeText(Password)
    },[Password]
  )

  useEffect(() =>{
    PasswordGenerator()
  },[length, numberAllowed,charAllowed,PasswordGenerator])
  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md px-4 
     rounded-lg py-3 my-8 bg-gray-700 text-orange-500'>
     <h1 className='text-2xl font-bold text-white text-center my-3'>Password Generator</h1>
      <div className='flex-shadow rounded-lg overflow-hidden md-4'>
          <input
            type="text"
            value={Password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={refPassword}
          />
          <button 
          onClick={copyPassword}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy
          </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
            <input
              type='range'
              min ={6}
              max = {100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            checked={numberAllowed}
            id='numberInput'
            onChange={() => {setnumberAllowed((prev)=>!prev)
            }}
          />
          Number
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          checked={charAllowed}
          id='charInput'
          onChange={() => {setCharAllowed((prev)=>!prev)} //to flip the false value to true and true to false
          }
          />
          Character
        </div>
      </div>
     </div>
    </>
  )
}

export default App
