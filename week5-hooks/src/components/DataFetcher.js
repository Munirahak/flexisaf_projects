import React, { useState, useEffect } from "react";

function DataFetcher() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div style={{ marginBottom: "20px", textAlign: "center" }}>
      <h2>useEffect Example</h2>
      <ul style={{ listStyleType: "none" }}>
        {users.slice(0, 5).map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetcher;
