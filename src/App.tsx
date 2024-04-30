import React from "react";
import "./App.css";
import Nav from "./component/Nav";
import MainContent from "./component/MainContent";

function App() {
  return (
    <div id="app">
      <main className="main-content">
        <Nav />
        <MainContent />
      </main>
    </div>
  );
}

export default App;
