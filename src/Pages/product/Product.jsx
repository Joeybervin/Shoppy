/* hooks */
import { useState } from 'react';
import { useParams } from 'react-router-dom';

/* component */
import StyledCarousel from '../../components/carousel/Carousel';
import {BigButton, SmallButton} from '../../components/Button';
import Badge from '../../components/Badge';

/* data */
import productData from '../../data/products'

export default function Product() {

    /* hooks */
    const {refProduct} = useParams()

    /* variables */
    let data = productData

    let product = data.find(product => product.ref === refProduct)
    console.log(product)




    return (
        <div className='product' >
            {/* image */}
            <div className='productImage'>

                {/* Big carousel */}
                <div className='bigCarousel'></div>

                {/* Small carousel */}
                <div className='smallCarousel'></div>

            </div>

            {/* details */}
            <div className='productDetails'>
                <p>{product.productName}</p>
            </div>

            
        </div>
    );
}
