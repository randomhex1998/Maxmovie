import React, { useState } from "react";
import Logo from "./Logo";
import LeftSide from "./LeftSide";
import Menu from "./Menu";
export const max = React.createContext();

const Navbar = () => {
  let [bar, setBar] = useState(false);

  const clickBar = () => {
    setBar(true);
    console.log(bar);
  };

  const clickShadow = () => {
      setBar(false);
      console.log(bar);
  }

  return (
    <nav className="navbar">
      <section className="container">
        <LeftSide />
        <max.Provider value={bar}>
          <Menu kaka={clickShadow} />
        </max.Provider>
        <Logo barsClick={clickBar} />
      </section>
    </nav>
  );
};

export default Navbar;
