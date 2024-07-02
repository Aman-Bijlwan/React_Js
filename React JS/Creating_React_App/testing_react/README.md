# Understanding testing_react: 

## Command used to create React app :🤩

   ```command

   npm create-react-app [app-name]

   ```

### now explaining the command little bit:
- npm : node package manager
- create-react-app : command to create react app
- [app-name] : name of the app you want to create

## Now Folder Structure : 
1. node_modules : contains all the dependencies
2. public : contains index.html file
3. src : contains all the react components
4. package.json : contains all the dependencies and scripts
5. package-lock.json: contains same dependencies as in package.json , with their version that'll be locked 

## Public Folder 🤩: 

- Contains " index.html ".
- This is the only page that will be loaded , that's why SPA (Single Page Application) 

## Src Folder 🤩:

- Contains 2 main folders : " index.js ", " App.js ".

### Index.js:

- main folder .
- inside it there is a line : 

```javascript

 const root = ReactDOM.createRoot(document.getElementById('root')); 
 root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```
#### Code Explanation:
1. root : a variable that'll store the DOM
2. ReactDOM : React also creates its virtual DOM 
3. createRoot : A predefined method.
4. document.getElementById('root') : gets the element with id 'root' from index.html
5. root.render : renders the App component inside the root element
6. React.StrictMode : a helper component that checks for any errors in the code
7. App : the main component of the app

### App.js : 

- Benefit of React, it allow you to return HTML through function return and then it render it in index.js .

## In Package.json

### Dependencies: 

1. react , react-dom : main libraries
2. react-scripts: Automatically add scripts in background 
3. webvitals: this is used to track the application performance

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\

#### `npm test`

Launches the test runner .\

#### `npm run build`

Builds the app for production .\

#### `npm run eject`

- Note: this is a one-way operation. Once you `eject`, you can't go back!

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. 

### eslintConfig :

- Linting is used to improve our code ....

### browserslist : 

- it tell the browser on which this could run 


## Learn More 🤩

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
