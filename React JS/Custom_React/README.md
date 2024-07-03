# CUSTOM REACT EXPLANATION :

## React Element Structure

- A React element is an object that describes a component to be rendered. The example reactElement has the following structure:

- The example reactElement represents an anchor (<a>) element with href and target attributes:

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
1. **type:** Specifies the type of the DOM element to be created (e.g., 'a' for an anchor element).
2. **props:** An object containing the properties (attributes) to be applied to the DOM element.
3. **children:** The content to be placed inside the DOM element.


## Element Creation

- React elements can be created using the `React.createElement()` function or JSX syntax.
- The createElement method is used to create a new DOM element of the type specified in reactElement.type.

```javascript

const domElement = document.createElement(reactElement.type);

```
- reactElement.type: This property specifies the type of HTML element to create (e.g., 'a', 'div', 'span').

## Inner HTML

- The innerHTML property is set to the children property of the reactElement object. This assumes that the children are plain text.

```javascript

domElement.innerHTML = reactElement.children;

```

- reactElement.children: This property holds the content to be rendered inside the DOM element. It can be text, another React element, or even an array of React elements.


## Setting Attributes

- Instead of manually setting each attribute, a loop is used to iterate through the properties of reactElement.props. 
- This makes the code more flexible and capable of handling an arbitrary number of attributes.

```javascript

for (const prop in reactElement.props) {
    if (prop === 'children') continue; // Skip the children prop
    domElement.setAttribute(prop, reactElement.props[prop]);
}

```
- **reactElement.props:** This object contains key-value pairs where keys are the attribute names and values are the attribute values.

## Handling children Prop

- Many developers include children inside props. To avoid setting children as an attribute on the DOM element, it is explicitly skipped in the loop.

```javascript

if (prop === 'children') continue;

```

## Appending to Container

- The created DOM element is appended to the specified container using appendChild.

```javascript

container.appendChild(domElement);

```
- **container:** The DOM node where the created element will be appended.
- **appendChild:** is a predefined method



## Rendering

- To render the reactElement into a DOM container with the ID root, the following code is used:

```javascript

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);

```
1. **document.querySelector("#root"):** This line selects the DOM element with the ID "root"
2. **customRender:** This function is called with the reactElement and the mainContainer as arguments.
3. **reactElement:** This is the React element to be rendered.
4. **mainContainer:** This is the DOM container where the React element will be rendered.

## Explanation of full Code :

1. **React Element Conversion:** React elements are represented as plain JavaScript objects, which are then transformed into actual DOM elements using createElement.

2. **Attribute Assignment:** The loop through props allows dynamic assignment of attributes, making the renderer flexible and extensible.

3. **Append to Container:** The final step appends the newly created DOM element to the specified container, integrating it into the DOM.


## Additional Notes

**Bundling:** In a real React application, JSX syntax is transpiled by a bundler (like Webpack with Babel) into JavaScript objects similar to the reactElement object shown above.

**ReactDOM:** This custom renderer is a simplified version of what ReactDOM does in a real React application.

**By understanding this custom implementation, you gain insight into the core concepts of how React elements are created and rendered to the DOM.**