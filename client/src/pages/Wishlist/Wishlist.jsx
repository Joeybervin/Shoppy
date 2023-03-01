/* data */
import data from '../../data/products';
/* hooks */
import React, {useEffect, useState} from 'react'
/* librairies */
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
/* components */
import {BigCard as Card } from '../../components/WishlistCards'
import { BigButton as Button } from "../../components/ui/Button";
/* style */
import { StyledWishlist } from "./wishlist.style";


function Wishlist() {

  /*======= HOOKS =======*/
  const user = useSelector( state => state.user)

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
          <div>
            {userWishlist.map((product, index) => {
              return (
                <div key={index}>
                  < Card 
                  imgSrc={product.productImage[0]}
                  imgAlt={product.productName}
                  productName={product.productName}
                  productPrice={product.price}
                                    />
                </div>
              )
            })}
          </div>
          }
        </div>
    </StyledWishlist>
  );
}

export default Wishlist;
