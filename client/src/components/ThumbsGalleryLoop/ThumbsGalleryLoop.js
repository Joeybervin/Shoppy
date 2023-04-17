
import { useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import './thumbsGalleryLoop.style.css'

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

const ThumbsGalleryLoop = ({img }) => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className='thumbsGalleryLoop'>
            <Swiper
            style={{
                "--swiper-navigation-color": "transparent",
                "--swiper-pagination-color": "transparent",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="thumbsGalleryLoopPart1"
            >
                {img.map((el, index) => {
                    return (
                        <SwiperSlide 
                            key={index}
                            className="thumbsGalleryLoopPart1-image"
                        >
                            <img
                                src={el}
                                alt={el}
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumbsGalleryLoopPart2"
    >
        {img.map((el, index) => {
            return (
                <SwiperSlide
                    key={index}
                    className="thumbsGalleryLoopPart2-images"
                >
                    <img
                        src={el}
                        alt={el}
                    />
                </SwiperSlide>
            )
        })}
    </Swiper>
        </div>
    );
};



export {ThumbsGalleryLoop}