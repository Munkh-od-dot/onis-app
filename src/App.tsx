import Navbar from "./components/Navbar";
import "./App.css"
import { Route, Routes } from "react-router-dom";
import Tuhuurumj from "./pages/tuhuurumj";
import Contact from "./pages/Contact";
import Asuult from "./pages/Faq";
import ProductPage from "./pages/product";

function App() {
  return (
    <div>
      < Navbar />
      <Routes>
        <Route path="/tuhuurumj" element={<Tuhuurumj />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Faq" element={<Asuult />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;