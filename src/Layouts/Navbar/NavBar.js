import { Link } from "react-router-dom";
/* Style */
import './navbar.style.css'
/* Compoments */
import {Button} from '../../Components/Button'
/* Logo */
import logo from "../../assets/logo/logo.png";
/* Icons */
import { BsBag } from 'react-icons/bs';

export default function NavBar() {
  return (
    <nav>
      {/* Left */}

        <Link className="logo" to="/"><img src={logo} alt="shoppy logo" /></Link>

      {/* middle */}
      <div className="NavNavigation">
        <Link to="/">Accueil</Link>
        <Link to="/shopping">Shopping</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>


      {/* right */}
      <div className="auth">
        <Link to="/auth/signIn">Login</Link>
        <Link to="/auth/signUp"><Button>Sign up</Button></Link>
        <Link className="panier"  to="/cart">
          <BsBag size="1.6rem" />
          <span className="badge">0</span>
        </Link>
      </div>
      
    </nav>
  );
}

