import React from "react";
import Counter from "./components/Counter";
import DataFetcher from "./components/DataFetcher";
import FocusInput from "./components/FocusInput";
import useFetch from "./hooks/useFetch";
import "./App.css";

function App() {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div className="app-container">
      <h1>React Hooks Practical Demonstration</h1>

      <Counter />
      <DataFetcher />
      <FocusInput />

      <div className="custom-hook">
        <h2>Custom Hook Example (useFetch)</h2>
        {loading ? (
          <p>Loading posts...</p>
        ) : (
          <ul>
            {data.slice(0, 5).map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
export default App;
