import styled from "styled-components";

export const StyledCart = styled.div`

    max-width: 100vw;
    margin :40px auto;

    // ======> PART : HEADER
    > p:first-child {
        width : fit-content;
        padding : 12px;
        margin : 0 auto 85px auto;
        font-size :${props => props.theme.fontSize.paragraphe.large};
        font-weight :${props => props.theme.fontWeight.bold};
        background-color : ${props => props.theme.colors.primary};
        filter: drop-shadow(5px 5px 3px #858585);
    }
    > p:nth-child(2) {
        display : inline;
        text-align : left;
        color: ${props=> props.theme.colors.secondaryTextColor};
        font-size: ${props=> props.theme.fontSize.paragraphe.small};
        text-decoration: underline;
        margin-left : 5px;

        &:hover {
            cursor : pointer;
        }
    }

    // ======> PART : MAIN

    > div {
        max-width : 100%;
        display: flex;
        flex-wrap : wrap;
        gap: 35px;
    }

    // ----> PART : CART PRODUCTS LIST

    .cartList {
        border-top : 0.5px solid #3f414e;
        background-color: #FFFFFF;
        padding : 0 5px;
        max-height : 550px;
        overflow-y : scroll;
        -ms-overflow-style: none;  
        scrollbar-width: none; 
        flex-grow: 2;
        flex-basis: 55%;
    }
    .cartList::-webkit-scrollbar {
        display: none;
    }

    // ------> PART : CHECKOUT
    .checkout {
        background-color : #ffffff;
        flex-grow: 1;
        flex-basis: 39%;
        padding : 0 10px;
        display: flex;
        flex-direction: column;

        // ----> part : promotion
        .saleCode {
            margin-bottom : 25px;
            > p {
                font-size : ${props => props.theme.fontSize.paragraphe.small};
                color : ${props => props.theme.colors.danger};
            }
            label {
                    padding : 5px;
                    margin-top : 50px;
                }
            form {
                display: flex;
                input {
                    padding :10px;
                }
                button {
                    width : 40%;
                }
            }

        }

        // ----> part : total and delivery
        > div table.carttable {
            width: 100%;
            border-collapse: collapse;
            margin-bottom : 25px;

        }
        table.carttable td, table.carttable th {
            padding: 12px 2px;
        }
        td:nth-child(2n) {
            text-align: right;
            white-space: nowrap;
        }
        tr:nth-child(3) td {
            color : ${props => props.theme.colors.danger};
        }
        tfoot {
            font-weight: ${props => props.theme.fontWeight.bold};
            border-top: 2px solid #000000;
            background-color: ${props => props.theme.colors.primaryAlpha};
        }
        > button {
            width : 90%;
            margin : 0 auto 25px auto;
            padding: 15px;
        }


        // ----> part : means of payment
        .meanOfPayment {
            display: flex;
            flex-wrap : wrap;
            gap : 5px;
            margin-bottom : 10px;

            > img {
                max-width : 50px;
            }
        }
        > div:last-child {
            > div:last-child {
                p span {
                    text-decoration: underline;
                    font-weight :${props => props.theme.fontWeight.bold};
                }
            }
        }
        
    }



    @media screen and (min-width: 768px) {

        
        > div {
            
        }
        .cartList {
            max-height : 100vh;
            
        }
        .checkout {
            
        }
    
    }

`;



