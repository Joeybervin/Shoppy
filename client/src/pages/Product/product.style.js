import styled from "styled-components";

const ProductStyle = styled.div`

    display: flex;
    flex-wrap: wrap;
    margin : 40px 0;
    justify-content: space-between;


    .productImages, .productDetails  {
        width: 95vw;
        margin: 0 auto;
    }
    .productDetails  {
        width: 90vw;
    }

/* part : CAROUSEL */
    .ThumbsGallery {
        max-width: 100%;
        height: auto;
        margin: 0 auto;
    }

/* part : BADGES & WISHLIST */
    .wishlist {
        display: flex;
        justify-content: space-between;
    }

/* part : PRODUCT NAME */
    .productName {
        font-size : ${(props) => props.theme.fontSize.title.h1};
        font-weight : ${(props) => props.theme.fontWeight.bold};
        line-height : 1em;
        margin : 15px 0;
    }

/* part : PRODUCT PRICE */
    .productPrice {
        text-align : right;
        margin : 10px ;
        font-size: clamp(1.375rem, 1.1964rem + 0.8929vw, 2rem);
        font-weight: ${(props) => props.theme.fontWeight.bold};
    }
    .productPrice span {
        
        color: ${(props) => props.theme.colors.secondary};
        font-weight: ${(props) => props.theme.fontWeight.bold};
    }

/* part : COLOR */
    .color {
        display : flex;
        align-items: center;
    }
    .color > div {
        margin-left : 5px;
        min-width : 25px;
        height: 25px;
        padding : 4px;
        border-radius : 5px;
    }
    .color > div .productColor {
        max-width : 100%;
        height: 100%;
        border-radius : 2px;
        
    }

/* part : REVIEW */
    .review {
        display: flex;
        align-items: center;
        margin : 20px 0;
    }
    .review .stars {
        display: flex;
        margin-right : 15px;
    }

/* part : DETAILS */
    .details .radioButtonGroup {
        
        display: flex;
    }
    .detailInput:checked + .detailLabel {
        background-color: ${(props) => props.theme.colors.primaryAlpha};
        border-bottom : solid 3px ${(props) => props.theme.colors.primary};
    }
    .details div > p {
        color : ${(props) => props.theme.colors.secondaryTextColor};
        font-size : ${(props) => props.theme.fontSize.paragraphe.small};
    }
    .details .radioButtonGroup + div {
        max-width : 500px;
        margin : 15px 0;
        height : 210px;
        overflow-y : scroll;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
    .details .radioButtonGroup + div::-webkit-scrollbar {
        display: none; /* Hide scrollbar for Chrome, Safari and Opera */
    }

/* part : ORDER DETAIL */

/* part : SIZE */
    .orderDetails .size p > span {
        color : ${(props) => props.theme.colors.secondaryTextColor};
        font-size : ${(props) => props.theme.fontSize.paragraphe.small}
    }
    .orderDetails .size {
        margin : 15px 0;
    }
    .size .radioButtonGroup {
        max-width : 430px;
        display:  flex;
        flex-wrap : wrap;
        box-sizing : border-box;
        gap : 5px;
        margin-bottom : 45px;
    }
    .sizeButton + .sizeLabel {
        background-color: ${(props) => props.theme.colors.primary};
        color : ${(props) => props.theme.colors.white};
        font-weight: ${(props) => props.theme.fontWeight.bold};
        border-radius: 12px;
    }
    .sizeButton:checked + .sizeLabel {
        background-color: ${(props) => props.theme.colors.primaryAlpha};
    }
    .sizeLabel {
        
    }




    .sizeButton:focus, .sizeButton:active   {
        background-color: ${(props) => props.theme.colors.secondary};
    }



/* part : CART */
    .cart {
        display : flex;
        justify-content : flex-end;
    }


    

    /* DEVICES : big devices (tablet, desktop, large monitors) */

    @media screen and (min-width: 768px) {

        .product {
            width : 100%
        }
        .productImages, .productDetails  {
            width: 50%;
        }

    /* part : BADGES & WISHLIST */

        .wishlist {
            margin-right: 0px;
        }

    /* part : DETAILS */
        .productDetails  {
            padding-left : 25px;
            max-width : 562px;
           
        }

    }

    @media screen and (min-width: 1024px) {

        /* part : DETAILS */
        .productDetails  {
            min-width : 435px;
        }

}


`

export default ProductStyle