import * as React from "react";
import "./menu.css";

interface MenuProps {
  className?: string;
}

const Menu: React.FunctionComponent<MenuProps> = ({ className }) => {
  return (
    <nav className={`menu ${className}`}>
      <ul className="menu__list">
        <li className="menu__item">
          <a href="/" className="menu__link">
            Strona główna
          </a>
        </li>
        <li className="menu__item">
          <a href="/login" className="menu__link">
            Zaloguj
          </a>
        </li>
        <li className="menu__item">
          <a href="/register" className="menu__link">
            Zarejestruj
          </a>
        </li>
        <li className="menu__item">
          <a href="/contact" className="menu__link">
            Kontakt
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
