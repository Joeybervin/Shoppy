/* Hooks */
import { useState, useEffect } from 'react';

/* librairies : redux , react router */
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom';

/* utils */
import { capitalizeFirst } from '../../../utils/capitalizeFirst';

/* Compoments */
import StyledCart from '../../Cart';

/* Assets & Icons => library : react-icons  */
import logo from "../../../assets/logo/logo.png";
import { RxCross1, RxHamburgerMenu, RxFace } from "react-icons/rx";

/* Style */
import StyledNavbar from './NavBar.style';

export default function NavBar() {

  const navigate = useNavigate()
  const user = useSelector((state) => state.user)



  const [navigationSidebarOpen, setNavigationSidebarOpen] = useState(false)

  useEffect(() => {}, [user])



  /* open the siddebar navigation on small devices */
  const handleToggle = () => {
    setNavigationSidebarOpen(!navigationSidebarOpen)
  }

  const connexion = () => {

    if (user.token === "") {
      navigate('/authentification')
    }
    else {
      navigate(`/profile/${capitalizeFirst(user.firstName)}${capitalizeFirst(user.lastName)}`)
    }

    setNavigationSidebarOpen(false)
  }


  return (
    <StyledNavbar >
      {/* Left */}

        <NavLink to="/"><img className="logo" src={logo} alt="shoppy logo" /></NavLink>

       
        
      {/* navigation */}
      <div onClick={handleToggle} className={`navNavigation ${!navigationSidebarOpen ? "hideSidebarNavigation" : "showSidebarNavigation"}`}>
        <ul>
          <li onClick={handleToggle}><NavLink to="/">Accueil</NavLink></li>
          <li onClick={handleToggle}><NavLink to="/shopping">Shopping</NavLink></li>
          <li onClick={handleToggle}><NavLink to="/about">À propos</NavLink></li>
          <li onClick={handleToggle}><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>


      {/* right */}

      <div className='navbarRightSide'>

        
         {/* sign-in and sign-up pages acess when log-out || user account access */}
          
          <div onClick={()=>connexion()} className="user">
            <RxFace style={{color : "gold"}} className="userProfilelogo" size="1.5rem" />
            {/* user's name if login */}
            <p>{user.firstName}</p>
          </div>

        {/* cart */}
        <NavLink to="/cart">
            <StyledCart >0</StyledCart>
        </NavLink>
          
        
            
        
          {/* navigation: burgermenu */}
          <div className='burgerMenuContainer'>
          {navigationSidebarOpen ? < RxCross1 className="burgerMenuClose" size="1.5rem" onClick={handleToggle}/> : <RxHamburgerMenu className="burgerMenu" size="1.5rem" onClick={handleToggle}/>}

          </div>
          
    

      </div>
      
        


  
       
      
      
      
    </StyledNavbar>
  );
}

