import React from "react";
import Logo from "./Logo";
import LeftSide from "./LeftSide";

const Navbar = () => {
  return (
    <nav className="navbar">
      <section className="container">
        <Logo />
        <LeftSide />
      </section>
    </nav>
  );
};

export default Navbar;
