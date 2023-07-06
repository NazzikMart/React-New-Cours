import React from "react";
import "./App.css";
import ClassComponent from "./ClassComponent";
import Country from "./components/Country";
import State from "./State";

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <ClassComponent />
      <Country name="Nazar" />
      <State />
    </div>

    // React.createElement("h1", null, "Hello world")
  );
}

export default App;
