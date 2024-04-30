import React, { useState } from "react";
import RenderImage from "../RenderImage";
import logo from "../../images/logo.svg";
import cartIcon from "../../images/icon-cart.svg";
import profile from "../../images/image-avatar.png";
import ShoppingCartContent from "./ShoppingCartContent";
import { cartContent } from "../../types/types";
import "./Nav.css";

const LINKS: string[] = ["Collection", "Men", "Women", "About", "Contact"];

function Nav({ removeAll, cart }: cartContent) {
  const [cartOnHover, setCartOnHover] = useState(false);

  return (
    <nav>
      <section className="nav-btns">
        <RenderImage src={logo} name="logo" alt="Sneakers" />

        <div className="btn-wrapper">
          {LINKS.map((link: string, i: number) => {
            return (
              <a href="/" key={i}>
                {link}
              </a>
            );
          })}
        </div>
      </section>

      <aside className="nav-aside">
        <div
          className="cart-logic"
          onMouseOver={() => setCartOnHover(true)}
          onMouseOut={() => setCartOnHover(false)}
        >
          <RenderImage
            src={cartIcon}
            alt="Shopping Cart"
            name="shopping-cart"
          />

          <ShoppingCartContent
            isHover={cartOnHover}
            cart={cart}
            removeAll={removeAll}
          />
        </div>
        <RenderImage src={profile} name="profile" alt="Picture Profile" />
      </aside>
    </nav>
  );
}

export default Nav;
