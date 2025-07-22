import "./App.css";
import "./styles/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Work from "./pages/Work";
import UIUX from "./pages/UIUX";
import Contact from "./pages/Contact";
import Calculator from "./pages/Calculator";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/work" element={<Work />} />
          <Route path="/uiux" element={<UIUX />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
