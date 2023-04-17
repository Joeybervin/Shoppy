import styled from "styled-components";

const StyledProfile = styled.div`

    width: 100vw;
    display : flex;
    flex-direction : column;
    padding: 35px 0;
    background-color: #ffffff;
    opacity: 0.8;
    background-image:  linear-gradient(#505050 0.8px, transparent 0.8px), linear-gradient(to right, #505050 0.8px, #ffffff 0.8px);
    background-size: 23px 23px;

    // =============> PART : LEFT <============= //
    // =============> SECTION : USERSECTION
    section {
        background-color: #ffffff;
        padding : 10px;
        filter: drop-shadow(3px 3px 7px #858585);
    }

    // =============> PART : RIGHT <============= //
    > div {
        section {
            margin-bottom :  30px ;

            > div:first-of-type {
                display: flex;
                justify-content : space-between;
                align-items: center;
                margin-bottom : 20px;
                padding-right : 10px;
                border-radius: 8px;
                .sectionTitle {
                    display :  flex;
                    align-items: center;
                    padding : 5px 10px;
                    font-weight:${props => props.theme.fontWeight.bold};
                }

                &:hover {
                    cursor: pointer;
                    color: #ffffff;
                    background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(37,145,251,0.98) 0.1%, rgba(0,7,128,1) 99.8% );
                    p {
                        color: #ffffff;
                    }
                }
            }
        }
    }
    .noProfile {
        display: none;
    }

    // =============> SECTION : USER
    section.userSection{

        width : 100%;
        margin-bottom :  30px ;

        img {
            width : clamp(198px, 20vw,450px);
            margin : 15px auto;
        }
        > p {
            font-size : ${props => props.theme.fontSize.paragraphe.large};
            font-weight : ${props => props.theme.fontWeight.bold};
            margin : 15px 0;
            > span {
                color:${props => props.theme.colors.primary};
            }
        }
        .address p span {
            color :${props => props.theme.colors.secondaryTextColor};
            font-size : ${props => props.theme.fontSize.paragraphe.small};
        }

        .address > div, .messages {
            padding : 5px;
            border : 2px solid black;
            border-radius: 5px;
            margin : 10px 0;

        }
        > div div, .messages {
            display : flex;
            align-items: center;
        }
        .messages {
            justify-content: space-between;
            &:hover {
                cursor: pointer;
                background-color : ${props => props.theme.colors.primaryAlpha};
            }
        }

        .messages + button {
            margin-left : 0;
        }
    }

    // =============> SECTION : UPDATE
    section.updateSection{

        form > div:first-of-type {
            display: flex;
            gap : 10px;
        }
        form > div:last-of-type {
            width : fit-content;
            margin : 0 auto;
        }
        form p {
            color: red;
            text-align : center;
            font-size: ${props => props.theme.fontSize.paragraphe.small};
        }
        form + div {
            text-align : center;
            padding : 3px 0;
            margin-top : 10px;
            border-radius : 5px;
            background-color:${props => props.theme.colors.primaryAlpha};
            color: #ffffff;

            &:hover {
                cursor: pointer;
                background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(37,145,251,0.98) 0.1%, rgba(0,7,128,1) 99.8% );
            }
        }


    }
    .isActive {
        display: none;
    }

    // =============> SECTION : WISHLIST
    section.wishlistSection{
        max-width : 100%;

        
        >div:last-of-type {
            width : inherit ;
            max-height : 350px;
            overflow-x : hidden;
            overflow-y : scroll;
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }
        > div:last-of-type::-webkit-scrollbar {
            display: none;
        }
    }

    // =============> SECTION : ORDER
    section.orderSection{
        >div:last-of-type {
            width : inherit ;
            max-height : 350px;
            overflow-x : hidden;
            overflow-y : scroll;
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }
        > div:last-of-type::-webkit-scrollbar {
            display: none;
        }
    }

    /* ------------- @MEDIA ------------- */

    @media screen and (min-width: 768px) {
        justify-content: center;
        flex-direction: row;
        gap : 30px;

        section {
            border-radius : 8px;
            margin : 0 0 0 10px;
        }
        > div {
        section {
            margin-right : 10px;
        }
        }

        // =============> SECTION : USER
        section.userSection{
            min-width : max-content;
            max-width : max-content;
            border : 5px solid #92AFFF;
            margin-bottom : 0;
        }

        // =============> PART : RIGHT <============= //
        
        // =============> SECTION : UPDATE
        section.updateSection {
            margin-top : 0;
            border : 5px solid #FF44FF;
        }
       

        // =============> SECTION : USER
        section.wishlistSection{
            border : 5px solid #AEFF44;
        }

        // =============> SECTION : ORDER
        section.orderSection{
            border : 5px solid #FF7944;
        }
        

    }


`

export default StyledProfile ;