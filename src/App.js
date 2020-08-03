import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(1);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log("##err", err));
  }, []);
  return (
    <div className="App">
      <h1>Posts</h1>
      <div className="container">
        {posts
          .filter((item, index) => index < count * 10)
          .map(({ id, title }) => {
            return <p key={id} className="title">{title}</p>;
          })}
      </div>
      {count < 5 ? <button onClick={() => setCount(prevState => prevState + 1)}>Show more</button>: null}
    </div>
  );
}

export default App;
