import { Route, Routes } from "react-router-dom";
/* Style */
import './reset.css'; /* clean all browsers default congigs */
import './App.css';

/* Pages */
import About from "../Pages/about/About";
import Home from "../Pages/home/Home";
import Shop from "../Pages/shop/Shop";
import Product from "../Pages/shop/product/Product";
import Cart from "../Pages/cart/Cart";
import Contact from "../Pages/contact/Contact";
/* Auth */
import SignIn from "../Pages/auth/signIn/SignIn";
import SignUp from "../Pages/auth/signUp/SignUp";

/* Layouts */
import NavBar from '../Layouts/Navbar/NavBar';
import Footer from '../Layouts/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        {/* Home */}
        <Route path="/" element={< Home />}/>
        {/* About */}
        <Route path="/about" element={< About />} />
        {/* Contact */}
        <Route path="/contact" element={< Contact />} />
        {/* Shop A REVOIR */}
        <Route path="/shopping" element={< Shop />}>
          <Route path="/shopping/product/:category/:type/:refProduct" element={< Product />}/>
        </Route>
        {/* Cart */}
        <Route path="/cart" element={< Cart />} />
        {/* Authentification */}
        <Route path="/auth/signin" element={< SignIn />} />
        <Route path="/auth/signup" element={< SignUp />} />

        <Route path="*" element={< Home />}/>
      </Routes>
      < Footer/>
    </div>
  );
}

export default App;
