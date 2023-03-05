
import styled from "styled-components"

export const StyledContact = styled.div`

    text-align: center;
    min-width : 100vw;
    background-color: #ffffff;
    opacity: 0.8;
    background-image:  linear-gradient(#505050 0.8px, transparent 0.8px), linear-gradient(to right, #505050 0.8px, #ffffff 0.8px);
    background-size: 16px 16px;
    > div {
        max-width: 450px;
        margin : 40px auto;
    }

    div > p {
        padding : 10px;
        margin : 0 auto;
        font-size :${props => props.theme.fontSize.paragraphe.large};
        font-weight :${props => props.theme.fontWeight.bold};
        margin-bottom : 25px;
        background-color: #ffffff;
        width : fit-content;
        filter: drop-shadow(5px 5px 10px #858585);
    }
    > div > div {
        height: 100%;
        width : 100%;
        padding : 15px;
        border-radius : 10px;
        background:linear-gradient(46deg, rgba(238, 130, 238, 1) 0%, rgba(148, 0, 255, 1) 45%, rgba(0, 209, 255, 1) 100%);
        filter: drop-shadow(5px 5px 10px #858585);

    }

    div > form {
        background-color: #ffffff;
        border-radius : 10px;
        padding: 10px;
    }

    .select-field {
    margin : 0
    }
    .select-field select {
        border : 2px solid black;
        width: 100%;
    }

    form {
        background-color: #ffffff;
        padding-top: 35px;

        p:last-of-type {
            color : ${props => props.theme.colors.danger};
            font-size :${props => props.theme.fontSize.paragraphe.small};
            background-color: #FFC1C1;
            border-radius : 5px;
            margin-bottom : 20px;
            margin-top : 10px;
        }
    }

    button {
        margin-top: 25px;
        width: 100%;
        display: inline-flex;
        justify-content: center; 
        align-items: center;
        gap : 10px;
    }

    @media screen and (max-width: 425px){
        > div {
            max-width: 100%;
        }
    }


`;
