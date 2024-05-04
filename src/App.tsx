import React, { useState } from "react";
import "./App.css";
import Nav from "./component/Navbar/Nav";
import MainContent from "./component/MainContent";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    }
  }

  return (
    <div id="app">
      <main className="main-content">
        <Nav setCart={setCart} cart={cart} />
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
