import styled from 'styled-components';

const NavStyled = styled.nav`

width: 100%;
background-color : #B3A6FF;
height : ${(props) => props.theme.sizes.navbar};
display: flex;
align-items: center;
justify-content: space-between;
box-sizing : border-box;

/* logo image */
img.logo {
    max-width: 150px;
}
/* navigation */
.navNavigation ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 35%;
} 
.navNavigation ul li a:hover {
    font-weight: ${(props) => props.theme.fontWeight.bold} ;
} 
.navNavigation ul li a:active {
    color: ${(props) => props.theme.colors.primary};
    font-weight: ${(props) => props.theme.fontWeight.extraBold} ;
} 
/* authentification + cart */
.auth {
    display: flex;
    align-items: center;
    gap : 5px;
}
/* for desktop : hide the mobile navbar interface */
.mobileNavigation {
    display : none;
}

/* SMALL DEVICES INTERFACE (MOBILE & TABLET) */
@media screen and (max-width: 768px) {

img.logo  {
    max-width: 110px;
}


/* Buger menu for the navigation */
.mobileNavigation {
    display: flex;
    align-items: center;
}
/* To show the user profile(design only for small devices) */
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
/* toogle system */
.hideSidebarNavigation, .auth{
    display: none;
}

}`;



export default NavStyled ;