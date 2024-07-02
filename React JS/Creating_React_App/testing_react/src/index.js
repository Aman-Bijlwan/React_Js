// THIS IS THE ENTRY REACT FILE 

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


// Below, " root " is the variable ,, " ReactDOM ":: it create a virtual react DOM ,,, " createRoot ":: is the method ,,, and inside it is calling root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />{/* HTML doesn't provide any <App /> element , then what is this ||  this is the power that react provide ||||  now what is basically App:: it is the function present in App.js , and inside it , is returning html code  */}
  </React.StrictMode>
);