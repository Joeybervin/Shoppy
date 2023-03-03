/* hooks */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Outlet } from 'react-router-dom'
/* slice */
import { removeProducFromWishlist, addProductToWishlist } from '../../store/slices/userSlice';
import { removeFromCart, clearCart, updateCart } from '../../store/slices/cartSlice' ;
/* utils */
import fetchData from '../../utils/fetchData'
/* components */
import { CartCard } from '../../components/CartCard';
/* style */
import { StyledCart } from './cart.style';

export default function Cart() {

 
    const cartList = useSelector(state => state.cart)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch();

    const  [total, setTotal] = useState(0)


    useEffect(() => {
        console.log(cartList)
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

    const productSubTotal = (productPrice, productQuantity) => {
        return productPrice * productQuantity
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

  

    return (
        <StyledCart >
            <p>Mon panier </p>
            <div>
                {/* LEFT PART : cart list product */}
                <div className='cartList'>
                    <div>
                        {cartList.map((product, index) => {
                            return(
                                <>
                                <CartCard 
                                key={"product"+index}
                                imgSrc={product.productImage}
                                imgAlt={product.productName}
                                productName={product.productName}
                                productPrice={product.price}
                                productRef={product.ref}
                                productSize={product.productSize}
                                productColor={product.color}
                                addProduct={() => {updateCartProduct(index, "minus", 1)}}
                                productSubTotal={productSubTotal(product.price, product.quantity)}
                                handleAddToWishlist={() => {interactionWishList(product.ref)}}
                                productQuantity={product.quantity}
                                removeProduct={() => {updateCartProduct(index, "minus", 1)}}
                                handleDeleteFromCart={() => {removeProductFromCart(index)}}

                                />
                                <hr />
                                </>
                            )
                        })}

                    </div>
                </div>

                {/* RIGHT PART : check out part */}
                <div className='checkout'>
                        <p>checkout</p>
                </div>
            </div>
            

            <Outlet />
        </StyledCart>
    );
}
