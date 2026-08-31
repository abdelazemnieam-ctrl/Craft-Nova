import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "../src/components/Content";
import Data from "./components/Data"; // استدعاء ملف Data.jsx

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* الصفحة الرئيسية */}
        <Route path="/" element={<Home />} />

        {/* صفحة Content / Data */}
        <Route path="/data" element={<Data />} />

        {/* صفحة التواصل */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;