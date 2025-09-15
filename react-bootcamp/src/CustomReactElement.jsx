import React from "react";

function CustomReactElement() {
  const text = " Click here to go to facebook website";
  const customElement = React.createElement(
    "a",
    { href: "https://www.facebook.com", target: "_self" },
    "Facebook",
    text
  );
  return customElement;
}

export default CustomReactElement;
