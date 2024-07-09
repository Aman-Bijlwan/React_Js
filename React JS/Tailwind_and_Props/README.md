# Tailwind CSS and Props in React 😁

***In this folder , we will grab some knowledge about Tailwind CSS and props in React***

## # Tailwind CSS 🤩

Tailwind CSS is a utility-first CSS framework for rapid UI development. It's a highly customizable, low-level CSS framework that gives you all the building blocks you need to style your HTML elements.

### Steps to access Tailwind CSS in your project :->

1. **Install Tailwind CSS :**

- Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files.

- Command 👇:

```javascript

npm install -D tailwindcss postcss autoprefixer

```

- *Now , What does `-D` in above command mean ?*

    - `-D` stands for `--save-dev` which means save the package as a development dependency in your `package.json` file.

    - These dev dependencies are used during the development , and once the project is build then only dependencies (main like react , react-dom) will work not dev dependencies.

2. **Install Tailwind Config file :** 

- Next Command 👇:

```javascript

npx tailwindcss init -p

```
- This will install a file : `tailwind.config.js` .

- This file is used to configure tailwindcss for your project.

- Content inside this file :

```tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

3. **Configure your template paths :**

- Add the paths to all of your template files in your tailwind.config.js file

```tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [`
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {},
  },
  plugins: [],
}


```

4. **Add the Tailwind directives to your CSS**

- Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

```CSS

@tailwind base;
@tailwind components;
@tailwind utilities;

```

5. **Start your build process**

- Run your build process with npm run dev.

```command

npm run dev 

```

****

Now simply you have to give class name to your element as provided by tailwind and enjoy the predefined CSS.

For example :

```js

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-3'>Tailwind CSS</h1>
    </>
  )
}

```

****

***NOTE: [For detailed tutorial of Tailwind CSS, Click Here🙃](https://v2.tailwindcss.com/docs)***

****

## # Props :🤩

Props are short for "properties" and are a way to pass data from a parent component to a child component.
- Props are immutable, meaning they cannot be changed by the child component.<br/> <br/>
- Props are passed to components via the JSX attribute syntax.<br/> <br/>
- Props make a component reusable.

### @ Understanding Props with a Card Example :

<!-- - If we create this with traditional method , so in that Html , Css , Js are placed in different files 
- So , React says that don't seperate all these according to their technology / logic , Rather keep all that logic together in 1 file (Rather than making different card , make a single component containing card;s logic), So if we change a value in card it change it all over.

***Now , let us understand props with card example***

> Suppose there is a component containg card's logic (like Card.jsx).
> And i need 2 cards , So now i can simply call Card in 'App.jsx' and 2 cards will be shown. 
> But what if i want to change the title of card , for this `props` can be used . 

By default , a function in React have access to props -->

1. **Placing Card Logic in a File :**  

- Suppose you have a Card component that encapsulates the logic of a card. Here's how you might initially define the Card component:

- *`Card.js`*
```

import React from 'react';

function Card() {
  return (
    <div className="border p-4 m-2">
      <h2 className="text-lg font-bold">Card Title</h2>
      <p>This is a card.</p>
    </div>
  );
}

export default Card;

```

2. **Adding Two Cards in App.jsx :**
- You can now import and use the Card component in your App component to display two cards:
- *`App.jsx`*

```js

import React from 'react';
import Card from './Card';

function App() {
  return (
    <div>
      <Card />
      <Card />
    </div>
  );
}

export default App;
```

- When you run this, you'll see two cards with the same title and content. However, if you want to change the title of each card, you can't do it directly in this setup.

#### # Using Props to Make Cards Dynamic : 

Props allow you to pass data to a component, making it dynamic and reusable. Let's modify the Card component to accept props.

**Step 1: Modify Card.jsx to Accept Props**

- Step 1: Modify Card.jsx to Accept Props

```js

import React from 'react';

function Card(props) {
  return (
    <div className="border p-4 m-2">
      <h2 className="text-lg font-bold">{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
}

export default Card;

```

**Step 2: Pass Props from App.jsx**

- Now, update the App component to pass different titles and content to each Card component:

```js

import React from 'react';
import Card from './Card';

function App() {
  return (
    <div>
      <Card title="Card 1 Title" content="This is the content for Card 1." />
      <Card title="Card 2 Title" content="This is the content for Card 2." />
    </div>
  );
}

export default App;
```

*In this example:*

- The Card component accepts props and uses props.title and props.content to render the card's title and content dynamically.
- In `App.jsx`, two Card components are rendered with different title and content props.

*`Props allow you to create reusable components by passing different data to each instance, making your code more modular and maintainable.`*

****



