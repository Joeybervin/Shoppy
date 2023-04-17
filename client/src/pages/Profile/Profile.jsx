/* DATA */
import data from '../../data/products.json';
/* HOOKS */
import { useEffect, useState} from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useNavigate , Outlet, useLocation } from "react-router-dom";
/* SLICES */
import { logOut, save, removeProducFromWishlist} from '../../store/slices/userSlice'
/* UTILS */
import { fetchData, handleInputChange, capitalizeFirstLetter } from '../../utils/index';
/* COMPONENTS */
import { TextInput as Input , TextLabel as Label, BigButton as Button, SmallCard as WishListCard, BadWay, OrderCard } from '../../components/index';
/* ICONS */
import { HiOutlineLocationMarker, HiOutlineShoppingCart, HiOutlineChatAlt, HiChevronRight, HiHeart, HiOutlineUserCircle } from "react-icons/hi";
import { RiCustomerService2Line } from "react-icons/ri";
/* STYLE */
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
  const formFields = [
    {
      label: 'Prénom',
      name : 'firstName',

    },
    {
      label: 'Nom',
      name : 'lastName',

    },
    {
      label: 'E-mail',
      name : 'email',

    },
    {
      label: 'Votre Adresse',
      name : 'address',

    },
    {
      label: 'Ville',
      name : 'city',

    },
  ]

  /*======= STATES =======*/
  const [userWishlist, setUserWishlist] = useState([])
  const [isActive, setIsActive] = useState(false);
  const [formData, setFormData] = useState({...userInitialInfos});
  const [errorMessage, setErrorMessage] = useState("")
  const [profile, setProfile] = useState(true)

  /*======= USEEFFECT ========*/
  // ------> show the wanted rubric ofthe profile
  useEffect(() => { 
      const customerParams = location.pathname.split("/").pop();
      const url = location.pathname
      if (customerParams === "messages" || url.includes("mes-achats")) {
        setProfile(false)
      }
      else {
        setProfile(true)
      }

  }, [location]);
  // ----> redirect of the customer is not connected
  useEffect(() => {
    if (!user.token) {
      navigate("/authentification")
    }
  })
  // ----> charge the customer wishlist infos
  useEffect(() => { 
    let wishlistData = data.filter(product => user.wishlist.includes(product.ref))
    setUserWishlist(wishlistData)
  }, [user.wishlist])


/*======= FUNCTIONS =======*/
  // ------> submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await  fetchData('/user/updateProfile', {formData , userEmail :user.email}, 'PUT')
    dispatch(save(response.userInfos))
    setIsActive(!isActive)

  }

  // ----> clean the input and close the form
  const handleSubmitCancel = () => {
    setErrorMessage("")
    setFormData({...userInitialInfos}); // change the inputs values for initil values
    setIsActive(!isActive) // close the update section
  }

  // ------> add product from the wishlist to the cart
  const addToCart = (refProduct, catProduct) => {
    navigate(`/shop/${catProduct}/ref/${refProduct}`)
  }

  // ------> delete the product from the wishlist
  const DeleteFromWishlist = async (refProduct) => {
    const response = await  fetchData('/user/removeFromWishlist', {email : user.email, productref : refProduct}, 'PUT')
            if (response.status === "success") {
                dispatch(removeProducFromWishlist(refProduct))
            }
            else {
              console.log("Une erreur")
            }
  }

  // ------> send the user to the wanted rubric
  const profileRubricsInteractions = (rubric) => {
    navigate(`/profil/${capitalizeFirstLetter(user.firstName)}${capitalizeFirstLetter(user.lastName)}/${rubric}`)
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
        <div onClick={() => profileRubricsInteractions("messages")} className="messages">
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

        {/* update the user profile */}
        <section className="updateSection">
        <div 
          onClick={() => {setIsActive(!isActive)}} >
            <div className='sectionTitle'>
              <HiOutlineUserCircle />
              <p>Vos nformations personnelles</p>
            </div>
              <HiChevronRight className={`${ isActive ? 'isActive' : null} showAllUpdateSection`} />
          </div>

        {/* form */}
        <form method="PUT" noValidate onSubmit={(e) => {handleSubmit(e)}}>
        {/* firstName & lastname */}
        <div>
          {formFields.map((field, index) => {
            if (field.name === "firstName" || field.name === "lastName") 
            return (
              <div key={"ff1"+index} >
              <Label htmlFor={field.name}>{field.label}</Label>
              <Input 
                  max="20"
                  id={field.name}
                  placeholder={field.label}
                  name={field.name}
                  type="text"
                  value={formData[field.name]}
                  onChange={(e) => {handleInputChange(e, true, ["firstName", "lastName"], setFormData, setErrorMessage)}}/>
      
              </div>
            )
            else return null
          })}
        </div>

        {/* email & address & city */}
        {formFields.map((field, index) => {
          if (field.name !== "firstName" && field.name !== "lastName") {
          return (
            <div key={"ff2"+index} className={ !isActive ? 'isActive' : null}>
            <Label htmlFor={field.name}>{field.label}</Label>
            <Input 
              id={field.name}
                placeholder={field.label}
                name={field.name}
                type={field.name}
                value={formData[field.name]}
              onChange={(e) => {handleInputChange(e, false, [], setFormData, setErrorMessage)}}/>
    
            </div>
          )}
          else return null
        })}

        <div className={`${ !isActive ? 'isActive' : null} buttonsGroup`}>
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

        {/* PART : order */}
        <section className="orderSection">
        <div>
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
              console.log(order)
              return (
                <div key={index} /* onClick={() => {profileRubricsInteractions(`mes-achats/commande/${order.id}`)}} */>
                  <OrderCard

                    date={order.date}
                    cartListLength={order.cart.length}
                    orderTotal={order.payment.total}
                 />
                 <hr />
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
