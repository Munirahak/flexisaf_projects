import React, { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ marginBottom: "20px", textAlign: "center" }}>
      <h2>useRef Example</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click the button to focus"
      />
      <button onClick={handleFocus} style={{ marginLeft: "10px" }}>
        Focus Input
      </button>
    </div>
  );
}

export default FocusInput;
