import { useEffect, useState } from 'react';

import { useDispatch, useSelector} from 'react-redux';
import { removeFromCart, clearCart, updateCart } from '../../store/slices/cartSlice' ;
import { RxCrossCircled, RxValueNone } from "react-icons/rx";




export default function Cart() {

    const cartList = useSelector(state => state.cart)
    const dispatch = useDispatch();

    const  [total, setTotal] = useState(0)

    useEffect(() => {

        const cartTotal = () => {
            let cartTotal = 0 ;
            for (let i = 0 ; i < cartList.length ; i++) {
                cartTotal += (cartList[i].price * cartList[i].quantity)
            }
            setTotal(cartTotal)
        }
        cartTotal()
    

    } ,[cartList]);

    const removeProductFromCart = (index) => {
        dispatch(removeFromCart(index))
    }

    const updateCartProduct = (index, event, productQuantity) => {
        dispatch(updateCart({index : index , event : event, productQuantity : productQuantity}))
    }

    const cartClear = () => {
        dispatch(clearCart())
    }


    return (
        <div >
            <h1>Cart page <RxValueNone  onClick={()=> cartClear()} /></h1>
            <h2 style={{textAlign : "right"}}>TOTAL : {total} €</h2>
            {cartList.map((product, index) => {
                return(
                    <div key={index} style={{margin : "15px", border : "1px solid black", padding : "10px" , minWidth : "550px"}}>
                        <div>
                            <p>° produit : {product.productName} <RxCrossCircled size="1.5rem" onClick={()=>removeProductFromCart(index)} color="red"/></p>
                            <p>Taille : {product.productSize} | qt : {product.quantity} | prix : {product.price} €</p>
                        </div>

                        <div style={{display : "flex"}}>
                            <button onClick={()=>updateCartProduct(index, "minus", product.quantity)} type="button"> - </button>
                        <input style={{WebkitAppearance: "none" ,margin: "0", textAlign : "center"}} type="number"  name="quantity" min="0" readOnly value={product.quantity}/>
                            <button onClick={()=>updateCartProduct(index, "plus", product.quantity)} type="button"> + </button>
                        </div>
                        
                    </div>
                )
            })}

            
        </div>
    );
}
