import React, { useState } from "react";
import "./App.css";
import Nav from "./component/Navbar/Nav";
import MainContent from "./component/MainContent";

function App() {
  const [cart, setCart] = useState(0);

  function itemCart(value: number) {
    function addOne() {
      setCart((prev) => (prev += 1));
    }

    function removeOne() {
      if (cart > 0) {
        setCart((prev) => (prev -= 1));
      }
    }

    if (value === -1) {
      removeOne();
    } else if (value === 1) {
      addOne();
    } else if (value === 100) {
      setCart(0);
    }
  }

  return (
    <div id="app">
      <main className="main-content">
        <Nav removeAll={() => itemCart(100)} cart={cart} />
        <MainContent
          addItemCart={() => itemCart(1)}
          removeItemCart={() => itemCart(-1)}
          cart={cart}
        />
      </main>
    </div>
  );
}

export default App;
