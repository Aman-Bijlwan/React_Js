import { useCallback, useEffect, useState, useRef } from 'react'


function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  //useRef Hook
  const passwordRef = useRef(null)

  //here i have created password changer function , but as you can see i need to call it again in checkbox of Numbers and then again in checkbox of characters (i mean whenever i'll click on the checkbox , then it will change password by calling function)
  //So for this we can use "useCallback" ....
  // so for optimization useCallback is used , it remember either full or a part of funtion and store it in its cache memory

  const passwordGenerator = useCallback(() => {

    let pass = ""

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    //if below if executes then ,  number is added to str
    if (numberAllowed) str += "0123456789";

    //same here
    if (charAllowed) str += "_*#"

    //creating loop for length

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      //REMEMBER: This char is not returning any character , but a index value
      pass += str.charAt(char)

    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  //This is use to copy pass to clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();//optional selection is used "?." bcz value can be none
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password)//This will copy 
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (

    <div className='w-full max-w-md mx-auto shadow-md text-orange-500 rounded-lg bg-gray-500 px-4 py-3 my-8 '>

      <h1 className='text-4xl text-white text-center mb-8'>
        Password Generator
      </h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4 gap-3'>

        <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3 rounded-lg'
          placeholder='Password'
          readOnly
          ref={passwordRef}
        />
        <button className='outline-none shrink-0 p-2 bg-blue-500 text-white rounded-lg'
          onClick={copyPasswordToClipboard}>
          Copy
        </button>

      </div>
      <div className='flex text-sm gap-x-2'>

        <div className='flex items-center gap-x-1 '>

          <input type="range"
            min={8}
            max={16}
            value={length}
            className='cursor-pointer '
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label >Length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>

          <input type='checkbox'
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => { setNumberAllowed((prev) => !prev) }}
          />
          <label htmlFor='numberInput'>Number</label>
        </div>

        <div className='flex items-center gap-x-1'>

          <input type="checkbox"

            defaultChecked={charAllowed}
            id="charInput"
            onChange={() => { setCharAllowed((prev) => !prev) }}
          />
          <label htmlFor='charInput'>Special Character</label>
        </div>
      </div>
    </div>

  )
}

export default App
