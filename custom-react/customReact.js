// How behind the scenes React works

// function customRender(reactElement, rootContainer) {
//  Step 1: Create actual HTML element
//  const domElement = document.createElement(reactElement.type); // Creates <a>

//  Step 2: Add the text content
//  domElement.textContent = reactElement.children; // Adds "Click here"

//  Step 3: Add attributes one by one
//  domElement.setAttribute("href", reactElement.props.href);
//  domElement.setAttribute("target", reactElement.props.target);

//  Step 4: Put it in the webpage
//  rootContainer.body.append(domElement);
// }

// Better way:

function customRender(reactElement, rootContainer) {
  // Step 1: Create actual HTML element
  const domElement = document.createElement(reactElement.type); // Creates <a>

  // Step 2: Add the text content
  domElement.textContent = reactElement.children; // Adds "Click here"

  // Step 3: Add attributes using  for-in loop ( if we have a lot of attributes or properties)
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  // Step 4: Put it in the webpage
  rootContainer.append(domElement);
}

const reactElement = {
  type: "a", // What HTML tag to create
  props: {
    // All the attributes
    href: "https://example.com",
    target: "_blank",
  },
  children: "Click here", // What goes inside the tag
  key: null,
  ref: null,
};

const rootContainer = document.querySelector("#root");

customRender(reactElement, rootContainer);

