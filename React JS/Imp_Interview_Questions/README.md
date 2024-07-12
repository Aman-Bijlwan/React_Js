# Importand React Interview Questions :🤩

## Question 1: On Counter .🤔👇

### Scenario :

There is an `Add Count` button in `Understanding_Hooks`. Consider the following function AddCount where we call `setCounter(counter + 1)` three times. <br/>

Would this affect the count ?    

Example :

```javascript

let [counter, setCounter] = useState(15)

  let AddCount = () => {

    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    
    console.log("Counter : ", counter)
  }
  
```

#### Answer:
-  `NO` , it will still Add only 1.

#### Explanation : 

- In React, state updates are asynchronous and may be batched for performance gains. When you call `setCounter(counter + 1)` multiple times within the same function, React batches these updates. 
- Since all three updates are based on the same `counter` value (15 in this case), they effectively override each other, resulting in a single increment.

- React uses a mechanism called ***`"fiber"`*** to manage this batching. 
- *Thus, only the last state update in the same render cycle is applied..*

### Correct Approach :😁👌

To ensure each setCounter call increments the counter based on its latest state, you should use the functional form of setCounter. This approach correctly references the most recent state value.

```javascript

let [counter, setCounter] = useState(15)

  let AddCount = () => {
    
    // setCounter((prevCounter) => prevCounter + 1;)
    // setCounter((counter) => counter + 1;) //Both are same
    setCounter(prevCounter => prevCounter + 1;)
    setCounter(prevCounter => prevCounter + 1;)
    setCounter(prevCounter => prevCounter + 1;)

    console.log("Counter : ", counter)
  }

```
#### Explanation of the Correct Approach:

- `setCounter` accepts a callback function where `prevCounter` is the previous state value.
- In the first call, `prevCounter` is 15, so the state updates to 16.
- In the second call, `prevCounter` is now 16, so the state updates to 17.
- In the third call, `prevCounter` is 17, so the state updates to 18.

This ensures that each state update is based on the most recent state, resulting in the correct final count. 


### Key Points:

- `setCounter` can accept a function as an argument, which receives the previous state.

- Using the functional form ensures that each state update is based on the latest state, avoiding issues with batched updates.

- `prevCounter` is just a parameter name; you can name it anything. It represents the previous state value.

This is unlike the initial approach where all updates were based on the initial `counter` value at the time the function was executed, leading to an incorrect final count.

****
****

## Question 2 : 


