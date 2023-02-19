
import { NavLink } from 'react-router-dom';

/* Hooks */
import { useState } from 'react';

/* Compoments */
import { SmallButton } from '../../components/Button'
import StyledCart from '../../components/Cart';

/* Assets */
import logo from "../../assets/logo/logo.png";

/* Icons => library : react-icons */
import { RxCross1 } from "react-icons/rx";
import { SlMenu } from "react-icons/sl";
import { HiOutlineUserCircle } from "react-icons/hi";

/* Style */
import StyledNavbar from './NavBar.style';

export default function NavBar() {

  const [navigationSidebarOpen, setNavigationSidebarOpen] = useState(false)

  /* open the siddebar navigation on small devices */
  const handleToggle = () => {
    setNavigationSidebarOpen(!navigationSidebarOpen)
  }


  return (
    <StyledNavbar >
      {/* Left */}

        <NavLink to="/"><img className="logo" src={logo} alt="shoppy logo" /></NavLink>

        {/* interface fot small devices (mobiles, tablets ...) */}
        <div className='mobileNavigation'>
          {/* auth */}
          {/* user profile */}
          <div onClick={()=>setNavigationSidebarOpen(false)} className="user">
            <HiOutlineUserCircle className="userProfilelogo" size="1.5rem" />
            {/* user's name */}
            <p>user</p>
          </div>
          {/* Cart */}
          <NavLink to="/cart">
            <span onClick={()=>setNavigationSidebarOpen(false)}>
              <StyledCart>0</StyledCart>
            </span>
            
          </NavLink>
          {/* navigation: burgermenu */}
          {navigationSidebarOpen ? < RxCross1 className="burgerMenuClose" size="1.5rem" onClick={handleToggle}/> : <SlMenu className="burgerMenu" size="1.5rem" onClick={handleToggle}/>}
        </div>
        
        
      {/* navigation */}
      <div onClick={handleToggle} className={`navNavigation ${!navigationSidebarOpen ? "hideSidebarNavigation" : ""}`}>
        <ul>
          <li onClick={handleToggle}><NavLink to="/">Accueil</NavLink></li>
          <li onClick={handleToggle}><NavLink to="/shopping">Shopping</NavLink></li>
          <li onClick={handleToggle}><NavLink to="/about">À propos</NavLink></li>
          <li onClick={handleToggle}><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>


      {/* interface for desktop */}
      <div className="auth">
        {/* auth */}
        <NavLink to="/auth/signIn">connexion</NavLink>
        <NavLink to="/auth/signUp"><SmallButton primary>s'inscrire</SmallButton></NavLink>
        {/* cart */}
        <NavLink to="/cart">
            <StyledCart >0</StyledCart>
        </NavLink>
      </div>
      
    </StyledNavbar>
  );
}

