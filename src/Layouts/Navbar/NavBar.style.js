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
    margin-bottom : 60px;

    /* LEFT side => RIGHT side */

    /* Logo image */
    img.logo {
        max-width: 150px;
    }

    /* Navigation */
    .navNavigation ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
    } 
    .navNavigation ul li a:hover {
        font-weight: ${(props) => props.theme.fontWeight.bold} ;
    } 
    .navNavigation ul li a:active {
        color: ${(props) => props.theme.colors.primary};
        font-weight: ${(props) => props.theme.fontWeight.extraBold} ;
    } 

    /* Authentification + Cart */
    .auth {
        display: flex;
        align-items: center;
        gap : 5px;
    }

    /* ONLY for desktop : hide the mobile navbar interface */
    .mobileNavigation {
        display : none;
    }





    /* DEVICES : small devices (tablet, smartphone) */

    @media screen and (max-width: 768px) {

        margin-bottom : 30px;

        /* Logo */
        img.logo  {
            max-width: 110px;
        }
        
        .mobileNavigation {
            display: flex;
            align-items: center;
        }
        .user {
            margin-right: 2.5vw;
            font-size : 0.8rem;
            text-align : center;
            &:hover {
                cursor: pointer;
            }
        }
        .user p {
            padding : 0;
        }
        /* sidebar navigation */
        .navNavigation {
            position : absolute;
            left: 0;
            top:  ${(props) => props.theme.sizes.navbar};
            min-height : calc(100vh - ${(props) => props.theme.sizes.navbar});
            width : 100vw;
            background-color : #0000003B;

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
            padding : 50px 50px 0 0;
            background-color : ${(props) => props.theme.colors.primary};
        }
        .navNavigation ul li a:active {
            color: ${(props) => props.theme.colors.white};
        } 
        .burgerMenu, .burgerMenuClose {
            margin: 5px;
            &:hover {
                cursor: pointer;
            }
        }
        /* toogle */
        .hideSidebarNavigation, .auth{
            display: none;
        }

}`;

export default StyledNavbar ;