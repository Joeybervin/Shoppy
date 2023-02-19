import styled from "styled-components";

const ProductStyle = styled.div`

    display: flex;
    flex-wrap: wrap;
    margin : auto 0;
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
        margin : 15px 0;
    }

/* part : REVIEW */
    .review {
        display: flex;
        align-items: center;
        margin : 20px 0;
    }
    .review .stars {
        margin-right : 15px;
    }

/* part : DETAILS */
    .details .radioInputGroup {
        max-width : 500px;
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
    .details .radioInputGroup + div {
        max-width : 500px;
        margin : 15px 0;
        min-height : 100px;
        max-height : 350px;
        overflow-y : scroll;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
    .details .radioInputGroup + div::-webkit-scrollbar {
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
    .sizeButton:focus, .sizeButton:active   {
        background-color: ${(props) => props.theme.colors.secondary};
    }

/* part : COLOR */
    .color {
        margin : 15px
    }
    .color > div {
        margin-left : 5px;
        max-width : 25px;
        height: 25px;
        padding : 4px;
        border-radius : 5px;
    }
    .color > div .productColor {
        max-width : 100%;
        height: 100%;
        border-radius : 2px;
        
    }

/* part : CART */
    .cart {
        display : flex;
        justify-content: space-between;
        align-items: center;
    }
    .cart > p {
        font-weight: ${(props) => props.theme.fontWeight.bold};
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