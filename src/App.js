import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import Por from "./routes/Por";
import { Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="/project" element={<Project />}  />
      <Route path="/about" element={<About />}  />
      <Route path="/contact" element={<Contact />}  />
      <Route path="/por" element={<Por />}/>
    </Routes>
    </>
  );
}


export default App;
