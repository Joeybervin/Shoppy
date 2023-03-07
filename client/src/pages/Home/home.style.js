
import styled from "styled-components";

export const StyledHome= styled.div`

/* ------------- ANIMATIONS ------------- */
@keyframes horizontalSlideLeft {
    0% {
        transform: translate3d(0, 0, 0);
    }
    100% {
        transform: translate3d(-50%, 0, 0);
    }
}
@keyframes horizontalSlideRight {
    0% {
        transform: translate3d(-50%, 0, 0);
    }
    100% {
        transform: translate3d(0, 0, 0);
    }
}
/* -------------------------------------  */


.home {
    position : relative;
    max-width: 100%;

    section {
        margin: 50px auto;
        text-align: center;
    }
}

// =============> SECTION : COLLABORATIONS 
.collaborationSection {

    div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 7px;
    }

    img {
        height : 40px;
        max-width: 90px;
        padding: 10px;
    }
    
}

// =============> SECTION : MEMBERSHIP
.membershipSection {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color : violet ;
    min-width: 100vw;
    min-height : 380px;
    padding: 8px;

    background: linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%);

    
    h2 {
        margin-bottom : 0;
        line-height: 1em;
    }

    div {
        display: flex;
        flex-direction : column;
        justify-content: center;
        align-items: center;
        min-height : 380px;
        width : 100%;
        background-color: #FFFFFF;
    }

    p {
        line-height: 1em;
        margin-bottom : 15px;
        font-size: clamp(0.6875rem, 0.6518rem + 0.1786vw, 0.8125rem);
    }

}

// =============> SECTION : CATEGORIES
.categoriesSection {

    max-width: 100vw;
    overflow: hidden;
    
    h2 {
        text-align: left;
        margin-left: 15px;
    }

    // -------> slider
    .slideContainer {

        position: relative;
        border-left : 1px solid white;
        border-right : 1px solid white;

        .slide {
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-wrap: nowrap;
            overflow-x: auto;

            &::before {
                content : '';
                position: absolute;
                right : -5px;
                width : 25px;
                height: 100%;
                z-index: 2;
                background: rgb(255,255,255);
                background:linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
            }
        
            &::-webkit-scrollbar {
                display: none;
            }

        }
    }
        
}

// =============> SECTION : CLEARPAY
.clearpaySection {
    min-width : 100vw;
    background-color : ${props => props.theme.colors.secondary};
    margin-bottom : 30px !important;

    img {
        margin-bottom : 5px;
    }
    > div {
        position: relative;
        min-height : 200px;
        margin: auto;
        display : flex;
        justify-content : center;
        align-items : center;
        flex-direction : column;

        p:first-of-type {
            font-weight: ${props => props.theme.fontWeight.bold};
        }
        p:last-of-type {
            position: absolute;
            bottom: 0;
            font-size : ${props => props.theme.fontSize.paragraphe.small};
        }
    }
}

// =============> SECTION : SHOPPY PREMIER
.shoppyPremierSection {
    min-width : 100vw;
    background-color : ${props => props.theme.colors.secondary};
    background-size: 100% 100%;
    background-position: 0px 0px;
    background-image: linear-gradient(90deg, #A100FFFF 0%, #71C4FFFF 100%);
    margin-top : 20px !important;

    > div {
        position: relative;
        min-height : 280px;
        margin: 0 25;
        display : flex;
        justify-content : center;
        align-items : center;
        flex-direction : column;
        
        p {
            color : #ffffff;
        }

        p:first-of-type {
            font-size: ${props => props.theme.fontSize.title.h1};
            font-weight: ${props => props.theme.fontWeight.extraBold};
            margin-bottom: 25px;

            .crown {
                transform: translate(-14px, -16px) rotate(29deg);
            }
        }
        p:nth-child(2) {
            font-weight: ${props => props.theme.fontWeight.bold};
        }
        p:last-of-type {
            position: absolute;
            bottom: 0;
            font-size : ${props => props.theme.fontSize.paragraphe.small};
        }
    }

}

// =============> SECTION : HORIZONTAL SCROLL TEXT
.shoppySection {
    min-width: 100vw;
    overflow-x: hidden;
    height : 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-bottom: 10px !important;

    > div {
        max-width : 100vw;
        height: 70%;

        > div {
        overflow: hidden;
        background-color: white;
        border: 1px solid black;
        &:last-of-type{
            background-color: ${props => props.theme.colors.darkBlue};
            transform: rotate(2deg);
            border: none;
            > div {
                animation: horizontalSlideRight 40s linear infinite;
            }
            p {
                color : white;
                font-weight :${props => props.theme.fontWeight.bold};
                &:hover{
                    color :${props => props.theme.colors.secondary};
                    cursor: default;
                }
            }
        }

    > div {
        white-space: nowrap;
        overflow: hidden;
        display: inline-block;
        animation: horizontalSlideLeft 25s linear infinite;

        p {
            display : inline-block;
            &:hover{
            color :${props => props.theme.colors.primary};
            cursor: default;
            }
        }
    }

    }

    }
    

}

// =============> SECTION : NEWSLETTER
.newsletterSection {
    width : 100%;
    background-color : #000000 ;
    background-image: repeating-linear-gradient(-45deg, #c998ea 0, #c998ea 10px, #ffff 10px, #ffff 20px);
    display : flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding : 0 15px;
    min-height: 280px;
    margin-top : 10px !important;

    p {
        color : #000000;
        width : fit-content;
    }
    div:first-of-type {

        margin : 0 auto ;
        p:first-child {
            text-transform: uppercase;
            font-size: clamp(1.5625rem, 1.4732rem + 0.4464vw, 1.875rem);
            font-weight: ${props => props.theme.fontWeight.extraBold};
            color : #fff;
            background-color: #000000;
            padding : 10px;
            line-height: 1.1em;
            letter-spacing : 2px;
        }
        p:last-child {
            margin : 5px auto 0 auto ;
            background-color: #ffffff;
            font-size : ${props => props.theme.fontSize.paragraphe.small};
            font-weight: ${props => props.theme.fontWeight.bold};
        }

    }

    form {
        
        margin-top : 25px;
        > div {
            display: flex;
            justify-content : center;
            margin-bottom : 30px;
            
        }

        input {
            border-radius: 5px 0 0 5px;
            border : 1px solid black;
            padding-left : 10px;
        }

        button {
            padding: 10px;
            background-color: #ffffff;
            border : 1px solid black;
            border-radius : 0 5px 5px 0;
            &:hover {
                cursor : pointer;
            }
        }

        > p {
            background-color: #ffffff;
            font-weight: ${props => props.theme.fontWeight.bold};
            padding : 10px 15px;
        }
    }
}

// =============> SECTION : SERVICES
.servicesSection {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

/* ------------- @MEDIA ------------- */

@media screen and (min-width: 768px) {

    .home section {
    max-width : 85vw;
    }

    // =============> SECTION : COLLABORATIONS
    .collaborationSection img {
        max-width: 100px;
    }

    .categoriesSection {
        // -------> slider
        .slideContainer {
    
            &::before {
                content : '';
                position: absolute;
                left : -2px;
                width : 65px;
                height: 100%;
                z-index: 2;
                background: rgb(255,255,255);
                background:linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
            }

            .slide {

                &::before {
                    content : '';
                    position: absolute;
                    right : -2px;
                    width : 25px;
                    height: 100%;
                    z-index: 2;
                    background: rgb(255,255,255);
                    background:linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
                }
            }
        }
    }

    // =============> SECTION : SERVICES 
    .slider-container {
        max-width: 100vw;
        position: relative;
        right: 0;
    }

}
`
