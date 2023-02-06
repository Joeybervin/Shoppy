import styled from 'styled-components';

export const StyledHeader = styled.header `

    display: flex;
    flex-wrap: wrap-reverse;
    text-align: center;
    padding : 0  15px ;

    h1  {
        margin : 15px 0;
    }

    h1 span {
        color: ${(props) => props.theme.colors.tertiaryTextColor};
    }


@media screen and (min-width: 768px) {

    justify-content: space-between;
    padding : 0 ;
    text-align: left;
    margin : 20px auto 0 auto;

    > div:first-child {
        margin : auto 0;
        padding-left : 10px;
        width : 50%;
    }
    > div:first-child p{
       margin-bottom: 15px;
    }

    .heroImage {
        width : 50%;
    }
    .heroImage img {
        border-radius: 20px;
        max-height: 650px;
        width: 85%;
        margin: 0 10px 0 auto;
        box-shadow : 2px 3px 15px  rgba(185,185,185);
    }
}
`;