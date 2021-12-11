import { Routes, Route } from "react-router-dom";

import Home from "@/containers/Home";
import About from "@/containers/About";

import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
