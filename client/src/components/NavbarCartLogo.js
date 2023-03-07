import styled from 'styled-components';
/* icons */
import { BsBag } from 'react-icons/bs';

const StyledNavbarCartLogo = styled.div`
margin-right: 10px;
position : relative;

span.badge {
    position : absolute;
    bottom : 0;
    right : -5px;
    background-color: ${(props) => props.theme.colors.primary};
    line-height: calc(14 / 9);
    padding : 0 3px;
    border-radius: 6px;
    font-size: 14px;
    font-weight : ${(props) => props.theme.fontWeight.bold}
}
`

const NavbarCartLogo =  ({...props }) => {
    return (
        <StyledNavbarCartLogo>
            <BsBag size="1.7rem" />
            <span className="badge">{props.children}</span>
        </StyledNavbarCartLogo>
    );
}

export default NavbarCartLogo