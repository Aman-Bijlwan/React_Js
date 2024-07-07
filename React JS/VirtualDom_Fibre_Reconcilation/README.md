***In this file , we will be learning some important , cool concepts :*** 😁👌

*Note: `This is not a professional note , but it contains some points that can clear your concepts...>Hope So🤞`* 

# Virtual DOM 🤩

### In main.jsx , Code: 

```javascript
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

## # *createRoot* Method : 

*Let's understand this methods concept in points : 👇*

- Basically *createRoot* method , behind the scene creates a DOM like structure , which is not the actual DOM , but a lightweight in-memory representation of the real DOM. This is called the **Virtual DOM**.

- The Virtual DOM is a JavaScript object that mimics the structure of the real DOM.

- What it does => It compare the 'real DOM' and its 'virtual DOM' and updates only those things that actually updates in UI.

- ***What our browser do if there is no virtual dom :***

   1. our browser removes full DOM and then again repaints the new DOM , This is known as **Page Reload** .<br/>

   2. *In simple words we can say , that `js creates a tree like structure (dom) of ui and keeps the track , and whatever is changed in ui , it updates that particular part in tree without affecting the whole tree unlike in real DOM.`*

<!-- - *This is the reason why react is fast and efficient* -->
<br >

**Question :**

> Suppose there is a DOM and in that there are some elements that are dependent on the network, Let's say there is a button that changes some content on clicking ,
>
> While it is changing a content , someother update come from the network call , and then again one more update comes ,
>
> By this let's say 3 updates come one by one . So DOM will 1st handle first update and create Dom , then 2nd and then 3rd ,
>
> But what if we can pause for a bit though algo / optimization , By this we can save our time updating intermediate call , and can directly update according to last network call. **Can we do this ?**

>The Answer is below

<br/>
****
****

# React Fibre Architecture 🤩: 
## Introduction

React Fiber is an ongoing reimplementation (`Now it is fully implemented , React is now using fibre for the updation of virtual dom in background`) of React's core algorithm. It is the culmination of over two years of research by the React team.<br/>

The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is **incremental rendering:** the ability to split rendering work into chunks and spread it out over multiple frames.(`means no need to update full , only key chunks / part of the tree will get update`)<br/>

Other key features include the ability to **pause**, **abort**, or **reuse** work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives. (`We can say it as **Hydration Process** i.e. when web layout is painted then we get all ui part like buttons , images etc but it'll not work , as JS is not implemented yet . So , when JS is implemented after successful painting of web layout That process is called *Hydration* `)

## Prerequisites

I strongly suggest that you are familiar with the following resources before continuing:

- **React Components, Elements, and Instances -** "Component" is often an overloaded term. A firm grasp of these terms is crucial.

- __Reconciliation -__ A high-level description of React's reconciliation algorithm.

- __React Basic Theoretical Concepts -__ A description of the conceptual model of React without implementation burden. Some of this may not make sense on first reading. That's okay, it will make more sense with time.

- **React Design Principles -** Pay special attention to the section on scheduling. It does a great job of explaining the why of React Fiber.

****
****

# What is Reconciliation ?🤩

**Reconciliation :** 

- The algorithm React uses to differentiate one tree with another to determine which parts need to be changed

   - ( I (Aman) understood the following from the above topic i.e. `Reconciliation is basically a differentiate algo in react , which compares both dom (real as well as virtual) and `)


   - (`Git also works on differentiation algo , that it checks difference in old file and new file and updates the difference` ,  againg this is the thing that i understood `Plz Correct if i'm wrong`)

**Update :**

- A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.

****

The central idea of React's API is to think of updates as if they cause the entire app to re-render. This allows the developer to reason declaratively, rather than worry about how to efficiently transition the app from any particular state to another (A to B, B to C, C to A, and so on).

Actually re-rendering the entire app on each change only works for the most trivial apps; in a real-world app, it's prohibitively costly in terms of performance. React has optimizations which create the appearance of whole app re-rendering while maintaining great performance. The bulk of these optimizations are part of a process called reconciliation.

**Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM."** A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.

****

## The key points are: 😊👇

- In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.<br/>

- Different types of updates have different priorities — an animation update needs to complete more quickly than, say, an update from a data store.<br/>

- A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be smart and make those decisions for you.

React doesn't currently take advantage of scheduling in a significant way; an update results in the entire subtree being re-rendered immediately. Overhauling React's core algorithm to take advantage of scheduling is the driving idea behind Fiber.

****

Now we're ready to dive into Fiber's implementation. The next section is more technical than what we've discussed so far. Please make sure you're comfortable with the previous material before moving on.

## `What is a fiber?` 🤔

We're about to discuss the heart of React Fiber's architecture. Fibers are a much lower-level abstraction than application developers typically think about. If you find yourself frustrated in your attempts to understand it, don't feel discouraged. Keep trying and it will eventually make sense. (When you do finally get it, please suggest how to improve this section.)   

Here we go!    

We've established that a primary goal of Fiber is to enable React to take advantage of scheduling. Specifically, we need to be able to : 👇

> - pause work and come back to it later.
> - assign priority to different types of work.
> - reuse previously completed work.
> - abort work if it's no longer needed.



# Resource used :->

**[Best resource for fibre and reconcilation -> acdlite](https://github.com/acdlite/react-fiber-architecture?tab=readme-ov-file)**    <br/><br/>
**[Hitesh Choudhary - chaiaurcode -> Best Explanation](https://www.youtube.com/watch?v=MPCVGFvgVEQ&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&index=6)**
<br/>

# More I will update later
