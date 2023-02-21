import { useState, useEffect } from "react";
/* redux */
import { useDispatch } from 'react-redux'
/* slice */
import { save } from '../../store/slices/userSlice';
/* utils */
import { capitalizeFirst } from '../../utils/capitalizeFirst'
import { whiteSpace } from '../../utils/whiteSpace'
/* icons */
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
/* component */
import {BigButton} from '../../components/ui/Button'
/* style */
import StyledAuthentification from './authentification.style'



export default function Authentification() {

    const [hasAnAccount, setHasAnAccount] = useState(false);
    const [error, setError] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate()


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

        e.preventDefault();
        setErrorMessage("") // clear error message

        /* sign-in method */
        if (hasAnAccount && email !== "" && password !== ""  && !error) {
            const rawResponse = await fetch('/signIn', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({email: email, password: password})
            })
            let response = await rawResponse.json()
            let userInfos = response.userInfos
            if (response.connection) {
                dispatch(save(userInfos)) // send database data to my reducer
                navigate(`/profile/${capitalizeFirst(userInfos.firstName)}${capitalizeFirst(userInfos.lastName)}`)
                e.target.reset() // reset all input
            }
            else if (response.error === 'password') {
                setErrorMessage("le mot de passe ne correspond pas")
            }
            else {
                setErrorMessage("le compte n'existe pas")
            }
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
            let userInfosSaved = response.userInfos
            if (response.connection) {
                dispatch(save(userInfosSaved)) // send database data to my reducer
                navigate(`/profile/${capitalizeFirst(userInfosSaved.firstName)}${capitalizeFirst(userInfosSaved.lastName)}`)
                e.target.reset() // reset all input
            }
            else if (response.hasAnAccount) {
                setErrorMessage("L'adresse e-mail existe déjà dans notre base de données")
                e.target.reset() // reset all input
                setHasAnAccount(true) // change of form
            }
            else if (error) {
                setErrorMessage("Assure toi que tous les champs obligatoires soient bien remplis")

            }
        }
        else {
            setErrorMessage("Assure-toi que tous les champs soient bien remplis")
        }
    }


    /* pre submit validator */
    const handleInputChange = (e, setValue, setErrorMessage, label) => {
        
        setValue(e.target.value)
        setErrorMessage("") // Clear error message
        const invalid = whiteSpace(e.target.value) // Check if any white space was typed
        setError(false) // clear the status of the form => no errors waiting for the next submit

        if (invalid) {
            setErrorMessage(`Un espace s'est infiltrer`)
            setError(true)
        }

        if (!hasAnAccount) {

            if (label === "password") {
                setPasswordConfirmationErrorMessage("les mots de passe ne sont pas identiques")
                if (e.target.value === passwordConfirmation) setPasswordConfirmationErrorMessage("")
            }
            
            if (label === "passwordVerification" && e.target.value !== password) {
                setError(true)
                setPasswordConfirmationErrorMessage("les mots de passe ne sont pas identiques")
            }

        }
        
    }




    return (
        <StyledAuthentification >
            <div>
                <p>{!hasAnAccount ? "Créer un compte" : "Connexion"}</p>
                <form method="POST" noValidate onSubmit={(e) => {handleSubmit(e)}}>

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
                        onChange={(e) => handleInputChange(e, setFirstName, setFirstNameErrorMessage, "firstName")}/>
                    <p>{firstNameErrorMessage}</p>

                    {/* LASTNAME */}
                    <input 
                    required
                        className={!hasAnAccount ? "" : "member"}
                        placeholder="Nom"
                        name="lastName"
                        type="text"
                        value={lastName}
                        onChange={(e) => handleInputChange(e, setLastName, setLastNameErrorMessage, "lastName")}/>
                    <p>{lastNameErrorMessage}</p>

                    {/* EMAIL */}
                    <input 
                    required
                    autoComplete="username"
                        placeholder="E-mail"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => handleInputChange(e, setEmail, setEmailErrorMessage, "email")}/>
                    <p>{emailErrorMessage}</p>

                    {/* PASSWORD */}
                    <input 
                    required
                    autoComplete="new-password"
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
                    autoComplete="new-password"
                        className={!hasAnAccount ? "" : "member"}
                        placeholder="Confirmer le mot de passe"
                        name="passwordConfirmation"
                        type="password"
                        value={passwordConfirmation}
                        onChange={(e) => handleInputChange(e, setPasswordConfirmation, setPasswordConfirmationErrorMessage, "passwordVerification")}/>
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
