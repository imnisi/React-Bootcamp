import React from "react";

function Header() {
  console.log("Header rendered!");
  return (
    <div>
      <h2>Header Component</h2>
    </div>
  );
}

export default React.memo(Header);
