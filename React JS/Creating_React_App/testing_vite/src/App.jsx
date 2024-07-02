import Hello from "./Hello"

function App() {
  const user = "Aman"
  return (

    //We can only pass one statement in return , but if we need to pass more , then we can use div or fragment like <></>
    <>
      <Hello />
      <h3>How are you - {user}</h3>
    </>

  )
}

export default App
