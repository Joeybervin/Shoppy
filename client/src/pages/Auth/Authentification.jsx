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


    const handleSubmit = async (event) => {

    event.preventDefault();

        if (hasAnAccount) {
            console.log("MEMBRE")
        }
        else {
            console.log("PAS MEMBRE")
        }

    }

    const handdleSubmit = async (e) => {

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

                    
                    
                    <BigButton onClick={() => {handdleSubmit()}}>Connexion</BigButton>

                    <p
                    onClick={() => setHasAnAccount(!hasAnAccount)}>{hasAnAccount ? "Pas encore membre ? Créer un compte" : "Déjà membre ? cliquer ici"}</p>


                </form>
            </div>
        </StyledAuthentification>
    );
}
