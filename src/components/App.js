import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Work from "../pages/Work";
import About from "../pages/About";
import Project from "../pages/Project";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/work/:id" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;