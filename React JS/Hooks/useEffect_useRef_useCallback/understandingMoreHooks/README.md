****
Code is present in `App.jsx` , Do check it.😁
****

# Password Changer Micro-Project 🔒

This project demonstrates the use of several important React hooks: `useRef`, `useEffect`, and `useCallback`. These hooks are powerful tools for managing side effects, optimizing performance, and interacting with the DOM in a React application.

## # Introduction to React Hooks 🪝

React hooks are special functions that let you use state and other React features in functional components. While there are many hooks available in React, this project focuses on three:

- **`useRef`**: Allows you to directly create a reference to the DOM element.

- **`useEffect`**: Lets you perform side effects in function components.

- **`useCallback`**: Returns a memoized callback.

## # useRef Hook 🔍

The `useRef` hook allows you to create a reference to a DOM element. In this project, it is used to reference the password input field for copying the password to the clipboard.

#### Code Example:

```js

const passwordRef = useRef(null)

const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0, 20)
  window.navigator.clipboard.writeText(password)
}, [password])

```

####  Explanation:

- `useRef(null)`: Initializes a ref object with a current property set to null.

- `passwordRef.current?.select()`: Selects the text inside the input field referenced by passwordRef.

- `passwordRef.current?.setSelectionRange(0, 20)`: Sets the selection range for the input field to cover the entire password.

- `window.navigator.clipboard.writeText(password)`: Copies the selected text to the clipboard.

## # useEffect Hook 🪄

The `useEffect` hook lets you perform side effects in your components. It is used here to regenerate the password whenever the length, numberAllowed, or charAllowed states change.

#### Code Example:

```js

useEffect(() => {
  passwordGenerator()
}, [length, numberAllowed, charAllowed, passwordGenerator])

```

#### Explanation:

- `useEffect`: Accepts a function to run as a side effect.

- The dependency array `[length, numberAllowed, charAllowed, passwordGenerator]` ensures the effect runs whenever any of these dependencies change.

***Important Note ⚠️***

- If we were to call `passwordGenerator` directly inside `useEffect`, it would cause an infinite loop and React would throw a "Too many re-renders" error. This is because each time `passwordGenerator` runs, it updates the state which triggers `useEffect` to run again, creating an endless cycle. By using `useCallback`, we ensure `passwordGenerator` is only recreated when its dependencies change, thus preventing this error.

## # useCallback Hook ♻️

The `useCallback` hook returns a memoized version of the callback that only changes if one of the dependencies has changed. This is useful for optimizing performance by preventing unnecessary re-renders.

#### Code Example:

```js

const passwordGenerator = useCallback(() => {
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if (numberAllowed) str += "0123456789"
  if (charAllowed) str += "_*#"

  for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random() * str.length + 1)
    pass += str.charAt(char)
  }
  setPassword(pass)
}, [length, numberAllowed, charAllowed, setPassword])

```

#### Explanation: 

- `useCallback`: Memoizes the passwordGenerator function.

- Dependencies `[length, numberAllowed, charAllowed, setPassword]`: Ensure that the memoized function only updates when one of these dependencies changes.

***Why Include setPassword as a Dependency? 🤔***

- Including `setPassword` as a dependency in `useCallback` ensures that the memoized function is recreated if `setPassword` changes.
- While it is unlikely for `setPassword` to change (since it is from `useState`), this ensures the code remains robust and avoids potential issues in more complex scenarios where the state update function might change.

****
## # Explanation of Dependencies 🧩

### Dependencies in `useEffect` :

Dependencies in `useEffect` are used to determine when the effect should run. When any of the dependencies change, the effect is re-executed. This is useful for performing side effects like data fetching, logging, or updating the DOM.

### Dependencies in `useCallback` :

Dependencies in `useCallback` are used to optimize performance by memoizing the function. The memoized function will only be recreated if any of the dependencies change, which prevents unnecessary re-renders.

****

## # Input's `onChange` Logic 🔄

The onChange event handler is used to update the state when the value of an input field changes.

###  `onChange` for Range :

#### Code Example:

```js

<input type="range"
  min={8}
  max={16}
  value={length}
  className='cursor-pointer'
  onChange={(e) => { setLength(e.target.value) }}
/>

```
#### Explanation :

`onChange={(e) => { setLength(e.target.value) }}`: This arrow function is called whenever the value of the input changes. The event e contains the new value of the input, which is then used to update the state with setLength.

### `onChange` for Checkbox :


#### Code Example:

```js

<input type='checkbox'
  defaultChecked={numberAllowed}
  id="numberInput"
  onChange={() => setNumberAllowed(prev => !prev)}
/>

```
#### Explanation :

`onChange={() => setNumberAllowed(prev => !prev)}`: This arrow function toggles the boolean state of numberAllowed whenever the checkbox is clicked. The previous state (prev) is inverted and set as the new state.


****
****

## Conclusion 📝

This project demonstrates the practical use of `useRef`, `useEffect`, and `useCallback` hooks in a React application. By understanding and utilizing these hooks, you can