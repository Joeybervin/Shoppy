import styled from "styled-components";
import { useState, useEffect } from 'react';
/* utils */
import { formatDate } from "../utils/index"
/* icons */
import { BsChevronRight } from "react-icons/bs";



const StyledOrderCard = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding : 15px;
    margin-bottom : 10px;
    &:hover {
        background-color: '#FF794469';
    }

        p {
            font-size : ${props => props.theme.fontSize.paragraphe.small};
            color : ${props => props.theme.colors.secondaryTextColor};
        }
        div:first-of-type p:first-of-type {
            font-weight : ${props => props.theme.fontWeight.bold};
            color : ${props => props.theme.colors.primaryTextColor};
        }
    

`;


export const OrderCard = ({date, cartListLength, orderTotal}) => {


    const [orderStateMessage, setOrderStateMessage] = useState('')

    useEffect(() => {

        const elapsedTime = Date.now() - new Date(date).getTime();
        const elapsedDays = elapsedTime / (1000 * 60 * 60 * 24);

        if (elapsedDays <= 1 ) {
            setOrderStateMessage("En cours de traitement")
        }
        else if (elapsedDays > 1 && elapsedDays <= 2) {
            setOrderStateMessage("En cours de préparation")
        }
        else if (elapsedDays > 2 && elapsedDays <= 3) {
            setOrderStateMessage("En cours d'acheminement")
        }
        else if (elapsedDays > 43 && elapsedDays <= 4) {
            setOrderStateMessage("En cours de livraison")
        }
        else if (elapsedDays > 4 ) {
            setOrderStateMessage("Colis livré")
        }
        
    }, [date]);


    return (
        <StyledOrderCard>
            <div>
                <p>{orderStateMessage}</p>
                <p>{cartListLength} articles</p>
            </div>

            <div>
                <p>{formatDate(date)}</p>
                <p>{orderTotal} €</p>
            </div>

            < BsChevronRight />


        </StyledOrderCard>
    )
};

