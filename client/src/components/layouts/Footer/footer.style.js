import styled from 'styled-components';

export const StyledFooter = styled.footer `


width: 100vw;
background-color : ${(props) => props.theme.colors.primaryAlpha};


> div {
    margin : 0 auto;
    font-size: 0.9rem;
    max-width: 85%;
    box-sizing: border-box;
    font-family : ${(props) => props.theme.fonts.primaryFont};
    font-weight: ${(props) => props.theme.fontWeight.regular};

}


> div p:first-child {
    color: ${(props) => props.theme.colors.primary};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    padding: 5px 5px 10px 5px;
}

li a {
    padding-left: 0;
}

.footerNavigation {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap : 15px;
    padding: 25px 10px;
    text-align: center;
}

.brand {
    max-width : 70%;
    margin: 0 auto;
    text-align: center;
    
}

.brand img {
    max-width : 100px;
    margin: 0 auto 20px auto;
}

@media screen and (min-width: 768px) {

    /* A REVOIR */
/*     position : absolute;
    left : 0;
    bottom : 0; */
    
.footerNavigation {

    flex-direction: row;
    text-align: left;
    gap : 3%;
}

.brand {
    width: 30%;
    margin: 0;
    text-align: left;
}
.brand img {
    max-width : 100px;
    margin: 0;
}

.brand img {
    max-width : 120px;
    padding: 15px 15px 20px 0;
}

    
}
.socialNetwork {
    display: flex;
    justify-content: center;
    gap : 5px;
}

.copyright, .socialNetwork {
    text-align: center;
    color: ${(props) => props.theme.colors.primaryTextColor};
    padding: 0 20px 15px 20px;
}
div.copyright p {
    color: ${(props) => props.theme.colors.primaryTextColor};
    font-size : ${(props) => props.theme.fontSize.paragraphe.small};
    font-weight: ${(props) => props.theme.fontWeight.regular};
    padding: 0;
}
`;