import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./infiniteSliderLoop.style.css"

// import required modules
import { Navigation, Mousewheel } from "swiper";

export const InfiniteSliderLoop = ({ ...props }) => {
    return (
        <>
            <Swiper
                  style={{
                    '--swiper-navigation-color': 'transparent',
                    '--swiper-pagination-color': 'transparent',
                  }}
                slidesPerView={4}
                cssMode={true}
                rewind={true}
                navigation={true}
                grabCursor={true}
                mousewheel={true}
                modules={[Navigation, Mousewheel]}
                className="mySwiper"
            >
                {props.children}
            </Swiper>
        </>
    );
}
