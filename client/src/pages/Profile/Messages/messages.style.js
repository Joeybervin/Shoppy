import styled from "styled-components";


export const StyledMessages = styled.div`

    background-color: #ffffff;
    border-radius : 8px;
    padding : 10px;
    margin-top : 30px;
   
    filter: drop-shadow(3px 3px 7px #858585);
   

    > div:first-child {
        display : flex;
        align-items: center;
        padding : 3px 8px;
        border : 1px solid black;
        border-radius: 5px;
        margin-bottom : 15px;
        width : fit-content;
        font-size :${props => props.theme.fontSize.paragraphe.small};

        &:hover {
            background-color: #000000;
            color: #ffffff;
            cursor: pointer;
            p {
                color: #ffffff;
            }
            
        }
    }
    > div:nth-child(2) {
        display: flex;
        justify-content : center;
        align-items: center;
        font-size :${props => props.theme.fontSize.paragraphe.large};
        font-weight :${props => props.theme.fontWeight.bold};
        margin-bottom : 25px;
    }
    > div:nth-child(3) {
        max-height : 450px;
        overflow-y: scroll;
        -ms-overflow-style: none;  
        scrollbar-width: none; 
        > p {
            text-align : center;
        }
    }
    > div:nth-child(3)::-webkit-scrollbar {
        display: none;
    }

    @media screen and (min-width: 768px) {
        border : 5px solid #7C44FF;
        min-width : 320px ;
        max-width: 600px;
        margin : 0 10px 0 0;
        
    }



`;