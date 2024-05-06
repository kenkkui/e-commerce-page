import * as React from "react";
import { useState, useEffect } from "react";
import RenderImage from "../RenderImage";
import logo from "../../images/logo.svg";
import profile from "../../images/image-avatar.png";
import ShoppingCartContent from "./ShoppingCartContent";
import iconMenu from "../../images/icon-menu.svg";
import { CartContent } from "../../types/types";
import "./Nav.css";

const LINKS: string[] = ["Collection", "Men", "Women", "About", "Contact"];

interface NavProps {
  setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

function Nav({ setCart, cart, setIsOpenMenu }: CartContent & NavProps) {
  const [cartOnHover, setCartOnHover] = useState(false);

  return (
    <nav>
      <ShoppingCartContent
        setCartOnHover={setCartOnHover}
        isHover={cartOnHover}
        setCart={setCart}
        cart={cart}
        mobile
      />

      <section className="nav-btns">
        <div className="menu-icon" onClick={() => setIsOpenMenu(true)}>
          <img src={iconMenu} alt="Menu" />
        </div>

        <RenderImage src={logo} name="logo" alt="Sneakers" />

        <div className="btn-wrapper">
          {LINKS.map((link, i) => {
            return <div key={i}>{link}</div>;
          })}
        </div>
      </section>

      <aside className="nav-aside">
        <div className="cart-logic">
          <div
            className="shopping-cart-img"
            onMouseOver={() => setCartOnHover((prev) => !prev)}
            onMouseOut={() => setCartOnHover((prev) => !prev)}
            onClick={() => setCartOnHover((prev) => !prev)}
          >
            {cart > 0 && <span>{cart}</span>}
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill-rule="nonzero"
                fill={cartOnHover ? "#000000" : "#69707D"}
              />
            </svg>
          </div>

          <ShoppingCartContent
            setCartOnHover={setCartOnHover}
            isHover={cartOnHover}
            setCart={setCart}
            cart={cart}
          />
        </div>
        <RenderImage src={profile} name="profile" alt="Picture Profile" />
      </aside>
    </nav>
  );
}

export default Nav;
