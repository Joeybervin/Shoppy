import { useState, useEffect } from "react";
/* redux */
import { useDispatch } from 'react-redux'
/* slice */
import { save } from '../../store/slices/userSlice';
/* utils */
import { capitalizeFirst } from '../../utils/capitalizeFirst'
/* icons */
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { Navigate } from "react-router-dom";
/* component */
import {BigButton} from '../../components/ui/Button'
/* style */
import StyledAuthentification from './authentification.style'



export default function Authentification() {

    const [hasAnAccount, setHasAnAccount] = useState(false);
    const [error, setError] = useState(false);
    const dispatch = useDispatch();


    /* input */
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");

    /* input error message */
    const [errorMessage, setErrorMessage] = useState("")
    const [firstNameErrorMessage, setFirstNameErrorMessage] = useState("")
    const [lastNameErrorMessage, setLastNameErrorMessage] = useState("")
    const [emailErrorMessage, setEmailErrorMessage] = useState("")
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("")
    const [passwordConfirmationErrorMessage, setPasswordConfirmationErrorMessage] = useState("")


    useEffect(() => {}, [firstNameErrorMessage,passwordConfirmation, password])

    const handleSubmit = async (e) => {

        setErrorMessage("") // clear error message

        /* sign-in method */
        if (hasAnAccount && email !== "" && password !== ""  && !error) {
            console.log("on envoie")
        }
        /* sign-up method */
        else if (!hasAnAccount && email !== "" && password !== "" && passwordConfirmation !== "" && firstName !== "" && lastName !== "" && !error) {
            const userInfos = {
                email: email,
                password: password,
                firstName : firstName,
                lastName : lastName,
                address : `${address || ""}`,
                city : `${address || ""}`,
            }
            const rawResponse = await fetch('/signUp', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userInfos),
            })
            let response = await rawResponse.json()

            if (response.userSaved) {
                console.log("backend data : ",response.saveduserInfos)
                // ! A REVOIR 
                /*
                if (l'utilisateur à déjà un panier) {
                    navigate('/cart')
                }
                */
                dispatch(save(response.saveduserInfos)) // send database data to my reducer
                Navigate(`/profile/${capitalizeFirst(response.saveduserInfos.firstName)}${capitalizeFirst(response.saveduserInfos.lastName)}`)
                

            }
            else if (response.hasAnAccount) {
                setErrorMessage("L'adresse e-mail existe déjà")
                e.target.reset() // reset all input
                setHasAnAccount(true) // change of form
            }
            else if (error.true) {
                setErrorMessage("Une erreur est apparue lors de la création de ton compte. Vérifie qu'il n'y ai pas d'erreur(s).")

            }
        }
        else {
            setErrorMessage("Une erreur est apparue lors de la création de ton compte. Vérifie qu'il n'y ai pas d'erreur(s).")
        }


        /* Assure-toi que ton adresse e-mail et ton mot de passe sont corrects */
        

    }

    /* find white space in the input */
    function hasWhiteSpace(s) {
        return (/\s/).test(s);
    }

    /* pre submit validator */
    const handleInputChange = (e, setValue, setErrorMessage, label) => {
        
        setValue(e.target.value)
        setErrorMessage("") // Clear error message

        setError(false)

        if (!hasAnAccount) {
            if (label !== "passwordConfirmation") {

                if (label === "password") {
                    setPasswordConfirmationErrorMessage("les mots de passe ne sont pas identiques")
                    if (e.target.value === passwordConfirmation) setPasswordConfirmationErrorMessage("")

                }
                const invalid = hasWhiteSpace(e.target.value) // Validate input
                if (invalid) {
                    setErrorMessage(`Une erreur est survenue dans le ${label}`) // Set error message
                    setError(true)
                }

            } else {
                
                if (e.target.value !== password) {
                    setError(true)
                    setPasswordConfirmationErrorMessage("les mots de passe ne sont pas identiques")
                }

            }

        }
        
        
    }




    return (
        <StyledAuthentification >
            <div>
                <p>{!hasAnAccount ? "Créer un compte" : "Connexion"}</p>
                <form onSubmit={(e) => {handleSubmit(e)}}>

                    {/* server error message*/}
                    {errorMessage}

                    {/* FIRSTNAME */}
                    <input 
                        maxLength={50}
                        required
                        className={!hasAnAccount ? "" : "member"}
                        placeholder="Prénom"
                        name="firstName"
                        type="text"
                        value={firstName}
                        onChange={(e) => handleInputChange(e, setFirstName, setFirstNameErrorMessage, "prénom")}/>
                    <p>{firstNameErrorMessage}</p>

                    {/* LASTNAME */}
                    <input 
                    required
                        className={!hasAnAccount ? "" : "member"}
                        placeholder="Nom"
                        name="lastName"
                        type="text"
                        value={lastName}
                        onChange={(e) => handleInputChange(e, setLastName, setLastNameErrorMessage, "nom")}/>
                    <p>{lastNameErrorMessage}</p>

                    {/* EMAIL */}
                    <input 
                    required
                        placeholder="E-mail"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => handleInputChange(e, setEmail, setEmailErrorMessage, "mail")}/>
                    <p>{emailErrorMessage}</p>

                    {/* PASSWORD */}
                    <input 
                    required
                        placeholder="Mot de passe"
                        name="password"
                        type="password"
                        value={password}
                        onChange={(e) => handleInputChange(e, setPassword, setPasswordErrorMessage, "password")}/>
                    {/* error message */}
                    <p>{passwordErrorMessage}</p>

                    {/* PASSWORD CONFIRMATION */}
                    <input
                    required
                        className={!hasAnAccount ? "" : "member"}
                        placeholder="Confirmer le mot de passe"
                        name="passwordConfirmation"
                        type="password"
                        value={passwordConfirmation}
                        onChange={(e) => handleInputChange(e, setPasswordConfirmation, setPasswordConfirmationErrorMessage, "passwordConfirmation")}/>
                    <p>{passwordConfirmationErrorMessage}</p>

                    {/* ADDRESS */}
                    <input 
                        className={!hasAnAccount ? "" : "member"}
                        placeholder="Votre adresse..."
                        name="address"
                        type="text"
                        value={address}
                        onChange={(e)=>setAddress(e.target.value) }/>

                    {/* CITY */}
                    <input 
                        className={!hasAnAccount ? "" : "member"}
                        placeholder="Ville"
                        name="city"
                        type="text"
                        value={city}
                        onChange={(e)=>setCity(e.target.value) }/>

                    
                    
                    <BigButton type="submit">Connexion</BigButton>

                    <p
                    onClick={() => setHasAnAccount(!hasAnAccount)}>{hasAnAccount ? "Pas encore membre ? Créer un compte" : "Déjà membre ? cliquer ici"}</p>


                </form>
            </div>
        </StyledAuthentification>
    );
}



















































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
