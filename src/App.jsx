import { useEffect, useState } from 'react'
import './App.css'
import { useCallback } from 'react';
import { useRef } from 'react';
function App() {
  const [length, setLength] = useState();
  const [isNumber, setIsNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [Password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (isNumber) { str += "1234567890" }
    if (char) { str += "~!@#$%^&*()_+|" }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }

    setPassword(pass)
    
  }, [length, isNumber, char, setPassword])


  const passRef = useRef(null)

  const copyPassword = useCallback(()=>{
    passRef.current?.select()
    window.navigator.clipboard.writeText(Password)
  },[Password])

  useEffect(()=>{
    passwordGenerator()
  },[length,isNumber,char,passwordGenerator])

  return (
    <div>
      <div className='flex gap-4 flex-col'>
        <div className='text-2xl '>
          Password Generator
        </div>
        <div className="inpo bg-black p-4 gap-2 flex-col flex rounded-md">
          <div>
            <input type="text" value={Password} readOnly placeholder='Password' className='p-2 rounded-md border-2 ' />
            <button className='px-4 rounded-lg bg-blue-500'
            onClick={copyPassword}
            >Copy</button>
          </div>
          <div>
            <div className='flex text-white flex-col gap-4'>
              <label htmlFor="">Length : {length}</label>
              <input type="range"
                min={6}
                max={18}
                value={length}
                onChange={(e) => { setLength(e.target.value) }}
              />
              <div className='flex gap-2'>
                <label htmlFor="Number">Number</label>
                <input type="checkbox" name="Number" id=""
                  defaultChecked={isNumber}
                  onChange={() => {
                    setIsNumber((prev) => !prev)
                  }}
                />
              </div>
              <div className='flex gap-2'>
                <label htmlFor="Number">Cahrecters</label>
                <input type="checkbox" name="Char" id=""
                  defaultChecked={char}
                  onChange={() => {
                    setChar((prev) => !prev);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
