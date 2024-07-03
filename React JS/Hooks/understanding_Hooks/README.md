# Understanding Hooks 🤩👇

## What are Hooks?

- Hooks are functions that allow you to use state and other React features in functional components. 
- They were introduced in React version 16.8. 
- Before the introduction of Hooks, functional components were stateless and couldn't directly use React features like state or lifecycle methods. 
- Hooks provide a way to use state, effects, context, and other features in functional components without needing to write a class.

## Why do we need Hooks 

### Hooks solve a few problems in React:

1. **State and lifecycle methods**: In React, state and lifecycle methods were traditionally limited to class components. Hooks like ***useState*** and ***useEffect*** now enable functional components to manage state and perform lifecycle operations.

2. **Sharing logic between components**: Hooks provide a mechanism to share logic (such as fetching data or subscribing to events) between components without restructuring your application or resorting to higher-order components.

3. **Avoiding unnecessary re-renders**: Hooks like ***useMemo*** and ***useCallback*** help optimize performance by memoizing values and functions, preventing unnecessary re-renders of components.

4. **Simplifying code**: By reducing the need for classes and making state management more straightforward, Hooks streamline component code, making it cleaner and easier to maintain.

5. **Improving code readability**: Hooks promote a more functional style of programming in React, enhancing code readability by separating concerns and making component logic more modular.

### **Let us understand it with example :👌**

```javascript

function App() {

  let counter = 15; //we don't used here const , bcz we mean to change it later 

  let AddCount = () => {
    counter = counter + 1;
    console.log("Counter : ", counter)
  }

  let RemoveCount = () => {

    counter -= 1;
    console.log("Counter : ", counter)
  }

  return (
    <>
      <h1>React Hooks</h1>
      <h3>Counter : {counter}</h3>

      <button onClick={AddCount}>Add Count</button>
      //🤔If we call function like this :-> AddCount() ,,, inside onClick ,
      //Then it will automatically call the function and will work only once
      //That means even if click on the button then , the onClick will not work 

      <button onClick={RemoveCount}>Remove Count</button>
    </>
  )
}

```

#### What above example do :

- - *In the above example there are 2 buttons : "AddCount" and "RemoveCount" , which basically add a number and remove a number in the **" counter "** variable.* 

- - *And So on , we have created 2 simple arrow function for both the buttons.*

- Now , If we click on the button , it Adds or Remove number (counter) in the console , but not in the UI. 

- For this we need to connect/work with ui file .

- And what if we place *counter* variable in multiple places like after *Add Count* , *Remove Count* and so on . 

- So if we do this with *core JavaScript*, then it will be too much , to create a relation as we have to use different ways like  *document.querySelector* or *document.getElementById* and many more .

#### **Here is where React  come into power**

- - ( React react krti hai variable ke updation pe, ek jaga variable update ho baki jaha bhi react krde )

- - REACT DEAL WITH THE UI UPDATION.

- - *React provide us some special methods called ***HOOKS*** to deal with these things.*

- - There are many Hooks such as *useContext* , *useCallback* , *useEffect* and many more .  

- - There is Hook that we'll be using in this code know as *useState* Hook => That changes the state .

**Code Part 👇**

``` javascript 

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

```     

- ***Let's understand the code :***

- 1. First we need to import *useState* from React.

- 2. Then we will assign it to a variable i.e. *counter* and *setCounter* is bascially a function , *that is responsible to handle / update **counter** variable.*

- 3. NOTE: You can assign any name to both variable or function , Also :-> Can give any value inside useState such as *true*, *false*, *[]* -> empty string etc..

- 4. To update counter it need to be get placed inside *setCounter* as you can see in the code .