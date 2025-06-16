import Navbar from "./components/Navbar";
import "./App.css"
import { Route, Routes } from "react-router-dom";
import Tuhuurumj from "./pages/tuhuurumj";
import Contact from "./pages/Contact";
import Asuult from "./pages/Faq";

function App() {
  return (
    <div>
      < Navbar />
      <Routes>
        <Route path="/tuhuurumj" element={<Tuhuurumj />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Faq" element={<Asuult />} />
      </Routes>
    </div>
  );
}

export default App;