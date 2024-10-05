import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passGen = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijlmnopqrstuvwxyz"
    
    if (number) str += "0123456789"
    if (character) str += "@#$%._!"
    
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      
      pass += str.charAt(char)
      
    }
    
    setPassword(pass)
    
  }, [length, number, character, setPassword])
  
  const copyPassToBoard = useCallback(() => {
      passwordRef.current?.select();
      window.navigator.clipboard.writeText(password)
  },[password])
  
  useEffect(()=>{
    passGen()
}, [length, number, character, passGen])


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-200">

        <h1 className="mb-2">Password Generator</h1>

        <div className=" flex shadow rounded-lg mb-4 overflow-hidden">

          <input type="text"
            value={password}
            className="outline-none w-full py-1 px-3" placeholder="password" readOnly
            ref={passwordRef} />
          <button
          onClick={copyPassToBoard}
          >Copy</button>

        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={4}
              max={20}
              value={length}
              id="Range"
              className="cursor-pointer"
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label htmlFor="Range">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={number}
              id="numInput"
              onChange={() => {
                setNumber((prev) => !prev)
              }}
            />
            <label htmlFor="numInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={character}
              id="charInput"
              onChange={() => {
                setCharacter((prev) => !prev)
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>


        </div>

      </div>
    </>
  )
}

export default App
