/* API */
import api from '../../data/products.json';
import React, {useEffect, useState} from 'react'
/* librairies */
import { useSelector, useDispatch } from "react-redux"
import { useNavigate , Outlet, useLocation } from "react-router-dom";
/* slice */
import { logOut, save, removeProducFromWishlist} from '../../store/slices/userSlice'
/* utils */
import fetchData from '../../utils/fetchData';
import  handleInputChange  from '../../utils/handleInputChange'
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';
/* components */
import  BadWay  from '../../components/BadWay' ;
import { TextInput as Input , TextLabel as Label} from '../../components/ui/Input';
import { BigButton as Button } from '../../components/ui/Button';
import { SmallCard as WishListCard } from '../../components/WishlistCards';
/* icons */
import { HiOutlineLocationMarker, HiOutlineShoppingCart, HiOutlineChatAlt, HiChevronRight, HiHeart, HiOutlineUserCircle } from "react-icons/hi";
import { RiCustomerService2Line } from "react-icons/ri";
/* style */
import StyledProfile from './profile.style';

export default function Profile() {

  /*======= HOOKS =======*/
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((state) => state.user);

  /*======= VARIABLES =======*/
  const userInitialInfos = {
    firstName: `${user.firstName || ''}`,
    lastName: `${user.lastName || ''}`,
    email: `${user.email || ''}`,
    address : `${user.address || ''}`,
    city: `${user.city || ''}`,
  };
  const userFullName = capitalizeFirstLetter(user.lastName).concat(capitalizeFirstLetter(user.lastName))

  /*======= STATES =======*/
  const [userWishlist, setUserWishlist] = useState([])
  const [isActive, setIsActive] = useState(false);
  const [formData, setFormData] = useState({...userInitialInfos});
  const [errorMessage, setErrorMessage] = useState("")
  const [profile, setProfile] = useState(true)

  /*======= USEEFFECT =======*/
  useEffect(() => { 
    const changeProfileView = () => {
      const customerParams = location.pathname.split("/").pop();
      if (customerParams === "messages" || customerParams === "mes-achats") {
        setProfile(false)
      }
      else if ( customerParams === userFullName) {
        setProfile(true)
      }
    }
    changeProfileView()

  }, [location, userFullName]);
  // ----> redirect of the customer is not connected
  useEffect(() => {
    if (!user.token) {
      navigate("/authentification")
    }
  })
  // ----> charge the customer wishlist infos
  useEffect(() => { 
    let wishlistData = api.filter(product => user.wishlist.includes(product.ref))
    setUserWishlist(wishlistData)
  }, [user.wishlist])


/*======= FUNCTIONS =======*/
  const handleSubmit = async (e) => {
    e.preventDefault();

    const rawResponse = await fetch('/user/updateProfile', {
      method : 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({formData , userEmail :user.email}),
    })
    const response = await rawResponse.json()
    dispatch(save(response.userInfos))

  }

  // ----> clean the input and close the form
  const handleSubmitCancel = () => {
    setErrorMessage("")
    setFormData({...userInitialInfos}); // change the inputs values for initil values
    setIsActive(!isActive) // close the update section
  }

  const addToCart = (refProduct, catProduct) => {
    navigate(`/shop/${catProduct}/ref/${refProduct}`)
  }

  const DeleteFromWishlist = async (refProduct) => {
    const response = await  fetchData('/user/removeFromWishlist', {email : user.email, productref : refProduct}, 'PUT')
            if (response.status === "success") {
                dispatch(removeProducFromWishlist(refProduct))
            }
            else {
              console.log("Une erreur")
            }
  }

  /*======= REDIRECT =======*/
  // ----> redirect to home page if the user isn't authentificated
  if (!user.token) {
    return (
      <BadWay />
    )
  }
  /*======= RENDER =======*/
  return (
    <StyledProfile>
      {/* SECTION USER  INFOS */}
      <section className="userSection">
        {/* USER IMG */}
        <img src="https://cheaterboss.com/wp-content/uploads/2022/01/kFycsF-UNN4-HD-1024x576.jpg" alt="profile img" />
        {/* USER NAME */}
        <p>{capitalizeFirstLetter(user.firstName)} <span>{capitalizeFirstLetter(user.lastName)}</span></p>

        {/* ADRESS */}
        <div className='address'>
          <div>
            <HiOutlineLocationMarker />
            <p>Adresse de livraison :</p>
          </div>
          <p><span>Votre addresse :</span> {user.address ||" non renseigné"}</p>
          <p><span>Ville :</span> {user.city || "non renseigné"}</p>
        </div>

        {/* ACCESS TO USER MESSAGES */}
        <div onClick={() => {navigate(`/profil/${capitalizeFirstLetter(user.firstName)}${capitalizeFirstLetter(user.lastName)}/messages`)}} className="messages">
          <div>
            <HiOutlineChatAlt />
            <p>Nos échanges</p>
            <p>{user.messages.length}</p>
          </div>
          <HiChevronRight />
        </div>

        {/* ACCESS CONTACT PAGE */}
        <div onClick={() => {navigate('/nous-contactez')}} className="messages">
          <div>
            <RiCustomerService2Line />
            <p>Nous contacter</p>
          </div>
          <HiChevronRight />
        </div>
      </section>

      <div className={!profile ? "noProfile" : null}>

        {/* Form to update the user profile */}
        <section className="updateSection">
        <div 
          onClick={() => {setIsActive(!isActive)}} >
            <div className='sectionTitle'>
              <HiOutlineUserCircle />
              <p>Vos nformations personnelles</p>
            </div>
              <HiChevronRight className={`${ isActive ? 'isActive' : null} showAllUpdateSection`} />
          </div>

        <form method="PUT" noValidate onSubmit={(e) => {handleSubmit(e)}}>

        <div>
          {/* FIRSTNAME */}
          <div>
            <Label htmlFor="prénom">Prénom : </Label>
            <Input 
            placeholder="Prénom"
            id="prénom"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={(e) => {handleInputChange(e, true, ["firstName", "lastName"], setFormData, setErrorMessage)}}/>
          </div>
          
          {/* LASTNAME */}
          <div>
              <Label htmlFor="nom">Nom</Label>
              <Input 
              placeholder="Nom"
              id="nom"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={(e) => {handleInputChange(e, true, ["firstName", "lastName"], setFormData, setErrorMessage)}}/>
          </div>
        </div>

        {/* EMAIL */}
        <div className={ !isActive ? 'isActive' : null}>
        <Label htmlFor="e-mail">E-mail</Label>
        <Input 
          id="e-mail"
          className={ !isActive ? 'isActive' : null}
            placeholder="E-mail"
            name="email"
            type="email"
            value={formData.email}
          onChange={(e) => {handleInputChange(e, false, [], setFormData, setErrorMessage)}}/>

        </div>
        
        {/* ADDRESS */}
        <div className={ !isActive ? 'isActive' : null}>
          <Label htmlFor="adresse">Votre adresse</Label>
          <Input 
              id="adresse"
              className={ !isActive ? 'isActive' : null}
              placeholder="Votre adresse..."
              name="address"
              type="text"
              value={formData.address}
              onChange={(e) => {handleInputChange(e, false, [], setFormData, setErrorMessage)}}/>
        </div>
        

        {/* CITY */}
        <div className={ !isActive ? 'isActive' : null}>
          <Label htmlFor="ville">Ville</Label>
          <Input 
              id="ville"
              placeholder="Ville"
              name="city"
              type="text"
              value={formData.city}
              onChange={(e) => {handleInputChange(e, false, [], setFormData, setErrorMessage)}}/>
        </div>
        
       

        <div className={`${ !isActive ? 'isActive' : null} 
        buttonsGroup`}>
          {/* server error message*/}
          <p>{errorMessage}</p>
          <Button onClick={handleSubmitCancel} type="button">Annuler</Button>
          <Button primary type="submit">Mettre à jour</Button>
        </div>

        </form>

        </section>

        <section className="wishlistSection">

          <div 
            onClick={() => {navigate('/favoris')}}>
            <div className='sectionTitle'>
              <HiHeart />
              <p>Wishlist</p>
            </div>
              < HiChevronRight />
          </div>

          {userWishlist.length === 0 ? 
          <div className='emptyList'>
            <p>Vous n'avez encore rien mis dans votre wishlist</p>
          </div>
          
          :
          <div>
            {userWishlist.map((product, index) => {
              return (
                <div key={index}>
                  <WishListCard 
                    imgSrc={product.productImage[0]}
                    imgAlt={product.productName}
                    productRef={product.ref}
                    productName={product.productName}
                    productPrice={product.price}
                    handleAddToCart={() => addToCart(product.ref, product.category)}
                    handleRemoveFromWishlist={() => DeleteFromWishlist(product.ref)}
                  />
                </div>
              )
            })}
          </div>}
          
        </section>

        <section className="orderSection">
        <div 
          onClick={() => {navigate(`/profil/${userFullName}/mes-achats`)}}>
            <div className='sectionTitle'>
              <HiOutlineShoppingCart />
              <p>Tous vos achats</p>
            </div>
              < HiChevronRight />
          </div>
          
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
        
        <Button onClick={()=> {dispatch(logOut())}}>se déconnecter</Button>

      </div>

      <Outlet />
    </StyledProfile>
  )
  
  
}
