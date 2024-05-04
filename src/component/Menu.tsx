import * as React from "react";
import iconClose from "../images/icon-close.svg";

const LINKS = ["Collection", "Men", "Women", "About", "Contact"];

interface MenuProps {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Menu({ setIsMenuOpen }: MenuProps) {
  return (
    <section className="menu-screen">
      <menu>
        <img
          src={iconClose}
          alt="Close Menu"
          onClick={() => setIsMenuOpen(false)}
        />

        <section className="menu-btns">
          {LINKS.map((link, i) => {
            return (
              <a href="/" key={i}>
                {link}
              </a>
            );
          })}
        </section>
      </menu>
    </section>
  );
}
