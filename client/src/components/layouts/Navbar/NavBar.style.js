import styled from 'styled-components';

const StyledNavbar = styled.nav`

    /* DEVICES : big devices (desktop, monitor) */

    /* General */

    width: 100%;
    height : ${(props) => props.theme.sizes.navbar};
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing : border-box;

    /* LEFT side => RIGHT side */

     a:first-of-type {
        padding-right : 0;
    }

    /* Logo image */
    img.logo {
        max-width: 120px;
    }


    /* Navigation */
    .navNavigation ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: clamp(0.875rem, 0.8571rem + 0.0893vw, 0.9375rem);
      
    } 
    .navNavigation ul li a:hover {
        font-weight: ${(props) => props.theme.fontWeight.bold} ;
    } 
    .navNavigation ul li a:active {
        color: ${(props) => props.theme.colors.primary};
        font-weight: ${(props) => props.theme.fontWeight.extraBold} ;
    } 

    /* Authentification + Cart */
    .navbarRightSide {
        display: flex;
        align-items: center;
    }

    .user {
            margin-right: 1.2vw;
            font-size : 0.8rem;
            display: flex;
            flex-direction : column;
            justify-content: center;
            align-items: center;
            &:hover {
                cursor: pointer;
            }
        }
        .user p {
            padding : 0;
        }

        .burgerMenuContainer {
            display : none;
        }








    /* DEVICES : small devices (tablet, smartphone) */

    @media screen and (max-width: 767px) {

        /* Logo */
        img.logo  {
            max-width: 110px;
        }

        /* sidebar navigation */
        .navNavigation {
            position : absolute;
            left: 0;
            top:  ${(props) => props.theme.sizes.navbar};
            min-height : calc(100vh - ${(props) => props.theme.sizes.navbar});
            width : 100vw;
            background-color : #0000003B;
            z-index: 999;
        }
        .navNavigation ul {
            position: absolute;
            right: 0;
            height: 100%;
            min-width : 300px;
            flex-direction: column;
            align-items: flex-end;
            justify-content: flex-start;
            gap : 25px;
            padding-top : 50px ;
            background-color : ${(props) => props.theme.colors.primary};
        }
        .navNavigation ul li a:active {
            color: ${(props) => props.theme.colors.white};
        } 
        .navbarRightSide {
            gap : 5px;
        }
        .burgerMenuContainer {
            display: contents;
        }
        .burgerMenu, .burgerMenuClose {
            margin: 5px;
            &:hover {
                cursor: pointer;
            }
        }
        /* toogle */
        .hideSidebarNavigation{
            display: none;
        }

}`;

export default StyledNavbar ;