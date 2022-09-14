import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import NavBar from "./components/layout/NavBar";

import Home from "./components/pages/Home";
import Sobre from "./components/pages/Sobre";

function App() {
  return (
    <Router>
      <NavBar />
      
      
      <Footer />
    </Router>
  );
}

export default App;
