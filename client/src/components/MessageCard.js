import styled from "styled-components";
/* utils */
import { formatDate } from "../utils/formatDate"
/* icons */
import { TbCircleOff } from "react-icons/tb";



const StyledMessageCard = styled.div`

    margin-bottom : 5px;
    border-radius: 8px;
    max-height : 115px;
    overflow-y: scroll;
    -ms-overflow-style: none;  
    scrollbar-width: none;  
    &::-webkit-scrollbar {
        display: none;
    }
    &:hover {
        background-color : #FAF8F8;
    }
    > div {
        display: flex;
        justify-content : space-between;
        padding : 8px;
    }

    p {
        padding: 0;
        font-size: ${(props) => props.theme.fontSize.paragraphe.small};
        span {
            color: ${(props) => props.theme.colors.secondaryTextColor};
        }
    }

`;


export const MessageCard = ({date, message, message_id, order_id, subject, title,...props}) => {
    return (
        <StyledMessageCard>
            <div>
                <div>
                    <p><span>Titre : {title}</span></p>
                    <p><span>Sujet : </span>{subject === "" ? <span><TbCircleOff /></span> :  subject}</p>
                    <p><span>Numéro de commande : #{order_id === "" ? <span>-</span> :  order_id}</span> </p>
                    <p><span>Message : </span>{message}</p>
                </div>

                <div>
                    <p>{formatDate(date)}</p>
                    <p><span>{}</span>{}</p>
                </div>


            </div>
        </StyledMessageCard>
        
    )
};