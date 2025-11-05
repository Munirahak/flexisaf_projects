import React from "react";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>React Testing Demo</h1>
      <Greeting />
      <hr style={{ margin: "30px 0" }} />
      <Counter />
    </div>
  );
}

export default App;
