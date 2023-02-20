import styled from "styled-components";


const Div = styled.div`

    text-align: center;
    margin : 25px auto;
    max-width: 250px;
    

    > img {
        margin: 0 auto;
        position: relative;
        width : clamp(50px, 15vw, 75px)
    }

    p:first-of-type {
        font-weight : ${(props) => props.theme.fontWeight.extraBold};
        color : ${(props) => props.theme.colors.tertiaryTextColor};
    }

    @media screen and (min-width : 768px) {
        max-width : 25vw;

        

    }
`



const ServiceCard = ({service, serviceDetail, iconSrc, iconAlt})=> {
    return (
        <Div>
            <img src={iconSrc} alt={iconAlt} />
            <p>{service}</p>
            <p>{serviceDetail}</p>
        </Div>
    )
}

export default ServiceCard