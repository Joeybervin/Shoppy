import styled from "styled-components";


const StyleBadge = styled.div`

`



const Badge = ({...props})=> {
    return (
        <StyleBadge>
            <p>{props.children}</p>
        </StyleBadge>
    )
}

export default Badge