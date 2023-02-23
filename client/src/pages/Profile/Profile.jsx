/* API */
import api from '../../data/products.json';
import React, {useEffect, useState} from 'react'
/* librairies */
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
/* slice */
import { logOut, save} from '../../store/slices/userSlice'
/* utils */
import { whiteSpace } from '../../utils/whiteSpace'
/* components */
import  BadWay  from '../../components/BadWay' ;
import { BigButton } from '../../components/ui/Button';

/* icons */
import { HiOutlineLocationMarker, HiChevronDown } from "react-icons/hi";
/* style */
import StyledProfile from './profile.style';

export default function Profile() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const userInitialInfos = {
    firstName: `${user.firstName || ''}`,
    lastName: `${user.lastName || ''}`,
    email: `${user.email || ''}`,
    address : `${user.address || ''}`,
    city: `${user.city || ''}`,
  };
  let [userWishlist, setUserWishlist] = useState([])


  const [isActive, setIsActive] = useState(false);
  const [formData, setFormData] = useState({...userInitialInfos});
  const [errorMessage, setErrorMessage] = useState("")


  useEffect(() => {
    if (!user.token) {
      navigate("/authentification")
    }
  })
  useEffect(() => { // charge yhe user wishlist infos
    let wishlistData = api.filter(product => user.wishlist.includes(product.ref))
    setUserWishlist(wishlistData)
  }, [user.wishlist])


  const handleInputChange = (event) => {

    const invalidWhitespace = whiteSpace(event.target.value) // Check if any white space was typed
    
    const { name, value } = event.target;
    if ((name === "firstName" || name === "lastName") && invalidWhitespace) {
      setErrorMessage(`Un espace s'est infiltrer`)
    }
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const rawResponse = await fetch('/updateProfile', {
      method : 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({formData , userEmail :user.email}),
    })
    const response = await rawResponse.json()
    dispatch(save(response.userInfos))

  }

  const handleSubmitCancel = () => {
    setFormData({...userInitialInfos}); // change the inputs values for initil values
    setIsActive(!isActive) // close the update section
  }

  
  if (!user.token) {
    return (
      <BadWay />
    )
  }
    return (
      <StyledProfile>

        {/* USER */}
        <section className="user">
          {/* USER IMG */}
          <img src="https://t4.ftcdn.net/jpg/05/27/92/75/360_F_527927577_DLrQ9Lkqpy9CjMKiTd1QEWQ87ko1RMYC.jpg" alt="profile img" />
          {/* USER NAME */}
          <p>{user.firstName} {user.lastName}</p>

          {/* ADRESS */}
          <div>
            <p><HiOutlineLocationMarker /> Adresse de livraison :</p>
            <p>{user.address ||" non renseigné"}</p>
            <p>{user.city || "non renseigné"}</p>
          </div>

        </section>

        {/*  FORP  => update user profile + order */}
        <div>

        {/* Form to update the user profile */}
        <section className="update">

        <form method="PUT" noValidate onSubmit={(e) => {handleSubmit(e)}}>

        {/* server error message*/}
        {errorMessage}

        {/* FIRSTNAME */}
        <input 
            placeholder="Prénom"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleInputChange}/>

        {/* LASTNAME */}
        <input 
            placeholder="Nom"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleInputChange}/>

        {/* EMAIL */}
        <input 
            className={ !isActive ? 'isActive' : null}
            placeholder="E-mail"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}/>


        {/* ADDRESS */}
        <input 
            className={ !isActive ? 'isActive' : null}
            placeholder="Votre adresse..."
            name="address"
            type="text"
            value={formData.address}
            onChange={handleInputChange}/>

        {/* CITY */}
        <input 
            className={ !isActive ? 'isActive' : null}
            placeholder="Ville"
            name="city"
            type="text"
            value={formData.city}
            onChange={handleInputChange}/>

        <div className={`${ !isActive ? 'isActive' : null} buttonsGroup`}>
          <BigButton onClick={handleSubmitCancel} type="button">Annuler</BigButton>
          <BigButton primary type="submit">Mettre à jour</BigButton>
        </div>

        </form>

        <div onClick={() => {setIsActive(!isActive)}} className={`${ isActive ? 'isActive' : null} showAllUpdateSection`}><HiChevronDown /></div>

        </section>

        <section className="wishlist">
          <p>Wishlist</p>
          {userWishlist.length === 0 ? 
          <div className='emptyList'>
            <p>Vous n'avez encore rien mis dans votre wishlist</p>
          </div>
          
          :
          <div>
            {userWishlist.map((product, index) => {
              return (
                <div key={index}>
                  {product.productName}
                </div>
              )
            })}
          </div>}
          
        </section>

        <section className="order">
          <p>Tous vos achats</p>
          {user.orders.length === 0 ? 
          <div className='emptyList'>
            <p>Vous n'avez encore effectué aucune commande</p>
          </div>
          
          :
          <div>
            {user.orders.map((order, index) => {
              return (
                <div key={index}>
                  commande
                </div>
              )
            })}
          </div>}

        </section>

        </div>

        
        


        <BigButton onClick={()=> {dispatch(logOut())}}>se déconnecter</BigButton>



      </StyledProfile>
    )
  
  
}
