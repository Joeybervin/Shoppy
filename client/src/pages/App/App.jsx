import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

/* Style */
import './App.css';
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../../assets/styles/Global'
import { theme } from '../../assets/styles/Theme'
/* Layouts */
import NavBar from '../../components/layouts/Navbar/NavBar';
import Footer from '../../components/layouts/Footer/Footer';
/* Components */

/* Pages */
import About from "../About/About";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";
import Product from "../Product/Product";       
import Cart from "../Cart/Cart";
import Contact from "../Contact/Contact";
import Profile from "../Profile/Profile";
/* Auth */
import Authentification from "../Auth/Authentification";




function App() {



  const  ScrollToTop= () => {

    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
  }

  return (
    /* STYLES */
    <ThemeProvider theme={theme} >
      <GlobalStyles />

      <div className="App">

        {/* SCROLL TOP */}
        <ScrollToTop />

        {/* NAVBAR */}
        <NavBar />
      
        {/* ROUTES */}
        <Routes >
          {/* Home */}
          <Route path="/" element={< Home />}/>
          {/* About */}
          <Route path="/shoppy" element={< About />} />
          {/* Contact */}
          <Route path="/contact" element={< Contact />} />
          {/* Shop A REVOIR */}
          <Route path="/shop/:gender/:category" element={< Shop />}/>
          <Route path="/shop/:category/product/:refProduct" element={< Product />}/>
        
          {/* Cart */}
          <Route path="/cart" element={< Cart />} />
          {/* Authentification */}
          <Route path="/authentification" element={< Authentification />} />
        
          {/* profile */}
   
          <Route path="/profile/:username" element={< Profile />} />

            

          <Route path="*" element={< Home />}/>
        </Routes>

        {/* FOOTER 
        */}
        < Footer/>

      </div>

    </ThemeProvider>
  );
}

export default App;
