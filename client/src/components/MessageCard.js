import styled from "styled-components";
/* utils */
import { formatDate } from "../utils/index"
/* icons */
import { TbCircleOff } from "react-icons/tb";



const StyledMessageCard = styled.div`

    margin-bottom : 5px;
    padding : 0 8px;
    border-radius: 8px;
    max-height : 205px;
    overflow-y: scroll;
    -ms-overflow-style: none;  
    scrollbar-width: none;  
    &::-webkit-scrollbar {
        display: none;
    }
    &:hover {
        background-color : #FAF8F8;
    }
    > div > div {
        display: flex;
        justify-content : space-between;
       
    }

    p {
        padding: 0;
        font-size: ${(props) => props.theme.fontSize.paragraphe.small};
        span {
            color: ${(props) => props.theme.colors.secondaryTextColor};
        }
    }

`;


export const MessageCard = ({date, message, message_id, order_id, subject, title}) => {

  

    return (
        <StyledMessageCard>
         
                <div>
                    <div><p><span>dossier : </span>{message_id}</p> <p>{formatDate(date)}</p></div>
                    <p><span>Titre : </span>{title}</p>
                    <p><span>Sujet : </span>{subject === "" ? <span><TbCircleOff /></span> :  subject}</p>
                    <p><span>Numéro de commande : #</span>{order_id === "" ? <span>-</span> :  order_id} </p>
                    <p><span>Message : </span>{message}</p>
                </div>
 
        </StyledMessageCard>
        
    )
};