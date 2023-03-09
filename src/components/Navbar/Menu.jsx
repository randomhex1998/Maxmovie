import React from "react";
import { Link } from "react-router-dom";
import { max } from "./Navbar";


const Menu = ({kaka}) => {
  const jack = React.useContext(max);
  return (
    <div className="menu">
      <ul className={jack ? "menu-area active-menu" : "menu-area"}>
        <li className="nav-items">
          <Link to="/" className="nav-links">
            خانه
          </Link>
        </li>
        <li className="nav-items">
          <Link to="/movie" className="nav-links">
            فیلم
          </Link>
        </li>
        <li className="nav-items">
          <Link to="/series" className="nav-links">
            سریال
          </Link>
        </li>
        <li className="nav-items">
          <Link to="/animation" className="nav-links">
            انیمیشن
          </Link>
        </li>
        <li className="nav-items">
          <Link to="/contact" className="nav-links">
            تماس با ما
          </Link>
        </li>
      </ul>
      <div
        className={jack ? "shadow-menu active-menu" : "shadow-menu"} onClick={kaka}></div>
    </div>
  );
};

export default Menu;
