import React, { useState } from "react";

function Greeting() {
  const [name, setName] = useState("");

  return (
    <div data-testid="greeting">
      <h2>Hello {name || "Guest"} 👋</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default Greeting;
