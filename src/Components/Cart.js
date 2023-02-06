import styled from 'styled-components';
/* icons */
import { BsBag } from 'react-icons/bs';

const Cart = styled.div`
margin-right: 10px;
position : relative;

span.badge {
    position : absolute;
    bottom : -5px;
    right : -5px;
    background-color: ${(props) => props.theme.colors.primary};
    padding : 0.25rem;
    border-radius: 10px;
    font-size: 0.8rem;
}
`

const StyledCart =  ({...props }) => {
    return (
        <Cart>
            <BsBag size="1.7rem" />
            <span className="badge">{props.children}</span>
        </Cart>
    );
}

export default StyledCart