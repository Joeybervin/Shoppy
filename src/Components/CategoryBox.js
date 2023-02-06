import styled from "styled-components";

const Div = styled.div`

    position : relative;
    margin: 2%;

    > img {
        max-width: 100%;
        border-radius : 20px;
        
    }
    >div {
        position: absolute;
        top: 10%;
        right: 10%;
        background-color : #00000077;
        border-radius : 5px;
        
    }

    > div p {
        color: ${(pros) => pros.theme.colors.white};
        text-shadow: 1px 1px 2px black;
        
        
    }

    > div > p:first-child {
        font-weight: ${(pros) => pros.theme.fontWeight.bold};
    }


`

const CategoryBox = ({src, alt, category, productsNumber, ...props }) => {
    return (
        <Div>
            <div>
                <p>{category}</p>
                <p>{productsNumber} items</p>
            </div>
            <img src={src} alt={alt} />
        </Div>
    );
}

export default CategoryBox ;