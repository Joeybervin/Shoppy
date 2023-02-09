/* Library : react multi-carousel */
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './carousel.style.css'


const StyledCarousel = ({...props}) => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items:1,
        }
    };

    return (

        <Carousel
            responsive={responsive}
            infinite={true}
            centerMode={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            /* style */
            itemClass="item-container"
            containerClass="carousel-container"
            sliderClass="slider-container"
            
        >
            {props.children}

        </Carousel>

        


    );
};



export { StyledCarousel }