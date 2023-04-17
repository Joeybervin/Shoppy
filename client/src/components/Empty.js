import styled from "styled-components";

const StyledEmpty = styled.div`

    display: flex;
    justify-content: center;
    align-items : center;
    width : 100%;
    margin : 25px 0;

    > div {
        display: flex;
        justify-content: center;
        align-items : center;
        flex-direction : column;
        width : clamp(250px, 20vw, 550px);
        height: clamp(250px, 20vw, 550px);
        border-radius : 25px;
        border : 3px solid black;
    
        img {
            margin-bottom :10px;
        }
        p:first-of-type {
            font-weight : ${props => props.theme.fontWeight.bold}
        }
        p:last-of-type {
            font-size : ${props => props.theme.fontSize.paragraphe.small}
        }
    }
    

`

export const Empty = ({ message, messageTitle, ...props }) => {
    return (
        <StyledEmpty>
            <div>

                <img src="/icons/empty-box.png" alt="boîte vide - flaticon" />
                <p>{messageTitle}</p>
                <p>{message}</p>

            </div>
        </StyledEmpty>
    )
}

