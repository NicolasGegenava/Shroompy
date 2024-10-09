import React, {useEffect, useLayoutEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import Navbar from "./components/Navbar"
import Footer from "./components/Foot"
import Home from "./pages/Home"
import Identificator from './pages/Identificator'
import Prediction from './pages/Prediction'
import About from "./pages/About"
import Contact from "./pages/Contact"

const App = () => {
    return (
      <Router>
        <ScrollToTop />
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="*" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/shroompy" element={<Identificator />} />
                <Route path="/prediction" element={<Prediction />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer/>
        </div>
      </Router>
    );
  };
  
export default App;

const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    useLayoutEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  };