import styled from "styled-components";

export const StyledCart = styled.div`


    max-width: 100vw;
    margin :40px auto;
    background-color : violet;
    


    > p {
        text-align: center;
    }

    > div {
        background-color: lightskyblue;
        max-width : 100%;
        display: flex;
        flex-wrap : wrap;
    }

    .cartList {
        max-height : 550px;
        overflow-y : scroll;
        -ms-overflow-style: none;  
        scrollbar-width: none; 
        max-width: 100%;
        flex-grow: 1;
        flex-basis: 60%;
    }
    .cartList::-webkit-scrollbar {
        display: none;
    }

    .checkout {
        background-color : #ffffff;
        flex-grow: 1;
        flex-basis: 40%;
        flex-shrink: 2;
    }



    @media screen and (min-width: 768px) {

        
        > div {
            
        }
        .cartList {
            
        }
        .checkout {
            
        }
    
    }

`;



