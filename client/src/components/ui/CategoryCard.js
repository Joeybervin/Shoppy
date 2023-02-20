import styled from "styled-components";

/* STYLE */
const StyleCategoryCard = styled.div`

    position : relative;
    margin: 2%;

    &:hover {
        cursor : pointer;
    }

    > img {
        max-width: 100%;
        border-radius : 20px;
        object-fit: cover;
        
    }
    > div {
        position: absolute;
        top: 10%;
        right: 10%;
        background-color : #FFFFFF77;
        border-radius : 5px;
        
    }
    > div p {
        color: ${(pros) => pros.theme.colors.white};
        text-shadow:    0px 4px 3px rgba(0,0,0,0.4),
                        0px 8px 13px rgba(0,0,0,0.1),
                        0px 18px 23px rgba(0,0,0,0.1);
        
        
    }
    > div > p:first-child {
        font-weight: ${(pros) => pros.theme.fontWeight.bold};
    }


`

const CategoryCard = ({src, alt, category, productsNumber , ...props }) => {
    return (
        <StyleCategoryCard onClick={props.onClick}>
            <div>
                <p>{category}</p>
                <p>{productsNumber} items</p>
            </div>
            <img src={src} alt={alt}  />
        </StyleCategoryCard>
    );
}

export default CategoryCard ;