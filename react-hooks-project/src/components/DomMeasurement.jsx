import { useState, useEffect, useLayoutEffect, useRef } from "react";

function DomMeasurement() {
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef(null);
  const [showTooltip, setShowTooltip] = useState(false);

  //# if we use useEffect here, then at first it will show the position of tooltip  at top-leftmost corner
  //# and then after it will show the correct position.

  //   useEffect(() => {
  //     if (showTooltip && buttonRef.current) {
          // DOM element ka exact position measure karo
  //       const rect = buttonRef.current.getBoundingClientRect();

           // Tooltip ko button ke upar position karo
  //       setTooltipPosition({
  //         top: rect.top - 40, // 40px upar
  //         left: rect.left + rect.width / 2 // Center mein
  //       });
  //     }
    //   }, [showTooltip]);
    
//# useLayout Effect gives the correct position of tooltip as the component renders for the first time

  useLayoutEffect(() => {
    if (showTooltip && buttonRef.current) {
      // DOM element ka exact position measure karo
      const rect = buttonRef.current.getBoundingClientRect();

      // Tooltip ko button ke upar position karo
      setTooltipPosition({
        top: rect.top - 40, // 40px upar
        left: rect.left + rect.width / 2, // Center mein
      });
    }
  }, [showTooltip]);

  return (
    <div style={{ padding: "100px" }}>
      <button
        ref={buttonRef}
        onClick={() => setShowTooltip(!showTooltip)}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Hover Me
      </button>

      {showTooltip && (
        <div
          style={{
            position: "fixed",
            top: `${tooltipPosition.top}px`,
            left: `${tooltipPosition.left}px`,
            transform: "translateX(-50%)",
            backgroundColor: "black",
            color: "white",
            padding: "5px 10px",
            borderRadius: "4px",
            fontSize: "12px",
            whiteSpace: "nowrap",
          }}
        >
          This is a tooltip!
        </div>
      )}
    </div>
  );
}

export default DomMeasurement;
