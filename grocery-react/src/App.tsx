import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu className="custom-class" />
      </header>
    </div>
  );
}

export default App;
