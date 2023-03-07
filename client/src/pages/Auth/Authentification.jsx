import { useState } from "react";
/* redux */
import { useDispatch } from 'react-redux'
/* slice */
import { save } from '../../store/slices/userSlice';
/* utils */
import {fetchData, capitalizeFirstLetter, whiteSpace} from '../../utils/index';
/* icons */
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
/* component */
import { TextInput as Input, BigButton as Button  } from "../../components/index";
/* style */
import StyledAuthentification from './authentification.style'



export default function Authentification() {

    /*======= HOOKS =======*/
    const dispatch = useDispatch();
    const navigate = useNavigate();


    /*======= STATES =======*/
    const [hasAnAccount, setHasAnAccount] = useState(false);
    const [error, setError] = useState(false);
    // ----> input
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    // ----> input error message
    const [errorMessage, setErrorMessage] = useState("");
    const [firstNameErrorMessage, setFirstNameErrorMessage] = useState("");
    const [lastNameErrorMessage, setLastNameErrorMessage] = useState("");
    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
    const [passwordConfirmationErrorMessage, setPasswordConfirmationErrorMessage] = useState("");
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const [passwordConfirmationVisibility, setpasswordConfirmationVisibility] = useState(false);

    /*======= FUNCTIONS =======*/
    // ----> handle the form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("") // clear error message

        // ----> sign-in
        if (hasAnAccount && email !== "" && password !== ""  && !error) {
            let response = await fetchData('/signIn', {email: email, password: password}, 'POST' )
            let userInfos = response.userInfos
            if (response.connection) {
                dispatch(save(userInfos)) // send database data to my reducer
                navigate(`/profil/${capitalizeFirstLetter(userInfos.firstName)}${capitalizeFirstLetter(userInfos.lastName)}`)
                e.target.reset() // reset all input
            }
            else if (response.error === 'password') {
                setErrorMessage("le mot de passe ne correspond pas")
            }
            else {
                setErrorMessage("le compte n'existe pas")
            }
        }
        // ----> sign-up
        else if (!hasAnAccount && email !== "" && password !== "" && passwordConfirmation !== "" && firstName !== "" && lastName !== "" && !error) {
            const userInfos = {
                email: email,
                password: password,
                firstName : firstName,
                lastName : lastName,
                address : `${address || ""}`,
                city : `${city || ""}`,
            }
            let response = await fetchData('/signUp', userInfos, 'POST' )
            let userInfosSaved = response.userInfos
            if (response.connection) {
                dispatch(save(userInfosSaved)) // send database data to my reducer
                navigate(`/profil/${capitalizeFirstLetter(userInfosSaved.firstName)}${capitalizeFirstLetter(userInfosSaved.lastName)}`)
                e.target.reset() // reset all input
            }
            else if (response.hasAnAccount) {
                setErrorMessage("L'adresse e-mail existe déjà dans notre base de données")
                e.target.reset() // reset all input
                setHasAnAccount(true) // change of form for sign-in
            }
            else if (error) {
                setErrorMessage("Assure toi que tous les champs obligatoires soient bien remplis")
            }
        }
        // ----> error
        else {
            setErrorMessage("Assure-toi que tous les champs soient bien remplis")
        }
    }

    // ----> Verify values of required fields
    const handleInputChange = (e, setValue, setErrorMessage, label) => {
        
        setValue(e.target.value)
        setErrorMessage("") // Clear error message
        const invalidWhitespace = whiteSpace(e.target.value) // Check if any white space was typed
        setError(false) // clear the status of the form => no errors waiting for the next submit

        if (invalidWhitespace) {
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

    // ----> Show and hide the password
    const handleClickShowPassword = (setValue, value) => {
        setValue(!value);
    };

    const connection = () => {
        setHasAnAccount(!hasAnAccount);
        setFirstNameErrorMessage("");
        setLastNameErrorMessage("");
        setEmailErrorMessage("");
        setPasswordErrorMessage("");
        setPasswordConfirmationErrorMessage("");
    }

    return (
        <StyledAuthentification >
            <div>
                <p>{!hasAnAccount ? "Créer un compte" : "Connexion"}</p>
                <form method="POST" noValidate onSubmit={(e) => {handleSubmit(e)}}>

                    {/* server error message*/}
                    <p className="formErrorMessage">{errorMessage}</p>

                    {/* FIRSTNAME */}
                    <Input 
                        maxLength={20}
                        required
                        className={!hasAnAccount ? "" : "member"}
                        placeholder="Prénom"
                        name="firstName"
                        type="text"
                        value={firstName}
                        onChange={(e) => handleInputChange(e, setFirstName, setFirstNameErrorMessage, "firstName")}/>
                    <p className="inputErrorMessage">{firstNameErrorMessage}</p>

                    {/* LASTNAME */}
                    <Input 
                        maxLength={20}
                        required
                        className={!hasAnAccount ? "" : "member"}
                        placeholder="Nom"
                        name="lastName"
                        type="text"
                        value={lastName}
                        onChange={(e) => handleInputChange(e, setLastName, setLastNameErrorMessage, "lastName")}/>
                    <p className="inputErrorMessage">{lastNameErrorMessage}</p>

                    {/* EMAIL */}
                    <Input 
                        maxLength={25}
                        required
                        autoComplete="username"
                        placeholder="E-mail"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => handleInputChange(e, setEmail, setEmailErrorMessage, "email")}/>
                    <p className="inputErrorMessage">{emailErrorMessage}</p>

                    {/* PASSWORD */}
                    <div className="password">
                    <Input 
                        maxLength={35}
                        required
                        autoComplete="new-password"
                        placeholder="Mot de passe"
                        name="password"
                        type={!passwordVisibility ? "password" : "text"}
                        value={password}
                        onChange={(e) => handleInputChange(e, setPassword, setPasswordErrorMessage, "password")}/>
                        <div className="showPassword"  onClick={() => {handleClickShowPassword(setPasswordVisibility, passwordVisibility)}}>
                            {passwordVisibility ? < RiEyeOffLine /> : < RiEyeLine />}
                        </ div>
                    </div>
                    {/* password error message */}
                    <p className="inputErrorMessage">{passwordErrorMessage}</p>

                    {/* PASSWORD CONFIRMATION */}
                    <div className={`password ${!hasAnAccount ? '' : 'member'}`}>
                    <Input
                        maxLength={35}
                        required
                        autoComplete="new-password"
                        placeholder="Confirmer le mot de passe"
                        name="passwordConfirmation"
                        type={!passwordConfirmationVisibility ? "password" : "text"}
                        value={passwordConfirmation}
                        onChange={(e) => handleInputChange(e, setPasswordConfirmation, setPasswordConfirmationErrorMessage, "passwordVerification")}/>
                        <div className="showPassword" onClick={() => {handleClickShowPassword(setpasswordConfirmationVisibility, passwordConfirmationVisibility)}}>
                            {passwordConfirmationVisibility ? < RiEyeOffLine /> : < RiEyeLine />}
                        </div>
                    </div>
                    {/* confirmation password error message */}
                    <p className="inputErrorMessage">{passwordConfirmationErrorMessage}</p>

                    {/* ADDRESS */}
                    <Input 
                        maxLength={50}
                        className={!hasAnAccount ? "" : "member"}
                        placeholder="Votre adresse..."
                        name="address"
                        type="text"
                        value={address}
                        onChange={(e)=>setAddress(e.target.value) }/>

                    {/* CITY */}
                    <Input 
                        maxLength={20}
                        className={!hasAnAccount ? "" : "member"}
                        placeholder="Ville"
                        name="city"
                        type="text"
                        value={city}
                        onChange={(e)=>setCity(e.target.value) }/>

                    
                    
                    <Button type="submit">Connexion</Button>

                    <p onClick={() => connection()}>{hasAnAccount ? "Pas encore membre ? Créer un compte" : "Déjà membre ? cliquer ici"}</p>


                </form>
            </div>
        </StyledAuthentification>
    );
}
