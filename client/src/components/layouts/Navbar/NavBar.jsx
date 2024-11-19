/* Hooks */
import { useState} from 'react';

/* librairies : redux , react router */
import { useSelector } from 'react-redux'
import { NavLink, useNavigate} from 'react-router-dom';
/* utils */
import { capitalizeFirstLetter } from '../../../utils/index';

/* Compoments */
import NavbarCartLogo from '../../NavbarCartLogo';

import { RxCross1, RxHamburgerMenu, RxPerson, RxHeart, RxHeartFilled } from "react-icons/rx";

/* Style */
import StyledNavbar from './NavBar.style';

export default function NavBar() {

  const navigate = useNavigate()
  const user = useSelector((state) => state.user)
  const cart = useSelector((state) => state.cart)

  const [navigationSidebarOpen, setNavigationSidebarOpen] = useState(false)

  /* open the siddebar navigation on small devices */
  const handleToggle = () => {
    setNavigationSidebarOpen(!navigationSidebarOpen)
  }

  const connexion = () => {

    if (user.token === "") {
      navigate('/authentification')
    }
    else {
      navigate(`/profil/${capitalizeFirstLetter(user.firstName)}${capitalizeFirstLetter(user.lastName)}`)
    }

    setNavigationSidebarOpen(false)
  }


  return (
    <StyledNavbar >
      {/* Left */}

        <NavLink to="/"><img className="logo" src="/assets/shoppy.png" alt="shoppy logo" /></NavLink>

      
      {/* navigation */}
      <div onClick={handleToggle} className={`navNavigation ${!navigationSidebarOpen ? "hideSidebarNavigation" : "showSidebarNavigation"}`}>
        <ul>
          <li onClick={handleToggle}><NavLink to="/shop/Uni/vetement">Vêtements</NavLink></li>
          <li onClick={handleToggle}><NavLink to="/shop/Uni/chaussure">Chaussures</NavLink></li>
          <li onClick={handleToggle}><NavLink to="/shop/Uni/accessoire">Accessoires</NavLink></li>
          <li onClick={handleToggle}><NavLink to="/shop/Uni/sac">Sacs</NavLink></li>
          <li onClick={handleToggle}><NavLink to="/shop/Uni/beauté">Beauté</NavLink></li>
        </ul>
      </div>


      {/* right */}

      <div className='navbarRightSide'>

        
         {/* sign-in and sign-up pages acess when log-out || user account access */}
          
          <div onClick={()=>{navigate('/favoris')}} className="user">
            {user.wishlist.length === 0 ?
            <RxHeart style={{color : "#FD3838"}} className="userWishlist" size="1.5rem" />
            :
            <RxHeartFilled style={{color : "#FD3838"}} className="userWishlist" size="1.7rem" />
            }
            
          </div>

          <div onClick={()=>connexion()} className="user">
            <RxPerson className="userProfilelogo" size="1.5rem" />
            <p>{user.firstName}</p>
          </div>

        {/* cart */}
        <NavLink to="/commande/panier">
            <NavbarCartLogo>{cart.length}</NavbarCartLogo>
        </NavLink>
            
          {/* navigation: burgermenu */}
          <div className='burgerMenuContainer'>
          {navigationSidebarOpen ? < RxCross1 className="burgerMenuClose" size="1.5rem" onClick={handleToggle}/> : <RxHamburgerMenu className="burgerMenu" size="1.5rem" onClick={handleToggle}/>}

          </div>
          
      </div>
      
    </StyledNavbar>
  );
}

