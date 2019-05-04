import React from "react";
import "./App.css";
import { ClickOutside } from "./lib";

function App() {
  function clickOutsideFunctionRed() {
    console.log("what parent want to excute RED");
  }

  function clickOutsideFunctionBLUE() {
    console.log("what parent want to excute BLUE");
  }

  return (
    <div className="App">
      <ClickOutside outsideCall={clickOutsideFunctionRed}>
        <div
          style={{ height: "500px", width: "500px", backgroundColor: "red" }}
          onClick={() => console.log("CLICKED RED")}
        />
      </ClickOutside>

      <div
        style={{ height: "500px", width: "500px", backgroundColor: "black" }}
        onClick={() => console.log("CLICKED BLACK")}
      />

      <ClickOutside outsideCall={clickOutsideFunctionBLUE}>
        <div
          style={{ height: "500px", width: "500px", backgroundColor: "blue" }}
          onClick={() => console.log("CLICKED BLUE")}
        />
      </ClickOutside>
    </div>
  );
}

export default App;
