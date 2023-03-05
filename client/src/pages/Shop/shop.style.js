import styled from "styled-components";

export const StyledShop = styled.div`


width : 100%;
margin: 30px 30px 0 30px;

.gender {
    display : none;
}
.filtersToogle {
    border : 4px solid #7777FF;
    border-radius : 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin : 0 20px;

    p {
        padding : 10px 30px 10px 5px;
    }
}
.filters {
    position: relative;
    background-color: #64646410;
    padding : 15px 20px 5px 20px ;
    margin : 0 20px;
    flex-wrap: wrap;
    min-height: 150px;

    > p:last-of-type {
        cursor: pointer;
        width : fit-content;
        position: absolute;
        right: 20px;
        bottom: 0;
        font-size: ${props => props.theme.fontSize.paragraphe.small};
        color : ${props => props.theme.colors.secondaryTextColor};
        text-decoration: underline;
    }
}
div .filterIsClosed {
    display : none;
}
.colorFilter {

    text-align: center;

    .colorsList{
        display: flex;
        padding : 5px;
        justify-content: center;
        border-radius: 5px;
    }

}

.productColor, .multi {
    margin-left : 5px;
    min-width : 25px;
    height: 25px;
    padding : 4px;
    border-radius : 5px;
    cursor: pointer;

    > div {
        max-width : 100%;
        height: 100%;
        border-radius : 2px;
    }
}
.multi {
    border: 1px solid rgba(0, 0, 0, 0.473);
    > div{
        background-color: #4158D0;
        background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
    }
}


.productsList {
    
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    

}
/* 
.productsList::after {
    content: "";
    flex: auto;

    } */



@media screen and (min-width: 768px) {

    .gender {
        display: flex;
        justify-content: space-between;
        padding: 5px;
        margin : 20px 20px;
    }
    .gender p {
        
        border-radius: 5px;
        padding: 10px 15px;
        border: 0.5px solid white;

    }
    .gender p.selected {
        border: 0.5px solid black;
    }
    .gender p:hover {
        border: 0.5px solid black;
        cursor: pointer;
        
    }

    .filters {
        display: flex;
        justify-content: space-between;
    }

    
}

/* DEVICES /: small devices as smartphone */
@media screen and (max-width: 425px) {
    .productsList {
    justify-content: center;
    }
}
`