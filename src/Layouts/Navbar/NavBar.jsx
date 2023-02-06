import { useState } from 'react';
import { NavLink } from 'react-router-dom';
/* Style */
import NavStyled from './NavBar.style';
/* Compoments */
import StyledButton from '../../Components/Button'
import StyledCart from '../../Components/Cart';
/* Logo */
import logo from "../../assets/logo/logo.png";
/* Icons */
import { RxCross1 } from "react-icons/rx";
import { SlMenu } from "react-icons/sl";
import { HiOutlineUserCircle } from "react-icons/hi";

export default function NavBar() {

  const [navigationSidebarOpen, setNavigationSidebarOpen] = useState(false)

  /* open the siddebar navigation on small devices */
  const handleToggle = () => {
    setNavigationSidebarOpen(!navigationSidebarOpen)
    console.log(navigationSidebarOpen)
  }


  return (
    <NavStyled >
      {/* Left */}

        <NavLink to="/"><img className="logo" src={logo} alt="shoppy logo" /></NavLink>

        {/* interface fot small devices (mobiles, tablets ...) */}
        <div className='mobileNavigation'>
          {/* auth */}
          {/* user profile */}
          <div className="user">
            <HiOutlineUserCircle className="userProfilelogo" size="1.5rem" />
            {/* user's name */}
            <p>user</p>
          </div>
          {/* Cart */}
          <NavLink to="/cart">
            <StyledCart >0</StyledCart>
          </NavLink>
          {/* navigation: burgermenu */}
          {navigationSidebarOpen ? < RxCross1 className="burgerMenuClose" size="1.5rem" onClick={handleToggle}/> : <SlMenu className="burgerMenu" size="1.5rem" onClick={handleToggle}/>}
        </div>
        
        
      {/* navigation */}
      <div className={`navNavigation ${!navigationSidebarOpen ? "hideSidebarNavigation" : ""}`}>
        <ul>
          <li><NavLink to="/">Accueil</NavLink></li>
          <li><NavLink to="/shopping">Shopping</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>


      {/* interface for desktop */}
      <div className="auth">
        {/* auth */}
        <NavLink to="/auth/signIn">Login</NavLink>
        <NavLink to="/auth/signUp"><StyledButton primary>Sign up</StyledButton></NavLink>
        {/* cart */}
        <NavLink to="/cart">
            <StyledCart >0</StyledCart>
        </NavLink>
      </div>
      
    </NavStyled>
  );
}

