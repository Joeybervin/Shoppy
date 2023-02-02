import { Route, Routes } from "react-router-dom";
import './App.css';

/* Pages */
import About from "./Pages/about/About";
import Home from "./Pages/home/Home";
import Shop from "./Pages/shop/Shop";
import Product from "./Pages/shop/product/Product";
import Cart from "./Pages/cart/Cart";
import Contact from "./Pages/contact/Contact";

/* Component */
import NavBar from './Components/NavBar';


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
          <Route path="/shoping/product/:category/:type/:refProduct" element={< Product />}/>
        </Route>
        {/* Cart */}
        <Route path="/cart" element={< Cart />} />

        <Route path="*" element={< Home />}/>
      </Routes>
    </div>
  );
}

export default App;
