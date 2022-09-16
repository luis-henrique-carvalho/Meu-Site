import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import NavBar from "./components/nav/NavBar";
import Portifolio from "./components/portifolio/Portifolio";

function App() {
  return (
    <>
        <Header/>
        <NavBar />
        <About /> 
        <Experience />
        <Portifolio />
        <Contact />
        <Footer />
        

    </>
      
    
  );
}

export default App;
