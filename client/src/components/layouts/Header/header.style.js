import styled from 'styled-components';


export const StyledHeader = styled.header`

    // =============> IMPORT : ANIMATIONS
    @keyframes animatedBackground {
        to {
            background-size: 100% 100%;
        }
    }

    position: relative;
    width: 100vw;
    height: calc(100vh - 75px);
    overflow-y: hidden;
    border-bottom : 5px solid black;
    text-align : center;
    display : flex;
    justify-content: center;

    // =============> PART : IMAGE 
    .headerImageContainer {
        width : 100%;
        min-height: 580px;
    }

    .headerImg {
        width: 100%;
        height: 100%;
        object-fit: cover;

    }

    // =============>  PART : TEXT 
    .headerTextContainer {
        position: absolute;
        bottom : 0;
        width : 100%;
        display : flex;
        flex-direction : column;
        align-items : center;
        background: rgb(2,0,36);
        background: linear-gradient(0deg, rgba(2,0,36,0.7120098039215687) 0%, rgba(0,0,0,0) 100%);
    }

    .headerTextContainer > div {
        max-width : 590px;
    }

    h1  {
        margin : 15px 0;
        color: ${(props) => props.theme.colors.white};
        font-family: 'MEDIO VINTAGE';
        letter-spacing: 5px;
        padding : 0 20px;
        display: inline;
    }
                                                
    span {
        padding : 0 1px 0 10px;
        background-image: linear-gradient( transparent 88%, #F5F5F5 90%, transparent 95%, transparent 100%);
        background-repeat: no-repeat;
        background-size: 0% 100%;
        animation: animatedBackground 4s cubic-bezier(0.645, 0.045, 0.355, 1) 0.5s forwards;
        color: ${(props) => props.theme.colors.tertiaryTextColor};
    }

    button {
        width: fit-content;
        margin-bottom : 25px;
    }


    /* DEVICE : desktop */
    @media screen and (min-width: 768px) {
        height: 85vh;
    }
`;