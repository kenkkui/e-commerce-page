import * as React from "react";
import profile from "./images/image-avatar.png";
import logo from "./images/logo.svg";
import cart from "./images/icon-cart.svg";
import RenderImage from "./RenderImage";

const LINKS: string[] = ["Collection", "Men", "Women", "About", "Contact"];

function Nav() {
  return (
    <nav>
      <section className="nav-btns">
        <RenderImage src={logo} name="logo" alt="Sneakers" />

        <div className="btn-wrapper">
          {LINKS.map((link: string) => {
            return <a href="/">{link}</a>;
          })}
        </div>
      </section>

      <aside className="nav-aside">
        <RenderImage src={cart} alt="Shopping Cart" name="shopping-cart" />
        <RenderImage src={profile} name="profile" alt="Picture Profile" />
      </aside>
    </nav>
  );
}

export default Nav;
