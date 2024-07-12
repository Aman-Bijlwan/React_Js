# Insights on the onClick Method in React 🤔

While writing code in `bgChanger`, I discovered something interesting about the `onClick` method in React.

## Understanding onClick :

The `onClick` method in React is unique because it expects a function reference.      

This means that we need to provide a reference to the function that should be executed when the event occurs.    

## Incorrect Usage :

In App.jsx , If we call `setColor` like this :

```js

 <button className='outline-none text-white bg-red px-4 py-1 rounded-full shadow-lg' style={{ backgroundColor: "red" }} onClick={setColor}>
    Red 
 </button>

```

Actually `setColor` is referenced directly and it is correct, as you remember in `Add Count` file i has used the `setCount` in same way . 

But if we do the same here , it doesn't allow us to pass any parameters to the function..    

To do so , we need to use a function there that can pass a parameter .      

## Incorrect Usage with Direct Function Call :

If we try to pass a parameter directly like this:

```js

 <button className='outline-none text-white bg-red px-4 py-1 rounded-full shadow-lg' style={{ backgroundColor: "red" }} 
 onClick={setColor("red")}>
    Red 
 </button>

```
Here, `setColor("red")` is executed immediately when the component renders, and its return value is assigned to `onClick`. This is incorrect because `onClick` expects a function, not the return value of a function.      

## Correct Usage with Callback Function :   

To solve this we can use **`Callback function`** .😁👌

```js

 <button className='outline-none text-white bg-red px-4 py-1 rounded-full shadow-lg' style={{ backgroundColor: "red" }} onClick={() => setColor("red")}>
    Red 
 </button>

```

In this example: 

- We provide an anonymous arrow function () => setColor("red") to the onClick attribute.
- This arrow function will be executed only when the button is clicked.
- Inside the arrow function, setColor("red") is called, allowing us to pass the "red" parameter.

### Key Points:

- `onClick` expects a function reference, not the result of a function call.

- To pass parameters to a function in `onClick`, use an arrow function or a named function that calls the target function with the required arguments.


By understanding this, we can correctly handle event-driven functions in React and ensure that our components behave as expected.