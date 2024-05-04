import * as React from "react";
import iconClose from "../images/icon-close.svg";

export default function Menu() {
  return (
    <section className="menu-screen">
      <menu>
        <img src={iconClose} alt="Close Menu" />

        <section className="menu-btns">
          <a href="/">Collection</a>
          <a href="/">Men</a>
          <a href="/">Women</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </section>
      </menu>
    </section>
  );
}
