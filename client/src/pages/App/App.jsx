import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

/* Style */
import './App.css';
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../../styles/Global'
import { theme } from '../../styles/Theme'
/* Layouts */
import NavBar from '../../components/layouts/Navbar/NavBar';
import Footer from '../../components/layouts/Footer/Footer';
/* Pages */
import About from "../About/About";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";
import Product from "../Product/Product";       
import Contact from "../Contact/Contact";
import Wishlist from "../Wishlist/Wishlist";
import Authentification from "../Auth/Authentification";
/* order */
import Order from "../Order/Order";
import Cart from "../Order/Cart/Cart";
import Payment from "../Order/Payment/Payment";
import OrderConfirmation from "../Order/OrderConfirmation/OrderConfirmation";
/* Auth */
import Profile from "../Profile/Profile";
import Messages from "../Profile/Messages/Messages";
import OrdersList from '../Profile/OrdersList/OrdersList';


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
      
        {/* ROUTER */}
        <Routes >
          {/* Home */}
          <Route path="/" element={< Home />}/>
          {/* About */}
          <Route path="/shoppy" element={< About />} />
          {/* Contact */}
          <Route path="/nous-contactez" element={< Contact />} />
          {/* shop */}
          <Route path="/shop/:gender/:ProductCategory" element={< Shop />}/>
          {/* product */}
          <Route path="/shop/:category/ref/:refProduct" element={< Product />}/>
          {/* Cart */}
          <Route path="/commande/:step" element={< Order />} >
            <Route path="panier" element={< Cart />} /> 
            <Route path="paiement" element={< Payment />} /> 
            <Route path="confirmation-de-commande" element={< OrderConfirmation />} /> 
          </Route>
          {/* Wishlist */}
          <Route path="/favoris" element={< Wishlist />} />
          {/* Authentification */}
          <Route path="/authentification" element={< Authentification />} />
          {/* profile */}
          <Route path="/profil/:username" element={< Profile />}>
            <Route path="messages" element={< Messages />} />
            <Route path="mes-achats/commande/:orderId" element={< OrdersList />} />
          </Route>
          <Route path="*" element={< Home />}/>
        </Routes>

        {/* FOOTER  */}
        < Footer/>

      </div>

    </ThemeProvider>
  );
}

export default App;
