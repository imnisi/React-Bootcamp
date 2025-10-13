import { useState, useEffect, useLayoutEffect } from "react";


// Flickering problem

function UseLayoutEffectHookEx() {
  const [position, setPosition] = useState(0);

  // useEffect(() => {
  //   Pehle 0 pe render hoga, PHIR 500 pe move hoga
  //    User ko ek quick "jump" dikhega (flicker) 👀
  //   setPosition(500);
  // }, []);

    useLayoutEffect(() => {
    // Screen paint se PEHLE hi position update ho jayega
    // User ko sidha 500px pe hi dikhega, no jump!
    setPosition(500);
  }, []);



  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: "red",
        position: "absolute",
        left: `${position}px`,
        transition: "left 0.3s",
      }}
    >
      Box
    </div>
  );
}

export default UseLayoutEffectHookEx;
