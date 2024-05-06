import * as React from "react";
import { useState } from "react";
import "./App.css";
import Nav from "./component/Navbar/Nav";
import MainContent from "./component/MainContent";
import Menu from "./component/Menu";
import LightBox from "./component/LightBox";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpenLightBox, setIsOpenLightBox] = useState(false);
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
    <div id="app" className={isMenuOpen || isOpenLightBox ? "overflow" : ""}>
      <main className="main-content">
        {isMenuOpen && <Menu setIsMenuOpen={setIsMenuOpen} />}
        {isOpenLightBox && <LightBox setIsOpenLightBox={setIsOpenLightBox} />}
        <Nav setCart={setCart} cart={cart} setIsOpenMenu={setIsMenuOpen} />
        <MainContent
          addItemCart={() => itemCart(1)}
          removeItemCart={() => itemCart(-1)}
          setIsOpenLightBox={setIsOpenLightBox}
          cart={cart}
        />
      </main>
    </div>
  );
}

export default App;
