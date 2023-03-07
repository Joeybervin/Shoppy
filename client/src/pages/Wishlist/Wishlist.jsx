/* data */
import data from '../../data/products';
/* hooks */
import React, {useEffect, useState} from 'react'
/* librairies */
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
/* slice */
import { removeProducFromWishlist } from "../../store/slices/userSlice"
/* utils */
import {fetchData} from '../../utils/index';
/* components */
import {BigCard as Card } from '../../components/index'
/* style */
import { StyledWishlist } from "./wishlist.style";


function Wishlist() {

  /*======= HOOKS =======*/
  const user = useSelector( state => state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /*======= VARIABLES =======*/

  /*======= STATES =======*/
  const [userWishlist, setUserWishlist] = useState([])

  /*======= USEEFFECT =======*/
    // ----> charge the customer wishlist infos
    useEffect(() => { 
      let wishlistData = data.filter(product => user.wishlist.includes(product.ref))
      setUserWishlist(wishlistData)
    }, [user.wishlist])

  /*======= FUNCTIONS =======*/
  const addToCart = (refProduct, catProduct) => {
    navigate(`/shop/${catProduct}/ref/${refProduct}`)
  }

  const DeleteFromWishlist = async (refProduct) => {
    const response = await  fetchData('/user/removeFromWishlist', {email : user.email, productref : refProduct}, 'PUT')
            if (response.status === "success") {
                dispatch(removeProducFromWishlist(refProduct))
            }
            else {
              console.log("Une erreur")
            }
  }

  return (
    <StyledWishlist>
        <p>Vos favoris</p>
        <div>
        {userWishlist.length === 0 
        ? 
          <div className='emptyList'>
            <p>Vous n'avez encore rien mis dans votre wishlist</p>
          </div>
          
          :
          <>
            {userWishlist.map((product, index) => {
              return (
                <div key={index}>
                  < Card 
                  imgSrc={product.productImage[0]}
                  imgAlt={product.productName}
                  productName={product.productName}
                  productPrice={product.price}
                  handleAddToCart={() => addToCart(product.ref, product.category)}
                  handleRemoveFromWishlist={() => DeleteFromWishlist(product.ref)}
                  />
                </div>
              )
            })}
          </>
          }
        </div>
    </StyledWishlist>
  );
}

export default Wishlist;
