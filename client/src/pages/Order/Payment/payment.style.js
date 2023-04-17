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

    // ======> PART : MAIN
      > div {
        max-width : 100%;
        display: flex;
        flex-wrap : wrap;
        gap: 25px;
    }

    // ----> error message
    .errorMessage {
      color: ${props => props.theme.colors.danger};
      font-weight :${props => props.theme.fontWeight.bold};
      text-align : center;
      padding : 0;
      background-color : #FF070723;
      width : fit-content;
      margin : 0 auto;
      margin-top : 20px;
      border-radius : 5px;
    }
  
    .infos {
        flex-grow: 2;
        flex-basis: 55%;
        padding : 0 10px;

        form {
          p:first-of-type {
            margin: 10px 0;
            font-weight: ${props => props.theme.fontWeight.bold};
            font-size: clamp(0.8125rem, 0.7768rem + 0.1786vw, 0.9375rem);  
            span {
              font-weight: ${props => props.theme.fontWeight.regular};
              color : ${props => props.theme.colors.secondaryTextColor};
            }
          }
        }

    }

    .paymentValidation {
      background-color : #ffffff;
        flex-grow: 1;
        flex-basis: 42%;
        padding : 0 10px;
        display: flex;
        flex-direction: column;

        p span {
          text-decoration: underline;
          font-weight: ${props => props.theme.fontWeight.bold};
          &:hover {
            cursor : pointer;
          }

        }

        // ----> part : total and delivery
        > div table.carttable {
            width: 100%;
            border-collapse: collapse;
            margin-bottom : 25px;

        }
        table.carttable td, table.carttable th {
            padding: 12px 2px;
        }
        td:nth-child(2n) {
            text-align: right;
            white-space: nowrap;
        }
        tr:nth-child(3) td {
            color : ${props => props.theme.colors.danger};
        }
        tfoot {
            font-weight: ${props => props.theme.fontWeight.bold};
            border-top: 2px solid #000000;
        }

        div:nth-child(2) p {
          font-size: ${props => props.theme.fontSize.paragraphe.small};
          color : ${props => props.theme.colors.secondaryTextColor};
          line-height: 1.4em;
        }
        > button {
            width : 90%;
            margin : 20px auto 25px auto;
            padding: 15px;
        }

        div:last-of-type p:first-of-type {
          font-weight: ${props => props.theme.fontWeight.bold};
        }

    }

    .noVisible {
      display : none;
    }

    section {
      border : 1px black solid;
      border-radius : 10px;
      padding : 10px;
      margin-bottom: 25px;

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: ${props => props.theme.fontWeight.bold};
        padding : 11px 10px;
        background-color : #F0F0F0;
        border-radius: 8px;;
      }

      > div:first-of-type {
        margin-top : 8px;
        margin-left : 5px;
        p {
          padding : 0;
          font-size: clamp(0.8125rem, 0.7768rem + 0.1786vw, 0.9375rem);  
          
        }
      }

      label {
        font-size :${props => props.theme.fontSize.paragraphe.small};
        font-weight: ${props => props.theme.fontWeight.bold};
        span {
            color : ${props => props.theme.colors.danger}
          }
      }

        footer {
          display : flex;
          flex-direction : column;
          align-items: center;
          margin-top : 15px;
        > div {
          display : flex;
          align-items: center;
          justify-content: center;
          padding : 8px 18px;
          &:hover {
            cursor : pointer;
          }
        }
      }

      
     
    }

    section:nth-child(3), section:nth-child(4) {

      > div:first-of-type {
        p:nth-child(1) {
          font-weight :${props => props.theme.fontWeight.bold};
        }
        
      }

      .deleveryMethodInput:checked + .deleveryMethodLabel , .paymentMethodInput:checked + .paymentMethodLabel {
        background-color: ${(props) => props.theme.colors.primaryAlpha};
        border : solid 3px ${(props) => props.theme.colors.primary};
      }
    
      label {
          gap : 10px;
          border-radius : 8px;
          margin : 5px 0;
          &:hover {
              cursor: pointer;
              background-color: ${props => props.theme.colors.primaryAlpha};

          }


              
     
          }
      img {
            max-width: 35px;
      }

      
    }

    section:nth-child(3) {

      label {
        > div  p {
          padding: 0;
        
          &:first-of-type {
            margin-bottom : 0;
          }
          &:last-of-type {
            color : ${props => props.theme.colors.secondaryTextColor};
          }
        }
      }
      
    }

    section:nth-child(4) {

      label {

        > div {
          width : 95%;
          display: flex;
          justify-content: space-between;
          align-items: center;

          > div {
            display: flex;
            gap : 5px;
          }
        }
        
      }

    }







`

