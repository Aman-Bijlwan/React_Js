# Understand Props from README.md file that is present outside this folder.👌😁

All thing about props is explained in that file . <br/>

**Here , we will understand the code part in a Rough way:** <br/>

****

1. First , i have created  a simple card , in Card.jsx

2. So if we want to display Card 2 time we can do like below (In App.jsx):

```js

return (
    <>
      <Card />
      <Card />
    </>
  )

```

3. But both card will have same details , so inorder to change content we can do so:

- `App.jsx` :
```code

return (
    <>
      <Card username="Card 1"/>
      <Card username="Card 2"/>
    </>
  )

```

- `Card.jsx` :

```js

function Card(props) {
  console.log(props)
  return (
    //Card's Code
  )
}

```

- This will only give output in console as : `{username: 'Card 1'} {username: 'Card 1'} {username: 'Card 2'} {username: 'Card 2'}` , and not changes the ui.

- Card 1 and Card 2 are displayed 2 times each , due to `React Strict Mode`.

- **Note:**  *React Strict Mode is a development mode that helps you catch errors and warnings in your code.*

- As props is an object so , to display it in UI , we need to handle 'username' in Card.jsx  as :

```js

function Card(props) {
  console.log(props.username)
  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
      <img
        src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{props.username}</h1>
        <p className="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
          View Profile &rarr;
        </button>
      </div>
    </div>
  )
}

export default Card;

```
    - In console, it will output as : `Card 1` `Card 1` `Card 2` `Card 2`
    - And to output name in the UI , use {props.username} .

****
Now , to directly use 'username' instead of 'props.username' , We can destructure username in function as :

```js

function Card({username}) {
  return (
    //Card's Code
  )
}

```


***`This is just rough explanation of code in this folder , proper explanation of Props is already given in the README.md file outside of this props file. DO CHECK IT🤞`***
