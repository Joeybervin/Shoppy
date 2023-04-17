/* hooks */
import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom'
/* slice */
import { removeProducFromWishlist, addProductToWishlist } from '../../../store/slices/userSlice';
import { removeFromCart, clearCart, updateCart } from '../../../store/slices/cartSlice' ;
/* utils */
import {fetchData, twoDecimal} from '../../../utils/index'
/* components */
import { CartCard } from '../../../components/CartCard';
import { BigButton as BButton, SmallButton as SButton } from '../../../components/ui/Button';
import { TextInput as Input } from '../../../components/ui/Input';
/* style */
import { StyledCart } from './cart.style';


export default function Cart(props) {

    /*======= HOOKS =======*/
    const cartList = useSelector(state => state.cart)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    /*======= VARIABLES =======*/
    const meanOfPaymentList = [
        { 
            name: "Klarna",
            path : "/icons/klarna.svg"
        },
        { 
            name: "MasterCard",
            path : "/icons/mastercard.svg"
        },
        { 
            name: "Visa",
            path : "/icons/visa.svg"
        },
        { 
            name: "PayPAL",
            path : "/icons/paypal.svg"
        },
        { 
            name: "American Express",
            path : "/icons/amex.svg"
        },
        { 
            name: "Maestro",
            path : "/icons/maestro.svg"
        },
    ]

    /*======= STATES =======*/

    const removeProductFromCart = (index) => {
        dispatch(removeFromCart(index))
    }
    
    const updateCartProduct = (index, event, productQuantity) => {
        props.setCode({valid : false, codeId : "", discountAmount : 0});
        props.setCoupon({});
        dispatch(updateCart({index : index , event : event, productQuantity : productQuantity}))
    }

    const cartClear = () => {
        dispatch(clearCart())
    }

    const productSubTotal = (productPrice, productQuantity) => {
        return twoDecimal(productPrice * productQuantity)
    }
    const interactionWishList = async (productRef) => {

        let inUserWishList = user.wishlist.includes(productRef);

        if (user.token !== "" && !inUserWishList) {
            const response = await  fetchData('/user/addToWishlist', {email : user.email, productref : productRef}, 'PUT')
            if (response.status === "success") {
                /* setLike(!like) */
                dispatch(addProductToWishlist(productRef))
            }

        }
        else if (user.token !== "" && inUserWishList) {
            const response = await  fetchData('/user/removeFromWishlist', {email : user.email, productref : productRef}, 'PUT')
            if (response.status === "success") {
                /* setLike(false) */
                dispatch(removeProducFromWishlist(productRef))
            }
        }

    }

    const checkout = () => {
        if (cartList.length !== 0) {
            navigate('/commande/paiement')
        }
    }





    return (
        <StyledCart >
            <p>Mon panier </p>
            <p onClick={cartClear}>vider le panier </p>
            <div>
                {/* LEFT PART : cart list product */}
                <div className='cartList'>
                    <div>
                        {cartList.map((product, index) => {
                            return(
                                <div key={"product"+index}>
                                <CartCard 
                                imgSrc={product.productImage}
                                imgAlt={product.productName}
                                productName={product.productName}
                                productPrice={product.price}
                                productRef={product.ref}
                                productSize={product.productSize}
                                productColor={product.color}
                                addProduct={() => {updateCartProduct(index, "plus", product.quantity)}}
                                removeProduct={() => {updateCartProduct(index, "minus", product.quantity)}}
                                productSubTotal={productSubTotal(product.price, product.quantity)}
                                handleAddToWishlist={() => {interactionWishList(product.ref)}}
                                productQuantity={product.quantity}
                                handleDeleteFromCart={() => {removeProductFromCart(index)}}
                                />
                                <hr />
                                </div>
                            )
                        })}

                    </div>
                </div>

                {/* RIGHT PART : check out part */}
                <div className='checkout'>

                        {/* PART : SALE CODE FORM */}
                        <div className='saleCode'>
                            <label htmlFor="code">Code de réduction</label>
                            <p>{props.cart.codeMessageErreur}</p>
                            <form method='POST' onSubmit={(e) => props.handleSaleCodeSubmit(e)}>
                                <Input disabled={props.code.valid ? true : false} type="text" id="code" name="code" value={props.cart.coupon.id} onChange={(e) => props.setCode({...props.code , codeId : e.target.value})} />
                                <SButton type="submit">{props.code.valid ? "Annuler": "Ajouter"}</SButton>
                            </form>
                        </div>

                        {/* PART : CART TOTAL */}
                        <div>
                            <table className="carttable">
                                <tfoot>
                                    <tr>
                                        <td>Total</td>
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

                        <BButton primary onClick={() => checkout()} >Effectuer le paiement</BButton>

                        <div>
                            <p>Nous acceptons</p>
                            <div className='meanOfPayment'>
                                {meanOfPaymentList.map((payment, index) => {
                                    return (
                                        <img key={"mop"+index} src={payment.path} alt={payment.name} />
                                    )
                                })}
                            </div>
                            <div>
                                <p>Les prix et les frais de livraison ne sont pas confirmés tant que tu n'es pas arrivé à la caisse.</p>
                                <p>Les retours gratuits dans les 30 jours suivant l'achat. En savoir plus sur notre
                                    <br />
                                    <span>Politique de retour et de remboursement</span>
                                </p>
                            </div>
                        </div>
                </div>
            </div>
            

        </StyledCart>
    );
}
