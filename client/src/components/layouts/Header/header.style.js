import styled from 'styled-components';

export const StyledHeader = styled.header`

    position: relative;
    width: 100vw;
    height: calc(100vh - 75px);
    overflow-y: hidden;
    border-bottom : 5px solid black;
    text-align : center;
    display : flex;
    justify-content: center;

    .headerImageContainer {
        width : 100%;
        min-height: 580px;
    }

    .headerImg {
        width: 100%;
        height: 100%;
        object-fit: cover;

    }

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

    h1  {
        margin : 15px 0;
        color: ${(props) => props.theme.colors.white};

        span {
            color: ${(props) => props.theme.colors.tertiaryTextColor};
        }
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