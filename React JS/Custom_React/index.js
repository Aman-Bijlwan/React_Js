function customRender(reactElement, container) {
    /*
    const domElement = document.createElement(reactElement.type)

    domElement.innerHTML = reactElement.children

    //Now here is the problem with this setAttribute , bcz if i get more attribute then it will be difficult to enter every , instead we apply loop here 
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute("target", reactElement.props.target)

    container.appendChild(domElement)
    */

    // better way to do so :

    const domElement = document.createElement(reactElement.type)

    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {

        if (prop === 'children') continue; // Many developers keep children inside props , so if it is there our loop will continue it 

        domElement.setAttribute(prop, reactElement.props[prop])

        container.appendChild(domElement)

    }
}

//Actually React can't understand Html code , so the bundler convert it into below like structure so that react can understand it  
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: "_blank"
    },
    children: "Click Me"
}

const mainContainer = document.querySelector("#root")


customRender(reactElement, mainContainer)
//this means reactElement to be placed in mainContainer

//mainContainer = container 
