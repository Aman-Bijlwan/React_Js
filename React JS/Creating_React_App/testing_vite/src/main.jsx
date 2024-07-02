import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// If App is a function then we can also write it here :

function MyApp() {
  return <h1>Hello World!</h1>
}
//Yes its working 
//Now , the above code inside return (that is html part...) will be converted by the bundler in the backend automatically in a  given below ) , so that React can understand it 

// // In this format 👇, 
// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: "_blank"
//   },
//   children: "Click Me"
// }

// QUESTION: If the function code will be converted into the provided syntax , that means it will run fine it i call it ?? 
// Let's check

// const ReactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: "_blank"
//   },
//   children: "Click Me"
// }

//As you can check the below code is also a object and its working fine , but above object not working bcz -->> ||explanation in 2nd point||
const anotherElement = (
  <a href="https://google.com" target="_blank">Click Me</a>
)


const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: "_blank"
  },
  'Click Me'
)


ReactDOM.createRoot(document.getElementById('root')).render(

  <App />
)










// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     {/* <App /> */}
//     {/* <MyApp /> */}

//     {/* <ReactElement />  */}
//     {/*Actually this not a function , this is a object , so it is not called in this way  */}
//     {/* Correct calling 👇 ,,,,, But still it will not work bcz ||explanation at the end 2nd point ||*/}
//     {/* ReactElement */}

//     anotherElement

//   </React.StrictMode>,

// )



// 😊👇😊 Rest of the concepts from the above code i'll be writing here:

//1. As MyApp is a function then we can also call it as "MyApp()" and it will work properly , but its not the best practice to do

//2. Bcz it is not a correct syntax , In the customReact file i have created my own function in which i have tell the code in what way i want to accept the link etc .
// Actually we called it , react's bundler was expecting  a function with some return statement , but here it is the object 
// And for that object the logic was created by some one else (who have developed the React or its bundler) , (So , he must have create its react acc to itself , it is not necessary that he have taken same thing as we in our custom react)

// 🤩 Now to implement above , we can use predefined react method i.e. "React.createElement"
// This method has a predefined syntax , you can see above

// 3. 🤔Now can i check / understand , that what type of props or sytax the react developers have used ?