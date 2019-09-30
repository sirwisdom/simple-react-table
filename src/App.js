import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Movies from "./components/Movies";

class App extends React.Component {
  render() {
    return (
      <main className="container">
        <Movies />
      </main>
    );
  }
}

export default App;
