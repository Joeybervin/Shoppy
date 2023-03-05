import styled from "styled-components";

export const StyledPayment = styled.div`

    max-width: 100vw;
    margin :40px auto;

      // ======> PART : HEADER
      > p:first-child {
        width : fit-content;
        padding : 12px;
        margin : 0 auto 85px auto;
        font-size :${props => props.theme.fontSize.paragraphe.large};
        font-weight :${props => props.theme.fontWeight.bold};
        background-color : ${props => props.theme.colors.green};
        filter: drop-shadow(5px 5px 3px #858585);
    }
`

