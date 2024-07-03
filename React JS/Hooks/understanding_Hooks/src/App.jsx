import { useState } from 'react'

import './App.css'

function App() {

  // let counter = 15; //we don't used here const , bcz we mean to change it later 

  let [counter, setCounter] = useState(15)

  let AddCount = () => {
    counter = counter + 1;
    setCounter(counter)
    console.log("Counter : ", counter)
  }

  let RemoveCount = () => {

    // counter -= 1;
    // setCounter(counter)
    setCounter(counter - 1)
    console.log("Counter : ", counter)
  }

  return (
    <>
      <h1>React Hooks</h1>
      <h3>Counter : {counter}</h3>

      <button onClick={AddCount}>Add Count</button>

      <button onClick={RemoveCount}>Remove Count</button>
    </>
  )
}

export default App
