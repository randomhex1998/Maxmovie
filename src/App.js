import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./scss/main.scss";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Movie from "./Pages/Movie";
import Series from "./Pages/Series";
import Animation from "./Pages/Animation";
import Login from "./Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Movie />} path="/movie" />
        <Route element={<Series />} path="/series" />
        <Route element={<Animation />} path="/animation" />
        <Route path="/login" element={"./Login.js"}/>
      </Routes>
    </>
  );
}

export default App;
