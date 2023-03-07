import styled from "styled-components";


const StyledServiceCard = styled.div`

    text-align: center;
    margin : 15px auto;
    width: 150px;
    height: auto;

    > img {
        margin: 0 auto;
        position: relative;
        width : clamp(25px, 15vw, 30px)
    }
    p {
        padding : 0;
        font-size : ${(props) => props.theme.fontSize.paragraphe.small};

    }

    p:first-of-type {
        font-weight : ${(props) => props.theme.fontWeight.bold};
        background-color : #E07987;
        background: linear-gradient(90deg, #E07987 0%, #515ada 100%);
        background-clip: text;
        background-size: 100%;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-text-fill-color: transparent;
        
    }

    @media screen and (min-width : 768px) {
        max-width : 25vw;

        

    }
`

export const ServiceCard = ({service, serviceDetail, iconSrc, iconAlt})=> {
    return (
        <StyledServiceCard>
            <img src={iconSrc} alt={iconAlt} />
            <p>{service}</p>
            <p>{serviceDetail}</p>
        </StyledServiceCard>
    )
}

