import Navbar from "./components/Navbar";
import "./App.css"
import { Route, Routes } from "react-router-dom";
import Tuhuurumj from "./pages/tuhuurumj";

function App() {
  return (
    <div>
      < Navbar />
      <Routes>
        <Route path="/tuhuurumj" element={<Tuhuurumj />} />
      </Routes>      <h1>Hello React App!</h1>
      <p>Starting from clean project 🚀</p>
    </div>
  );
}

export default App;