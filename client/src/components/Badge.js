import styled from "styled-components";


const Badge = styled.p`
    
        display: inline-block;
        padding: 5px 15px;
        margin: 0 5px ;
        background-color : #E4E4E4;
        border-radius : 8px;
        font-size : ${(props) => props.theme.fontSize.small};
        font-weight : ${(props) => props.theme.fontWeight.bold};
    
`

export default Badge