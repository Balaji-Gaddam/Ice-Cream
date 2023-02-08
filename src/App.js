import "./styles.css";
import Home from "./Components/routes/Home";
import About from "./Components/routes/About";
import Shop from "./Components/routes/Shop";
import Catering from "./Components/routes/Catering";
import Contact from "./Components/routes/Contact";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Catering" element={<Catering />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
