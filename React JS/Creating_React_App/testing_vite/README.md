# Understanding testing_vite:

## Introduction to Vite

Vite is a modern build tool that provides a fast development environment for modern web projects. It leverages native ES modules and provides a rich set of features, including hot module replacement (HMR), instant server start, and optimized builds.

### Why Vite?

- **Fast Development**: Vite significantly improves the development experience by providing instant server start and lightning-fast HMR.
- **Optimized Builds**: It generates highly optimized and smaller bundles for production.
- **Modern Features**: Vite leverages modern browser features like native ESM, making it future-proof.

## Command used to create Vite app:

```command

   npm create vite@latest 

```

- After that it asks app name .
- Then the library you want to use like React.
- Then the language like Js, TypeScript etc

***In vite it is necessary to use " .jsx " extension, wherever HTML content is used in js file***

**Unlike in testing_react , its index.html is present inside public folder , but that is not a case in this**

**Rest of the things are almost same**


## Some Concepts 🤩 : 

### 1. If App is a function then we can also write it here :

```javascript 

function MyApp() {
  return <h1>Hello World!</h1>
}

```
- And we type (<MyApp />) -> this will work perfectly fine .

- Moreover we can also write it as (MyApp()) -> as this is a function 😊 , **But it is not a good practice**

- Now , the above code inside return (that is html part...) will be converted by the bundler in the backend automatically in a  given below  , so that React can understand it , In a form like we create in our Custom React's index.js .👇

```javascript

const reactElement = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: "_blank"
  },
  children: "Click Me"
}

```

### 2. **Question** If the function here is converted in the above code format , then will it work if we write like this ?? Let's Check....

- The code :

```javascript

const reactElement = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: "_blank"
  },
  children: "Click Me"
}

```
- When we call it like (<reactElement />) -> it will give errors , one of them will be due to :
- reason: as this is not a function but a object , so correct way to call it will be like this "(reactElement)" -> But still it'll give error .

- And If we create another object like :

```javascript 
const anotherElement = (
  <a href="https://google.com" target="_blank">Click Me</a>
)

```
- And then call it like (<anotherElement />) -> it will work perfectly fine 😊

- **So Why my created reactElement not working ❓**
- - Because it is not a correct syntax , In the customReact file i have created my own function in which i have tell the code in what way i want to accept the link etc .

- - Actually we called it , react's bundler was expecting  a function with some return statement , but here it is the object 

- - Maybe the meaning of the above object's logic is different as it  was created by some one else (who have developed the React or its bundler) , (So , he must have create its react acc to itself , it is not necessary that he have taken same thing as we in our custom react)🤯

- - Moreover there is a predefined method in React , if you want to do this i.e. **" React.createElement "**
- - **This is automatically injected by Babble**

```javascript

const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: "_blank"
  },
  'Click Me'
)

```

### 3. Variable creation in App.js

- Creating of Variable :

```javascript

function Hello() {
    const user = "Aman"

    return (
        <h2>Hello </h2>
    )
};

export default Hello

```

- Using it :

```javascript

function Hello() {
    const user = "Aman"

    return (
        <h2>Hello {user}</h2>
    )
};

export default Hello

```

- Now **{user}** -> This is known as **"Evaluated Expresion"** (a JavaScript Concept).

- That means, here we write the final outcome of javaScript that has been evaluated.

- We cannot do like this :👇

```javascript

function Hello() {
    const user = "Aman"

    return (
        <h2>Hello {if(true) user}</h2> // Because user is an evaluated expression , so we cannot pass full condition it , all this thing is done outside " RETURN ". 
    )
};

export default Hello

```

***Same with the object :**
```javascript

const anotherUser = "A"

const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: "_blank"
  },
  'Click Me',
  anotherUser // This will give output as :-> Click MeA
  //Same here we cannot write full expression like { if(true) anotherUser } , because here ,. " anotherUser "  is an EVALUATED EXPRESSION. 
)

```
 
### 4. Key Concept in Hello.jsx:

- The function name "Bye" is internal to *Hello.js* and is not exposed directly when you import the default export.
- When you import the default export, you can give any name you want. In this Case, you choose to name it 'Hello' in **App.js**

- *React treats the local name you use in the import statement ('Hello') as the component to render. Doesn't Care of the internal name of function.***But file name should be same.**

- Below code will also run , *even if we have used different name (as there is different name of function in Hello.jsx )*.

```javascript

import SomeOtherName from "./Hello"

function App() {
    

    return (
        <SomeOtherName />
    )
};

export default App
```