import React, {useEffect, useState} from 'react'

import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
/* slice */
import { logOut} from '../../store/slices/userSlice'
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
  }


  const [isActive, setIsActive] = useState(false);
  /* input */
  const [formData, setFormData] = useState({...userInitialInfos});

  /* errors messages */
  const [errorMessage, setErrorMessage] = useState("")


  useEffect(() => {
    if (!user.token) {
      navigate("/authentification")
    }
  })


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    const rawResponse = fetch('/updateProfile', {
      method : 'UPDATE',
      header : 'Content-Type/json',
      body : JSON.stringify(formData)
    })

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
            <p>{user.address}</p>
            <p>{user.city}</p>
          </div>

        </section>

        {/*  FORP  => update user profile + order */}
        <div>

        <section className="update">

        <form onSubmit={(e) => {handleSubmit(e)}}>

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

        <div onClick={() => {setIsActive(!isActive)}} className={`${ !isActive ? 'isActive' : null} showAllUpdateSection`}><HiChevronDown /></div>

          

          
        </section>

        <section className="order">

        </section>

        </div>

        
        


        <BigButton onClick={()=> {dispatch(logOut())}}>se déconnecter</BigButton>



      </StyledProfile>
    )
  
  
}
