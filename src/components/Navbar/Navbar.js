import React from "react";
import Logo from "./Logo";
import LeftSide from "./LeftSide";
import Menu from "./Menu";


const Navbar = () => {
  return (
    <nav className="navbar">
      <section className="container">
        <LeftSide />
        
        <Menu/>
        <Logo />
      </section>
    </nav>
  );
};

export default Navbar;
