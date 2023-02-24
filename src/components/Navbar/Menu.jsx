import React from "react";

const Menu = () => {
  return (
    <div className="menu">
      <ul className="menu-area">
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
      <div className="shadow-menu"></div>
    </div>
  );
};

export default Menu;
