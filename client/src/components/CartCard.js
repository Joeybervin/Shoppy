import styled from 'styled-components';
/* hooks */
import { useSelector} from 'react-redux';
/* slice */

/* icons */
import { BsTrash, BsHeart, BsHeartFill } from "react-icons/bs";

const StyledCartCard = styled.div`
    max-width: 100%;
    padding: 10px;

    > div {
        display : flex;
        justify-content: space-between;
    }

    // ------> PART LEFT : all the infos of the product
    .infos {
        display : flex;
        gap : 10px;

        // ---> product image
        .productImage {
            max-height: 140px;

            img {
                width: 100%;
                height: 100%;
                object-fit : fill;
                border-radius : 8px;
            }
        }

        // ---> product informations
        .productInfos {
            min-width: 100px;
            p {
                padding: 0;
                white-space: nowrap;
                overflow : hidden;
                text-overflow : ellipsis;
            }
            > div:nth-child(1) {
                background-color : goldenrod;
                p {
                    
                    font-weight : ${props => props.theme.fontWeight.bold};
                }
            }
            > div:nth-child(2) {
                display: flex;
                flex-wrap : wrap;
                gap : 10px;
                margin-bottom : 25px;
                background-color : lavenderblush;
                
                p {
                    margin-left : 5px;
                    font-size : ${props => props.theme.fontSize.paragraphe.small};
                    
                    
                    > span {
                        color : ${props => props.theme.colors.secondaryTextColor};
                    }
                }
                > div:first-of-type  {
                    max-width: 100%;
                    background-color: lightgoldenrodyellow;
                }
            }
            > div:nth-child(3) {
                display: flex;
                gap : 10px;
                .wishlist {
                    border: 0.5px solid red;
                    border-radius : 5px;
                    padding : 10px 10px 6px 10px;
                }
                .quantity {
                    display : flex;
                    border : 0.5px solid black;
                    max-width : 150px;
                    border-radius: 8px;
                    input {
                        text-align: center;
                        max-width : 70px;
                        
                    }
                    input, button {
                        border : 0;
                        background-color: #ffffff;
                        
                    }
                    button:hover {
                        background-color : #C2C2C2;
                    }
                    button:active {
                        background-color : ${props => props.theme.colors.primary};
                        color : #ffffff;
                        font-weight : ${props => props.theme.fontWeight.bold};
                    }
                    button:first-of-type {
                        border-radius : 8px 0 0 8px;
                    }
                    button:last-of-type {
                        border-radius : 0 8px 8px 0 ;
                    }
                }
            }
            
        }

    }

    // ------> PART RIGHT : delete the product from the cart
    .delete {
        margin-left : 10px;

    }

    @media screen and (min-width: 768px) {

       /*  .productInfos {
            > div:nth-child(2) {
                width : max-content;
            }
        
        }
         */
    }



`;

const CartCard = ({imgSrc, imgAlt, productName, productPrice, productRef, productSize, productColor, addProduct, productSubTotal, handleAddToWishlist, productQuantity, removeProduct, handleDeleteFromCart, ...props}) => {
    
    const user = useSelector(state => state.user);
    let inUserWishList = user.wishlist.includes(productRef);
    
    return (
        <StyledCartCard>
            <div>
                <div className='infos'>
                    <div className='productImage'>
                        <img src={imgSrc} alt={imgAlt} />
                    </div>
                    
                    <div className="productInfos">
                        {/* part 1 : top */}
                        <div>
                            <p>{productName}</p>
                            <p>{productPrice} €</p>
                        </div>
                        {/* part 2 : middle */}
                        <div>
                            <div>
                                <p><span>Référence : </span>{productRef}</p>
                                <p><span>Couleur : </span>{productColor}</p>
                            </div>
                            <div>
                                <p><span>Taille : </span>{productSize}</p>
                                <p><span>Total : </span>{productSubTotal} €</p>
                            </div>
                        </div>
                        {/* part 3 : bottom */}
                        <div>
                            {/* add to wishlist */}
                            <div onClick={handleAddToWishlist} className="wishlist">
                                {inUserWishList ? (
                                    <BsHeartFill
                                        size="1.1rem"
                                        style={{ color: "red" }}
                                    />
                                ) : (
                                    <BsHeart
                                        size="1.1rem"
                                        style={{ color: "red" }}
                                    />
                                )}
                            </div>
                            {/* update quantity */}
                            <div className='quantity'>
                                <button onClick={addProduct} type="button"> - </button>
                                <input style={{WebkitAppearance: "none" ,margin: "0", textAlign : "center"}} type="number"  name="quantity" min="0" readOnly value={productQuantity}/>
                                <button onClick={removeProduct} type="button"> + </button>
                            </div>
                        </div>
                    
                    </div>
                </div>
                {/* delete from cart */}
                <div className='delete' onClick={handleDeleteFromCart}>
                < BsTrash />
                </div>

            </div>
           
        </StyledCartCard>
    )
}

export {CartCard}