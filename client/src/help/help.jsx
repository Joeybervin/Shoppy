import { useState, useEffect } from "react";
/* redux */
import { useDispatch } from 'react-redux'

/* import {StyledCarousel , responsiveMultiItems as responsive} from '../../components/Carousel'; */


export default function Help() {
return (
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


}









































