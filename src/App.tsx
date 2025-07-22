import "./App.css";
import "./styles/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../../mp-3/src/components/Header";
import Nav from "../../mp-3/src/components/Nav";
import Footer from "../../mp-3/src/components/Footer";
import Home from "../../mp-3/src/pages/Home";
import Projects from "../../mp-3/src/pages/Projects";
import Education from "../../mp-3/src/pages/Education";
import Work from "../../mp-3/src/pages/Work";
import UIUX from "../../mp-3/src/pages/UIUX";
import Contact from "../../mp-3/src/pages/Contact";
import Calculator from "../../mp-3/src/pages/Calculator";

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
