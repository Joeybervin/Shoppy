import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux'
/* utils */
import fetchData from '../../../utils/fetchData';
import {capitalizeFirstLetter} from '../../../utils/capitalizeFirstLetter';
/* components */
import { BigButton as Button} from '../../../components/ui/Button';
import { TextInput as Input } from '../../../components/ui/Input';
/* icons */
import { BiEdit, BiX } from "react-icons/bi";

import { StyledPayment } from './payment.style';

export default function Payment(props) {

/*======= HOOKS =======*/
const navigate = useNavigate();
const dispatch = useDispatch();
const cart = useSelector(state => state.cart);
const user = useSelector(state => state.user);
const deliveryMethodsList = ["Livraison éco-responsable à domicile", "À récupérer en magasin", "Point relais"];
const paymentMethodsList = ["Payer en 3 fois sans frais", "Carte", "Paypal"];

/*======= VARIABLES =======*/
const order = {
    carlist : cart,
    total : props.cart.total,
    deliveryFee : props.cart.deliveryFee,
    coupon : props.cart.coupon,
    date : new Date()
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
    billingAdress : {
        open: false,
        fields : {
            address : user.address,
            city : user.city,
        }
    },
    delivery : {
        open: false,
        fields : {
            choice : '',
        }
    },
    payment : {
        open: false,
        fields : {
            choice : '',
        }
    }
};


/*======= STATE =======*/
const [orderInformations, setOrderInformations] = useState({...formFields})

/*======= USEEFFECT =======*/

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

};

const handleOrderValidation = async () => {
    const response = await fetchData('', order,'PUT')
    if (response === 'sucess') {
        dispatch(handleOrderValidation)
    }
    navigate('/commande/confirmation-de-commande')
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
                            <form /* onSubmit=""  */method="post">
                                {user.token !== "" ?
                                <p>{user.email}</p>
                                :
                                <Input
                                    placeholder="E-mail"
                                    name="email"
                                    type="email"
                                    value={orderInformations.informations.fields.email}
                                    onChange={(e) => {handleInputChange("informations", "email", e)}}/>}
                                {/* firstName */}
                                <Input
                                    placeholder="Prénom"
                                    name="firstName"
                                    value={orderInformations.informations.fields.firstName}
                                    onChange={(e) => {handleInputChange("informations", "firstName", e)}}/>
                                {/* lastName */}
                                <Input
                                    placeholder="Nom"
                                    name="lastName"
                                    value={orderInformations.informations.fields.lastName}
                                    onChange={(e) => {handleInputChange("informations", "lastName", e)}}/>
                            </form>
                            <footer>
                                <Button onClick={()=> console.log(orderInformations)}>Enregistrer</Button>
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
                            <BiEdit className={!orderInformations.billingAdress.open ? null : "noVisible"} onClick={() => {openFormUpdate("billingAdress")} } />
                        </header>

                        {/* closed view */}
                        <div className={!orderInformations.billingAdress.open ? null : "noVisible"}>
                            <p>{capitalizeFirstLetter(orderInformations.informations.fields.firstName)} {capitalizeFirstLetter(orderInformations.informations.fields.lastName)}</p>
                            <p>{orderInformations.billingAdress.fields.address}</p>
                            <p>{orderInformations.billingAdress.fields.city}</p>
                            <p>France</p>
                        </div>

                        {/* open view */}
                        <div className={orderInformations.billingAdress.open ? null : "noVisible"}>
                            <form /* onSubmit=""  */method="post"></form>
                            <footer>
                                <Button>Enregistrer</Button>
                                <div onClick={() => {openFormUpdate("billingAdress")} }>
                                    <BiX />
                                    <p>Annuler</p>
                                </div>
                            </footer>
                        </div>
                    </section>

                    {/* delivery */}
                    <section>
                        <header>
                            <p>livraison</p>
                            <BiEdit className={!orderInformations.delivery.open ? null : "noVisible"} onClick={() => {openFormUpdate("delivery")} } />
                        </header>

                        {/* closed view */}
                        <div className={!orderInformations.delivery.open ? null : "noVisible"}>
                            <p></p>
                        </div>

                        {/* open view */}
                        <div className={orderInformations.delivery.open ? null : "noVisible"}>
                            <form /* onSubmit=""  */method="post">
                                {deliveryMethodsList.map((method,index) => {
                                    return (
                                        <div key={"dml"+index}>
                                            {method}
                                        </div>
                                    )
                                })}
                            </form>
                            <footer>
                                <Button>Enregistrer</Button>
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
                            <p></p>
                        </div>

                        {/* open view */}
                        <div className={orderInformations.payment.open ? null : "noVisible"}>
                            <form /* onSubmit=""  */method="post">
                                {paymentMethodsList.map((method, index) => {
                                    return (
                                        <div key={"pml"+index}>
                                            <p>{method}</p>
                                        </div>
                                    )
                                })}
                            </form>
                            <footer>
                                <Button>Enregistrer</Button>
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
                                    <td>{props.cart.total} €</td>
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
