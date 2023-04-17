
/* libraries */
import styled from "styled-components";

// ===========> HOME PAGE
const HomePageProductCardStyle = styled.div`

    text-align : left;
    height : 100%;
    width: 100%;
    &:hover {
        cursor : pointer;
    }
    .productImage {
        flex-grow: 1;
        height: 60%;
        margin-bottom : 10px;
    }
    .productImage img {
        height: 100%;
        width : 100%;
        object-fit: fill;
        border-radius : 10px;
    }
    > div:nth-child(2){
        display: flex;
        flex-direction : column;
        justify-content : space-between;
        height: 35%;
    }
    > div p:first-of-type {
        font-size : ${(props) => props.theme.fontSize.paragraphe.small};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        
    }
    > div p:last-of-type {
        display: inline;
        width: fit-content;
        font-size : ${(props) => props.theme.fontSize.paragraphe.small};
        background-color : ${(props) => props.theme.colors.primaryAlpha};
        border-radius : 20px;
        padding : 5px 15px ;
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

/* ============================================================================================================= */

// ===========> SHOP PAGE
const ShopPageProductCardStyle = styled.div`

    border-radius: 15px;
    width: clamp(260px, 20vw, 305px);
    height: clamp(390px, 20vw, 410px);
    display: flex;
    flex-direction : column;
    margin : 15px 10px ;
    background-color: #FFFFFF;
    border : 0.5px solid black;
    &:hover {
        cursor : pointer;
        border : 2.5px solid blue;
    }

    .productImage {
        flex-grow: 1;
        img {
            min-height: 100%;
            height: 187px;;
            width : 100%;
            border-radius : 15px 15px 0 0;
            border-bottom : 0.5px solid black;
        }
    }

    .productDetails {
        display: flex;
        justify-content : space-between;
        align-items: center;
        padding : 15px 15px;
        p {
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

const ShopPageProductCard = ({ imgSrc, imgAlt, productName, productPrice, ...props }) => {
    
    return (
        <ShopPageProductCardStyle className={props.className} onClick={props.onClick} >

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

        </ShopPageProductCardStyle>
    )
}

export { HomePageProductCard, ShopPageProductCard }