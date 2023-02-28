import React from "react";
import { max } from "./Navbar";

const Menu = ({kaka}) => {
  const jack = React.useContext(max);
  return (
    <div className="menu">
      <ul className={jack ? "menu-area active-menu" : "menu-area"}>
        <li className="nav-items">
          <a href="#" className="nav-links">
            خانه
          </a>
        </li>
        <li className="nav-items">
          <a href="#" className="nav-links">
            فیلم
          </a>
        </li>
        <li className="nav-items">
          <a href="#" className="nav-links">
            سریال
          </a>
        </li>
        <li className="nav-items">
          <a href="#" className="nav-links">
            انیمیشن
          </a>
        </li>
        <li className="nav-items">
          <a href="#" className="nav-links">
            تماس با ما
          </a>
        </li>
      </ul>
      <div
        className={jack ? "shadow-menu active-menu" : "shadow-menu"} onClick={kaka}></div>
    </div>
  );
};

export default Menu;
