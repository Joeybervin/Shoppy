import styled from "styled-components";
import { BiChevronRight } from "react-icons/bi";
/* STYLE */
const StyleCategoryCard = styled.div`

    position : relative;
    width: 80%;
    min-width: 200px;
    min-height: 200px;
    margin: 10px;


    &:hover {
        cursor : pointer;
    }

    img {
        width: 100%;
        height: 100%;
        border-radius : 20px;
        object-fit: cover;
        margin: 0 auto;
        
    }
    div {
        display : flex;
        justify-content : space-between;
        align-items: center;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 5%;
        width: 85%;
        margin : 0 auto ;
        background-color : #FFFFFF79;
        border-radius : 5px;
        
    }
    p {
        color: ${(pros) => pros.theme.colors.white};
        text-shadow:    0px 4px 3px rgba(0,0,0,0.4),
                        0px 8px 13px rgba(0,0,0,0.1),
                        0px 18px 23px rgba(0,0,0,0.1);
        
        :first-child {
            font-weight: ${(pros) => pros.theme.fontWeight.bold};
        }
        
    }

    @media (min-width: 450px) {
        width: 200px;
        height: 200px;
    }
    

`

export const CategoryCard = ({ src, alt, category, ...props }) => {
    return (
        <StyleCategoryCard className={props.className} onClick={props.onClick}>

            <div>
                <p>{category}</p>
                <BiChevronRight color="white" />
            </div>
            <img src={src} alt={alt} />
        </StyleCategoryCard>
    );
}

