/* Library : react multi-carousel */
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsiveMultiItems = {
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

const responsiveSingleItem = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items:1,
    }
};

const StyledCarousel = ({responsive, infinite, centerMode, focusOnSelect,  ...props}) => {

    return (

        <Carousel
            responsive={responsive}
            infinite={!props.infinite ? true : false}
            centerMode={!props.centerMode ? true : false}
            focusOnSelect={!props.focusOnSelect ? true : false}
            /* style */
            itemClass="item-container"
            containerClass="carousel-container"
            sliderClass="slider-container"
            
        >
            {props.children}

        </Carousel>

        


    );
};



export {StyledCarousel, responsiveSingleItem, responsiveMultiItems} ;