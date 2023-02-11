import styled from 'styled-components';

const TitleHighlight = styled.span`

        color: ${(props) => props.$color ? props.theme.colors.primary : props.theme.colors.white};
        background : ${(props) => props.highlight ? props.theme.colors.primary : ""};
        padding : ${(props) => props.highlight ? "0 15px" : ""};
        border-radius: ${(props) => props.highlight ? "15px" : ""};

`;

export default TitleHighlight;