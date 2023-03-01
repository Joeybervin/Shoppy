import styled from "styled-components";
/* icons */
import { BsTrash, BsCartPlus } from "react-icons/bs";

const StyledBigCard = styled.div`

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
                p:last-of-type {
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

const BigCard = ({ imgSrc, imgAlt, productName, productPrice, ...props }) => {
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

        </StyledBigCard>
    )
}

const StyledSmallCard = styled.div`

`

const SmallCard = ({ imgSrc, imgAlt, productName, productPrice, ...props }) => {
    return(
        <StyledSmallCard>
            
        </StyledSmallCard>
    )
}

export { BigCard, SmallCard }