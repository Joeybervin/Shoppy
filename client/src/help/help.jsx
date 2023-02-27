import { useState, useEffect } from "react";
/* redux */
import { useDispatch } from 'react-redux'

/* import {StyledCarousel , responsiveMultiItems as responsive} from '../../components/Carousel'; */


export default function Help() {

    <StyledCarousel
    responsive={responsive}
    infinite
    centerMode
>
    {data.map((product, index) => {
        return (

            <HomePageProductCard
                key={`hpp${index}`}
                imgSrc={product.productImage}
                imgAlt={product.productName}
                productName={product.productName}
                productPrice={product.price}
                onClick={() => navigate(`/shop/${product.category}/product/${product.ref}`)}
            />

        )
    })}
</StyledCarousel>

}

useEffect(() => {
    const categoryName = location.pathname.split("/").pop();
    setCategory(categoryName);
  }, [location]);








































