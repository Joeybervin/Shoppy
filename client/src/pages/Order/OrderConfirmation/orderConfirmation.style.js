import styled from "styled-components";

export const StyledOrderConfirmation = styled.div`

    max-width: 100vw;
    margin :40px auto;
    text-align: center;

      // ======> PART : HEADER
    > p:first-child {
        width : fit-content;
        padding : 12px;
        margin : 0 auto 45px auto;
        font-size :${props => props.theme.fontSize.paragraphe.large};
        font-weight :${props => props.theme.fontWeight.bold};
        background-color : ${props => props.theme.colors.secondary};
        color : #ffffff;
        filter: drop-shadow(5px 5px 3px #858585);
    }
    p span {
      font-weight :${props => props.theme.fontWeight.bold};
      text-decoration: underline;
    }

    > div  {
      height : 350px;
      width : 300px;
      margin : 0 auto 25px auto;

      img {
        height : 100%;
        width : 100%;
        object-fit: fit;
      }
    }

    button {
      
    }


`;