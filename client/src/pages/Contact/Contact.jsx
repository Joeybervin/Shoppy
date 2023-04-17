import { useState } from 'react';
import {useSelector, useDispatch } from "react-redux";
/* slices */
import {saveMessage} from '../../store/slices/userSlice'
/* utils */
import { fetchData , handleInputChange} from '../../utils/index';
/* components */
import { TextInput as Input , TextAreaInput as TextArea,  TextLabel as Label, Select, BigButton as Button } from '../../components/index'
/* icons */
import { AiOutlineSend } from "react-icons/ai";
/* style */
import {StyledContact} from './contact.style.js'

export default function Contact() {

    /*======= HOOKES =======*/
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    /*======= VARIABLES =======*/
    const messageSubjects = ["Une commande", "Livraison & retours", "Nos produits", "Où est ma commande ?", "Autre"]
    const messageInitielValues = {
        firstName : `${user.token === "" ? "" : user.firstName}`,
        lastName : `${user.token === "" ? "" : user.lastName}`,
        email: `${user.token === "" ? "" : user.email}`,
        has_an_account : `${user.token === "" ? false : true}`,
        order_id : "",
        subject : "",
        title: "",
        message: "",
    }
    const messageFields = [
        {
            label : "Prénom",
            name : "firstName"
        }, 
        {
            label : "Nom",
            name : "lastName"
        }, 
        {
            label : "E-mail",
            name : "email"
        }, 
        {
            label : "Sujet",
            name : "subject"
        }, 
        {
            label : "Titre",
            name : "title"
        }, 
        {
            label : "Numéro de commande",
            name : "order_id"
        }, 
        {
            label : "Message",
            name : "message"
        }
    ]
    
    /*======= STATES =======*/
    const [operationSuccess , setOperationSuccess] = useState(false)
    const [message, setMessage] = useState({...messageInitielValues})
    const [messageError, setMessageError] = useState("")

    /*======= FUNCTIONS =======*/
    // --------> Verify some input required values
    const SendUserMessage = async (e) => {
        e.preventDefault()
        if (message.email === "" || message.message === "") {
            setMessageError("L'e-mail et le message sont obligatoires !")
        }
        else {
            setMessageError("")
            const response = await fetchData('/contact/sendMessage', message, 'POST' )

            if (response.status === "success") {
                setMessage({...messageInitielValues}) // reset the fields form
                setOperationSuccess(!operationSuccess) // show the success message

                if (user.token !== "") {

                    dispatch(saveMessage(response.message))
                }
            }
            else {
                setMessageError("Nous avons rencontré une erreure lors de l'envoie de votre message.")
            }
        }
        
    }


    return (
        <StyledContact>
            <div>
            <p>Contactez nous :</p>
            <div>
                
                < form method="POST" onSubmit={SendUserMessage}>

                    {messageError === "" ? null : <p >{messageError}</p>}
                    

                    {messageFields.map((field, index) => {
                        if (field.name === "subject") {
                            return (
                                <div key={index }>
                                <Label htmlFor={field.name} >{field.label} *</Label>
                                <Select
                                id={field.name}
                                className="select-field"
                                empty
                                firstOption="-- Choisissez le sujet de votre message --"
                                value={message[field.name]}
                                onChange={(e) => handleInputChange(e, false , [], setMessage, setMessageError)}
                                name={"subject"}
                                label={""}
                                optionsList={messageSubjects}
                            />
                                </div>
                            )
                        }
                        if (field.name === "message") {
                            return (
                                <div key={index }>
                                <Label htmlFor={field.name} >{field.label} *</Label>
                                <TextArea
                                id={field.name}
                                placeholder={field.label}
                                name={field.name}
                                value={message[field.name]}
                                onChange={(e) => handleInputChange(e, false , [], setMessage, setMessageError)}
                                />
                                </div>
                            )
                        }
                        return (
                            <div key={index }>
                            <Label htmlFor={field.name} >{field.label} {field.name !== "order_id" ? " *" : null}</Label>
                            <Input
                            id={field.name}
                            disabled={messageInitielValues[field.name] }
                            placeholder={field.label}
                            name={field.name}
                            type="text"
                            value={message[field.name]}
                            onChange={(e) => handleInputChange(e, true , ["firstName", "lastName", "email"], setMessage, setMessageError)}
                            />
                            </div>
                        )
                    })}
                    
                    <Button primary type="submit">Envoyer <AiOutlineSend /></Button>

                </form>

            </div>

            </div>
        </StyledContact>
    );
}