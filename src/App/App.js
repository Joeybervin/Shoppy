import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
/* Style */
import './App.css';
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/Global'
import { theme } from '../styles/Theme'

/* Layouts */
import NavBar from '../Layouts/Navbar/NavBar';
import Footer from '../Layouts/Footer/Footer';

/* Pages */
import About from "../Pages/about/About";
import Home from "../Pages/home/Home";
import Shop from "../Pages/shop/Shop";
import Product from "../Pages/product/Product";
import Cart from "../Pages/cart/Cart";
import Contact from "../Pages/contact/Contact";
/* Auth */
import SignIn from "../Pages/auth/signIn/SignIn";
import SignUp from "../Pages/auth/signUp/SignUp";




function App() {

  const  ScrollToTop= () => {

    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
  }

  return (
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
        <Route path="/about" element={< About />} />
        {/* Contact */}
        <Route path="/contact" element={< Contact />} />
        {/* Shop A REVOIR */}
        <Route path="/shop/:category" element={< Shop />}/>
        <Route path="/shop/:category/product/:refProduct" element={< Product />}/>
       
        {/* Cart */}
        <Route path="/cart" element={< Cart />} />
        {/* Authentification */}
        <Route path="/auth/signin" element={< SignIn />} />
        <Route path="/auth/signup" element={< SignUp />} />

        <Route path="*" element={< Home />}/>
      </Routes>

      {/* FOOTER */}
      < Footer/>
    </div>
    </ThemeProvider>
  );
}

export default App;
