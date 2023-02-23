import { useState } from 'react';
import {useSelector, useDispatch } from "react-redux";
/* slices */
import {saveMessage} from '../../store/slices/userSlice'
/* utils */
import handleInputChange from '../../utils/handleInputChange';
import fetchData from '../../utils/fetchData';
/* components */
import { TextInput as Input , TextAreaInput as TextArea,  TextLabel as Label } from '../../components/ui/Input'
import { Select } from '../../components/ui/Select'
import { BigButton as Button } from '../../components/ui/Button'

/* style */
import './contact.css'

export default function Contact() {

    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const messageSubjects = ["une commande", "livraison & retours", "nos produits", "Où est ma commande ?"]
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

    const [operationSuccess , setOperationSuccess] = useState(false)
    const [message, setMessage] = useState({...messageInitielValues})
    const [messageError, setMessageError] = useState("")

    const SendUserMessage = async (e) => {
        e.preventDefault()
        if (message.email === "" || message.message === "") {
            setMessageError("L'e-mail et me message sont obligatoires !")
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
        <div >
            <h1>Contact page</h1>
            {messageError}

            < form method="POST" onSubmit={SendUserMessage}>

            {messageFields.map((field, index) => {
                if (field.name === "subject") {
                    return (
                        <div key={index }>
                        <Label>{field.label}</Label>
                        <Select
                        className="select-field"
                        empty
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
                        <Label>{field.label}</Label>
                        <TextArea
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
                    <Label>{field.label}</Label>
                    <Input
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

            <Button primary type="submit">envoyer</Button>

            </form>


        </div>
    );
}