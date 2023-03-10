import React from "react";
import Collection from "../components/CollectionSlide/Collection";
import ContentBar from "../components/ContentBar/ContentBar";
import SideBar from "../components/SideBar/SideBar";

const Home = () => {
  return (
    <React.Fragment>
      <Collection />
      <section className="main-section container">
        <SideBar />
        <ContentBar />
      </section>
    </React.Fragment>
  );
};

export default Home;
