import React, { useState, useEffect } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

function PostManager() {
  const [posts, setPosts] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");

  // ✅ GET - Fetch posts from the API
  useEffect(() => {
    fetch(API_URL + "?_limit=5")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  // ✅ POST - Add a new post
  const handleAddPost = () => {
    if (!newTitle || !newBody) return alert("Please fill in both fields!");

    const newPost = {
      title: newTitle,
      body: newBody,
      userId: 1,
    };

    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts([data, ...posts]);
        setNewTitle("");
        setNewBody("");
      })
      .catch((err) => console.error("Error adding post:", err));
  };

  // ✅ PUT - Edit a post
  const handleEditPost = (id) => {
    const updatedPost = { title: "Updated Title", body: "Updated Body" };

    fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedPost),
    })
      .then((res) => res.json())
      .then((data) =>
        setPosts(posts.map((post) => (post.id === id ? data : post)))
      )
      .catch((err) => console.error("Error updating post:", err));
  };

  // ✅ DELETE - Remove a post
  const handleDeletePost = (id) => {
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
      .then(() => setPosts(posts.filter((post) => post.id !== id)))
      .catch((err) => console.error("Error deleting post:", err));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Posts</h2>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Body"
          value={newBody}
          onChange={(e) => setNewBody(e.target.value)}
        />
        <button onClick={handleAddPost}>Add Post</button>
      </div>

      {posts.map((post) => (
        <div
          key={post.id}
          style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button onClick={() => handleEditPost(post.id)}>Edit</button>
          <button onClick={() => handleDeletePost(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default PostManager;
