import styled from "styled-components";

const StyledAuthentification = styled.div`

    width : 100vw;
    background:linear-gradient(46deg, rgba(238, 130, 238, 1) 0%, rgba(148, 0, 255, 1) 45%, rgba(0, 209, 255, 1) 100%);
    min-height : 90vh;
    display: flex;
    justify-content : center;
    align-items:center;
    padding : 45px 0%;

    > div {
        background:linear-gradient(46deg, rgba(238, 130, 238, 1) 0%, rgba(148, 0, 255, 1) 45%, rgba(0, 209, 255, 1) 100%);
        position: relative;
        width : fit-content;
        display: flex;
        padding : 15px;
        border-radius : 10px;
        width : 100%;
        height: 100%;
        
        max-width: 450px;
    }
    > div > p {
        position: absolute;
        width: fit-content;
        color : #ffffff;
        top : -15px;
        right : 8px;
        font-family : "MEDIO VINTAGE";
        font-size: clamp(1.5625rem, 1.4732rem + 0.4464vw, 1.875rem);
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke: 1px;
        letter-spacing: 2px;
    }

    // =============> PART : FORM
    form {
        min-width : 100%;
        padding : 15px ; 
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        border-radius : 10px;
        text-align : center;

        input:last-of-type {
            margin-top :15px;
            
        }
        div.password {
            position :relative;
            height: min-content; 
            margin : 15px 0 5px 0;
            >input {
                margin : 0;
            }

            .showPassword {
                height: fit-content;
                position: absolute;
                top: 0;
                bottom: 0;
                margin: auto 0;
                right : 15px;
            }
        }

        
        p {
            font-size : ${props => props.theme.fontSize.paragraphe.small};
            color: ${props => props.theme.colors.danger};
        }
        p:last-of-type {
            text-decoration : underline;
            cursor: pointer;
            width: fit-content;
            margin : 10px auto;
            color: #000000;
        }

        button {
            margin-top : 25px;
        }



    }

    .member {
        display : none;
    }

    /* ------------- @MEDIA ------------- */
    @media screen and (min-width: 768px){

        > div > p {
        top : 5px;
        left : -35px;
        writing-mode:tb-rl;
        -webkit-transform: rotate(180deg);   
        -moz-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        -o-transform: rotate(180deg);
        transform: rotate(180deg);
    }
        
    }


`

export default StyledAuthentification