import "./App.css";
import React from "react";
import Home from "./Components/Home";

function App(props) {
  const list = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ].sort(() => Math.random() - 0.5);


 
  return (
    <div className="App">
      <Home list={list} />
    </div>
  );
}

export default App;
