// a function that pushes our elemts to the dom
const customRender = (what, where) => {
    // const domElement = document.createElement(what.type)
    // domElement.textContent = what.children
    // domElement.setAttribute('href', what.props.href)
    // domElement.setAttribute('target', what.props.target)

    // where.appendChild(domElement)

    // optimized code
    const domElement = document.createElement(what.type)
    domElement.textContent = what.children

    for (const prop in what.props) {
        if (prop === 'children') continue
        domElement.setAttribute(prop, what.props[prop])
    }

    where.append(domElement)
}

// build a custom react element
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
} 

// select the div to manipulate
const root = document.querySelector('#root')

// render the what element(reactElement) and where(root)
customRender(reactElement, root)