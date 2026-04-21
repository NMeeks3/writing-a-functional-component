import React from "react";
import ReactDOM from "react-dom";
import NameTag from "./NameTag";
import "./styles.css";

const App = (props) => (
  <div className="App">
    <h1>Name Tag Generator</h1>
    <NameTag name="Naima"/>
    <NameTag name="Camila"/>
    <NameTag name="Anthony"/>
    <NameTag name="Maceo"/>
    <NameTag name="Laila"/>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
