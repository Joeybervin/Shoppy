/* HOOKS */
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
/* UTILS */
import { fetchData, capitalizeFirstLetter } from '../../../utils/index';
/* SLICES */
import { addAnOrder }from '../../../store/slices/userSlice';
import { clearCart } from '../../../store/slices/cartSlice';
/* COMPONENTS */
import { BigButton as Button, TextInput as Input, TextLabel as Label, RadioInput as Radio, RadioLabel} from '../../../components/index';
/* ICONS */
import { BiEdit, BiX, BiBeenHere} from "react-icons/bi";
/* STYLE */
import { StyledPayment } from './payment.style';

export default function Payment(props) {

/*======= HOOKS =======*/
const navigate = useNavigate();
const dispatch = useDispatch();
const cart = useSelector(state => state.cart);
const user = useSelector(state => state.user);

/*======= VARIABLES =======*/
const deliveryMethodsList = [
    {
        label : "Livraison éco-responsable à domicile",
        description : `${props.cart.total > 49 ? "0.00€" : "4.99€"} 3-5 jours ouvrés`,
    },
    {
        label : "À récupérer en magasin",
        description : `${props.cart.total > 49 ? "0.00€" : "4.99€"} 3-5 jours ouvrés`,
    },
    {
        label : "Point relais",
        description : `${props.cart.total > 49 ? "0.00€" : "4.99€"} 3-5 jours ouvrés`,
    },
];
const paymentMethodsList = [
    {
        label : "Payer en 3 fois sans frais", 
        methodImg : ["/icons/klarna.svg"],
    },
    {
        label : "Carte", 
        methodImg : ["/icons/mastercard.svg", "/icons/visa.svg", "/icons/amex.svg", "/icons/maestro.svg"],
    },
    {
        label : "Paypal", 
        methodImg : ["/icons/paypal.svg"],
    }
];
const order = {
    carlist : cart,
    total : props.cart.total,
    deliveryFee : props.cart.deliveryFee,
    coupon : props.cart.coupon,
};
const formFields = {
    informations : {
        open: false,
        fields : {
            firstName : user.firstName,
            lastName: user.lastName,
            email: user.email,
        }
    },
    billingAddress : {
        open: false,
        fields : {
            address : user.address,
            city : user.city,
        }
    },
    delivery : {
        open: false,
        fields : {
            choice : 'Livraison éco-responsable à domicile',
            description : `${props.cart.total > 49 ? "0.00€" : "4.99€"} 3-5 jours ouvrés`,
        }
    },
    payment : {
        open: false,
        fields : {
            choice : 'Carte',
        }
    }
};

/*======= STATE =======*/
const [orderInformations, setOrderInformations] = useState({...formFields});
const [errorMessage, setErrorMessage] = useState("");
/*======= USEEFFECT =======*/
useEffect(() => {
   if (cart.length === 0) {
        navigate('/commande/panier')
   }
}, [cart, navigate]);

/*======= FUNCTIONS =======*/
const openFormUpdate = (section) => {
    setOrderInformations({
        ...orderInformations,
        [section]: {
            ...orderInformations[section],
            open: !orderInformations[section].open
        }
    })

}
const handleInputChange = (section, subSection, e) => {
    setErrorMessage("")
    if (section === "delivery") {
        setOrderInformations({
            ...orderInformations,
            [section]: {
                ...orderInformations[section],
                fields: {
                    [subSection] : e.target.value,
                    description: getDescriptionByLabel(e.target.value)
                }
            }
        })

    }
    else {
        setOrderInformations({
            ...orderInformations,
            [section]: {
                ...orderInformations[section],
                fields: {
                    ...orderInformations[section].fields,
                    [subSection] : e.target.value
                }
            }
        })

    }

};
const handleSaveOrderInfos = (activeTab) => {
    const updatedFields = { ...formFields };

    Object.values(orderInformations[activeTab].fields).forEach((fieldName) => {
    updatedFields[activeTab].fields[fieldName] = orderInformations[activeTab].fields[fieldName];
    
    });

    setOrderInformations((prevState) => ({
        ...prevState,
        ...updatedFields,
    }));

    openFormUpdate(activeTab)

};
function getDescriptionByLabel(label) {
    const deliveryMethod = deliveryMethodsList.find(method => method.label === label);
    return deliveryMethod.description ;
}

function checkAllFields() {
    // ---> check if the keys isn't empties
    const informationsFieldsComplete = Object.keys(orderInformations.informations.fields).every(key => orderInformations.informations.fields[key] !== "");
    const billingAddressFieldsComplete = Object.keys(orderInformations.billingAddress.fields).every(key => orderInformations.billingAddress.fields[key] !== "");
    const deliveryFieldsComplete = Object.keys(orderInformations.delivery.fields).every(key => orderInformations.delivery.fields[key] !== "");
    const paymentFieldsComplete = Object.keys(orderInformations.payment.fields).every(key => orderInformations.payment.fields[key] !== "");
    // return false or true
    return informationsFieldsComplete && billingAddressFieldsComplete && deliveryFieldsComplete && paymentFieldsComplete;
}

const handleOrderValidation = async () => {
    const fullOrderInformation = {
        customerInformations : {
            firstName : orderInformations.informations.fields.firstName,
            lastName : orderInformations.informations.fields.lastName,
            email : orderInformations.informations.fields.email,
        },
        cart : cart,
        billingAddress : {
            address : orderInformations.billingAddress.fields.address,
            city : orderInformations.billingAddress.fields.city,
            country : "France"
        },
        payment :  {
            total : order.total.toFixed(2),
            method : orderInformations.payment.fields.choice,
        },
        coupon : order.coupon,
        delivery :  {
            deliveryFee : order.deliveryFee,
            method : orderInformations.delivery.fields.choice,
            details: `${orderInformations.delivery.fields.description === "" ? getDescriptionByLabel(orderInformations.delivery.fields.choice) : orderInformations.delivery.fields.description}`
        }
    }

    const checkEmptyFields = checkAllFields()
    
    if (checkEmptyFields) {
        const response = await fetchData('/user/addAnOrder', {order : fullOrderInformation, email : user.email},'PUT')

        if (response.status === "success" && cart.length !== 0) {
            dispatch(addAnOrder(response.order))
            dispatch(clearCart())
            navigate('/commande/confirmation-de-commande')
        } 
        else {
            navigate('/commande/panier')
        }

    }
    else {
        setErrorMessage("Tous les champs sont obligatoires")
    }


    
  

    
    
};



    return (
        <StyledPayment>
            <p>Confirmer la commande</p>

            <div className="main" >

                <div className='infos'>

                    {/* customer informations */}
                    <section>
                        <header>
                            <p>Mes informations</p>
                            <BiEdit className={!orderInformations.informations.open ? null : "noVisible"} onClick={() => {openFormUpdate("informations")} } />
                        </header>

                        {/* closed view */}
                        <div className={!orderInformations.informations.open ? null : "noVisible"}>
                            <p>{capitalizeFirstLetter(orderInformations.informations.fields.firstName)} {capitalizeFirstLetter(orderInformations.informations.fields.lastName)}</p>
                            <p>{orderInformations.informations.fields.email}</p>
                        </div>

                        {/* open view */}
                        <div className={orderInformations.informations.open ? null : "noVisible"}>
                            <form method="post">
                                {user.token !== "" ?
                                <p><span>E-mail :</span> {user.email}</p>
                                :
                                <>
                                <Label htmlFor="email">E-mail :</Label>
                                <Input
                                    placeholder="E-mail"
                                    name="email"
                                    id="email"
                                    type="email"
                                    value={orderInformations.informations.fields.email}
                                    onChange={(e) => {handleInputChange("informations", "email", e)}}/>
                                    
                                </>  
                                }
                                
                                {/* firstName */}
                                <Label htmlFor="firstName">Prénom<span>*</span></Label>
                                <Input
                                    placeholder="Prénom"
                                    id="firstName"
                                    name="firstName"
                                    value={orderInformations.informations.fields.firstName}
                                    onChange={(e) => {handleInputChange("informations", "firstName", e)}}/>

                                {/* lastName */}
                                <Label htmlFor="lastName">Nom<span>*</span></Label>
                                <Input
                                    placeholder="Nom"
                                    name="lastName"
                                    id="lastName"
                                    value={orderInformations.informations.fields.lastName}
                                    onChange={(e) => {handleInputChange("informations", "lastName", e)}}/>
                            </form>
                            <footer>
                                <Button onClick={() => handleSaveOrderInfos("informations")}>Enregistrer</Button>
                                <div onClick={() => {openFormUpdate("informations")} }>
                                    <BiX />
                                    <p>Annuler</p>
                                </div>
                            </footer>
                        </div>
                        
                    </section>

                    {/* billing address */}
                    <section>
                        <header>
                            <p>Adresse de facturation</p>
                            <BiEdit className={!orderInformations.billingAddress.open ? null : "noVisible"} onClick={() => {openFormUpdate("billingAddress")} } />
                        </header>

                        {/* closed view */}
                        <div className={!orderInformations.billingAddress.open ? null : "noVisible"}>
                            <p>{capitalizeFirstLetter(orderInformations.informations.fields.firstName)} {capitalizeFirstLetter(orderInformations.informations.fields.lastName)}</p>
                            <p>{orderInformations.billingAddress.fields.address}</p>
                            <p>{orderInformations.billingAddress.fields.city}</p>
                            <p>France</p>
                        </div>

                        {/* open view */}
                        <div className={orderInformations.billingAddress.open ? null : "noVisible"}>
                            <form method="post">
                                 {/* address */}
                                <Label htmlFor="address">Addresse<span>*</span></Label>
                                <Input
                                    max="35"
                                    placeholder="Adresse"
                                    id="address"
                                    name="address"
                                    value={orderInformations.billingAddress.fields.address}
                                    onChange={(e) => {handleInputChange("billingAddress", "address", e)}}/>

                                     {/* city */}
                                <Label htmlFor="city">Ville<span>*</span></Label>
                                <Input
                                    max="35"
                                    placeholder="Ville"
                                    id="city"
                                    name="city"
                                    value={orderInformations.billingAddress.fields.city}
                                    onChange={(e) => {handleInputChange("billingAddress", "city", e)}}/>

                            </form>
                            <footer>
                                <Button onClick={() => handleSaveOrderInfos("billingAddress")}>Enregistrer</Button>
                                <div onClick={() => {openFormUpdate("billingAddress")} }>
                                    <BiX />
                                    <p>Annuler</p>
                                </div>
                            </footer>
                        </div>
                    </section>

                    {/* delivery */}
                    <section>
                        <header>
                            <p>Livraison</p>
                            <BiEdit className={!orderInformations.delivery.open ? null : "noVisible"} onClick={() => {openFormUpdate("delivery")} } />
                        </header>

                        {/* closed view */}
                        <div className={!orderInformations.delivery.open ? null : "noVisible"}>
                            <p>{orderInformations.delivery.fields.choice}</p>
                            <p>{getDescriptionByLabel(orderInformations.delivery.fields.choice)}</p>
                        </div>

                        {/* open view */}
                        <div className={orderInformations.delivery.open ? null : "noVisible"}>
                            <form method="post">
                                {deliveryMethodsList.map((method, index) => {
                                        return (
                                            <div key={index}>
                                                <Radio
                                                    checked={orderInformations.delivery.fields.choice === method.label}
                                                    onChange={(e) => handleInputChange("delivery", "choice", e) }
                                                    className="deleveryMethodInput"
                                                    value={method.label}
                                                    name="deleveryMethod"
                                                    id={"dm"+index}
                                                />
                                                <RadioLabel key={"dm"+index} htmlFor={"dm"+index} className="deleveryMethodLabel">
                                                    <BiBeenHere size='2.3em' />
                                                    <div>
                                                        <p>{method.label}</p>
                                                        <p>{method.description}</p>
                                                    </div>
                                                </RadioLabel>
                                            </div>
                                        );
                                    })
                                }
                            </form>
                            <footer>
                                <Button onClick={() => handleSaveOrderInfos("delivery")}>Enregistrer</Button>
                                <div onClick={() => {openFormUpdate("delivery")} } >
                                    <BiX />
                                    <p>Annuler</p>
                                </div>
                            </footer>
                        </div>
                    </section>

                    {/* payment */}
                    <section>
                        <header>
                            <p>Paiement</p>
                            <BiEdit className={!orderInformations.payment.open ? null : "noVisible"} onClick={() => {openFormUpdate("payment")} } />
                        </header>

                        {/* closed view */}
                        <div className={!orderInformations.payment.open ? null : "noVisible"}>
                            <p>{orderInformations.payment.fields.choice}</p>
                        </div>

                        {/* open view */}
                        <div className={orderInformations.payment.open ? null : "noVisible"}>
                            <form method="post">
                                {paymentMethodsList.map((method, index) => {
                                        return (
                                            <div key={index}>
                                                <Radio
                                                    checked={orderInformations.payment.fields.choice === method.label}
                                                    onChange={(e) => handleInputChange("payment", "choice", e) }
                                                    className="paymentMethodInput"
                                                    value={method.label}
                                                    name="paymentMethod"
                                                    id={"pm"+index}
                                                />
                                                <RadioLabel key={"pm"+index} htmlFor={"pm"+index} className="paymentMethodLabel">
                                                    <div>
                                                        <p>{method.label}</p>
                                                        <div>
                                                            {method.methodImg.map((el, index) => {
                                                                return (
                                                                    <img key={"pmimg"+index} src={el} alt="carte" />
                                                                )
                                                            })}
                                                        </div>
                                                    </div>
                                                </RadioLabel>
                                            </div>
                                        );
                                    })
                                }
                            </form>
                            <footer>
                                <Button onClick={() => handleSaveOrderInfos("payment")}>Enregistrer</Button>
                                <div onClick={() => {openFormUpdate("payment")} } >
                                    <BiX />
                                    <p>Annuler</p>
                                </div>
                            </footer>
                        </div>
                        
                    </section>
                </div>

                <div className='paymentValidation'>
                    {/* PART : CART TOTAL */}
                    <div>
                        <table className="carttable">
                            <tfoot>
                                <tr>
                                    <td>Total de la commande</td>
                                    <td>{props.cart.total.toFixed(2)} €</td>
                                </tr>
                            </tfoot>
                            <tbody>
                                <tr>
                                    <td>Valeur de la commande</td>
                                    <td>{props.cart.subTotal} €</td>
                                </tr>
                                <tr>
                                    <td>Livraison</td>
                                    <td>{props.cart.deliveryFee}{props.cart.deliveryFee === "GRATUIT*" ? null : " €"}</td>
                                </tr>
                                <tr>
                                    <td>{props.cart.coupon.name}</td>
                                    <td>{props.cart.coupon.discountAmount}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* PART : legal mentions */}
                    <div>
                        <p>Nous traiterons vos données personnelles conformément à la <span>Politique de confidentialité</span> se Shoppy.</p>
                        <p>En continuant, vous acceptez les <span>Conditions générales</span> de Shoppy</p>
                    </div>

                    {/* PART : validation buton */}
                    <p className='errorMessage'>{errorMessage}</p>
                    <Button onClick={handleOrderValidation}>Valider l'achat</Button>

                    {/* PART : customer service */}
                    <div>
                        <p>Service Clients</p>
                        <p>Besoin d'aide ? Veuillez contacter le <Link to="/nous-contactez"><span>Service client</span></Link></p>
                    </div>

                </div>

            </div>

        </StyledPayment>
    )
};
