
/* libraries */
import styled from "styled-components";

/* components */
import { BigButton } from "./Button"

/* _________ HOMEPAGE */
const HomePageProductCardStyle = styled.div`

    text-align : left;
    height : 100%;
    width: clamp(200px, 20vw, 230px );
    &:hover {
        cursor : pointer;
    }
    .productImage {
        flex-grow: 1;
        height: 60%;
    }
    .productImage img {
        height: 100%;
        width : 100%;
        object-fit: fit;
        border-radius : 15px;
    }
    > div p:first-of-type {
        font-weight : ${(props) => props.theme.fontWeight.extraBold};
        
    }
    > div p:last-of-type {
        display: inline;
        font-size : ${(props) => props.theme.fontSize.paragraphe.small};
        background-color : ${(props) => props.theme.colors.primaryAlpha};
        border-radius : 20px;
        padding : 5px 10px ;
    }

`
const HomePageProductCard = ({ imgSrc, imgAlt, productName, productPrice, ...props }) => {
    return (
        <HomePageProductCardStyle onClick={props.onClick} >
            <div className="productImage">
                <img src={imgSrc} alt={imgAlt} />
            </div>
            <div>
                <p>{productName}</p>
                <p>{productPrice} €</p>
            </div>
        </HomePageProductCardStyle>
    )
}

/* --------------------------------------------------------------------------------------------------------- */

/* _________ SHOP PAGE */
const ShopPageProductCardStyle = styled.div`

    border-radius: 5%;
    width: clamp(135px, 25vw, 350px);
    display: flex;
    flex-direction : column;
    margin : 15px 12px;
    background-color: #FFFFFF;

    &:hover {
        cursor : pointer;
    }

    .productImage {
        flex-grow: 1;
        flex-basis: 60%;
    }
    .productImage img {
        height: 100%;
        width : 100%;
        object-fit: fit;
        border-radius : 5% 5% 0 0;
        border-bottom : 0.5px solid black;
    }

    div > div > img {
        max-width: 20px;
        max-height: 20px;
    }

    .productDetails > div  {
        display : flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        padding : 10px 10px;
        
    }

    .productDetails > p {
        font-size: ${(props) => props.theme.fontSize.paragraphe.small};
        font-weight: ${(props) => props.theme.fontWeight.bold};
        padding: 10px 10px 0 10px;
    }  

    .productDetails > div div {
        width : 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin : 5px 0;
    }

    @media screen and (min-width : 768px) {
        .productDetails > p {
            font-size: ${(props) => props.theme.fontSize.paragraphe.regular};
    
        }  

        .productDetails > div  {
        flex-wrap: nowrap;
    }

        .productDetails > div div {
        justify-content: center;
    }

        
    }



`

const ShopPageProductCard = ({ imgSrc, imgAlt, productName, productPrice, ...props }) => {
    return (
        <ShopPageProductCardStyle onClick={props.onClick} >

            {/* product image */}
            <div className="productImage">
                <img src={imgSrc} alt={imgAlt} />
            </div>

            {/* product details */}
            <div className="productDetails">
                <p>{productName}</p>
                <div>
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/522/522210.png" alt="euro" />
                        <p>{productPrice}</p>
                    </div>
                    <BigButton primary>Acheter</BigButton>
                </div>
            </div>

        </ShopPageProductCardStyle>
    )
}

export { HomePageProductCard, ShopPageProductCard }