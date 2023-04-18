import styled from "styled-components";
/* icons */
import { BsTrash, BsCartPlus } from "react-icons/bs";

const StyledBigCard = styled.div`

    border-radius: 15px;
    width: clamp(235px, 15vw, 275px);
    height: clamp(390px, 20vw, 400px);
    display: flex;
    flex-direction : column;
    margin : 15px 5px ;
    background-color: #FFFFFF;
    border : 0.5px solid black;
    

    .productImage {
       flex-grow : 1;
        img {
            
            flex-grow: 1;
            min-height: 100%;
            height: 207px;;
            width : 100%;
            border-radius : 15px 15px 0 0;
        }
    }

    .productDetails {
        display: flex;
        justify-content : space-between;
        align-items: center;
        padding : 10px 5px;
        p:first-of-type  {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: ${(props) => props.theme.fontSize.paragraphe.small};
        }
        div  {
            display : flex;
            justify-content: space-between;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            img {
                max-width: 20px;
                max-height: 20px;
            }
        }
    }

    .ButtonsGroup{
        border-top : 1px solid black;
        display: flex;
        justify-content :space-evenly;
        p:hover {
            cursor : pointer;
        }
        p:first-of-type {
            border-right : 1.5px solid black;
        }
        p:last-of-type {
        
        }
    }
    
    @media screen and (min-width : 768px) {
        .productImage img {
            min-height: 100%;
        }
        .productDetails > div  {
            flex-wrap: nowrap;
        }
        .productDetails > div div {
            justify-content: center;
        }
    }

`
const BigCard = ({ imgSrc, imgAlt, productName, productPrice, handleAddToCart,handleRemoveFromWishlist }) => {
    return(
        <StyledBigCard>
              {/* product image */}
              <div className="productImage">
                <img src={imgSrc} alt={imgAlt} />
            </div>

            {/* product details */}
            <div className="productDetails">
                <p>{productName}</p>
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/512/522/522210.png" alt="euro" />
                    <p>{productPrice}</p>
                </div>
            </div>

            {/* add to cart or delete from wishlist */}
            <div className="ButtonsGroup">
                <p onClick={handleAddToCart}>Ajouter <BsCartPlus size="0.8em"/></p>
                <p onClick={handleRemoveFromWishlist}>Supprimer <BsTrash size="0.8em" /></p>
            </div>

        </StyledBigCard>
    )
}

/* ===================================================================================== */

const StyledSmallCard = styled.div`

    max-width : 100%;
    display: flex;
    justify-content : space-between;
    align-items: center;
    padding: 5px 4px;
    margin-bottom : 4px;
    border-radius : 5px;

    &:hover {
        background-color : ${props => props.theme.colors.primaryAlpha};
    }

    > div:first-of-type {
        display: flex;
        align-items: center;
        gap : 10px;
        width: 80%;
    }

    .productImage {
        border : 0.5px solid black;
        
        border-radius : 5px;
        width: 70px;
        height: 70px;
    }

    img {
        border-radius : 5px;
        width: 100%;
        height: 100%;
    }
    .productInfos {
        max-width: 66%;
    }

    P {
        font-size: ${props => props.theme.fontSize.paragraphe.small};
        padding : 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-right : 0;
        min-width : 100%;
        

        span {
            color: ${props => props.theme.colors.secondaryTextColor};
        }
    }

    .buttonGroup {
        display: flex;
        align-items : center;
        gap : 10px;
        height : fit-content;
        
        > div {
            background-color: #ffffff;
            padding : 5px;
            border-radius: 4px;
            border : 0.5px solid black;
            &:hover {
                cursor : pointer;
            }
        }
        >div:last-of-type {
            border : 0.5px solid red;
            background-color : #FFF1F1;
        }
    }

`

const SmallCard = ({ imgSrc, imgAlt,productRef, productName, productPrice, handleAddToCart, handleRemoveFromWishlist }) => {
    return(
        <StyledSmallCard>
            <div>
                {/* IMAGE */}
                <div className="productImage">
                    <img src={imgSrc} alt={imgAlt} />
                </div>
                {/* INFOS */}
                <div className="productInfos">
                    <p><span>produit : </span>{productName}</p>
                    <p><span>ref : </span>{productRef}</p>
                    <p><span>prix : </span>{productPrice} €</p>
                </div>
            </div>

            <div className="buttonGroup">
                <div onClick={handleAddToCart}><BsCartPlus size="0.7em"/></div>
                <div onClick={handleRemoveFromWishlist}><BsTrash color="red" size="0.7em"/></div>
            </div>
        </StyledSmallCard>
    )
}

export { BigCard, SmallCard }