import styled from "styled-components";

export const StyledWishlist = styled.div`

    margin: 40px auto;
    text-align: center;
    width: 100%;
    
    > p {
        font-size : ${props => props.theme.fontSize.title.h1};
        font-weight : ${props => props.theme.fontWeight.extraBold};
        padding : 15px;
        margin-bottom : 35px;
    }

    > div:first-of-type {
        display : flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    


`;
