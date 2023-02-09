import styled from "styled-components";


const HomePageProductCardStyle = styled.div`

    text-align : left;

    > img {
        border-radius : 15px;
        width: clamp(200px, 20vw, 230px );
        margin-left: 0;
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

const HomePageProductCard = ({imgSrc, imgAlt, productName, productPrice , ...props}) => {
    return (
        <HomePageProductCardStyle onClick={props.onClick} >
            <img src={imgSrc} alt ={imgAlt} />
            <div>
                <p>{productName}</p>
                <p>{productPrice} €</p>
            </div>
        </HomePageProductCardStyle>
    )
}



export {HomePageProductCard}