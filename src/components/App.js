// App.js
import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";

function App() {
  const { name, image, about } = blogData;

  return (
    <div className="App">
      <Header name={name} />
      <About image={image} aboutText={about} />
    </div>
  );
}

export default App;

