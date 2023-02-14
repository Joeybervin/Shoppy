
import { useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import './swiper.style.css'

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

const ThumbsGalleryLoopPart = ({img }) => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className='swiperContainer'>
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
            className="mySwiper1"
            >
                {img.map((el, index) => {
                    return (
                        <SwiperSlide 
                            key={index}
                            className="mySwiperImages1"
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
        className="mySwiper2"
    >
        {img.map((el, index) => {
            return (
                <SwiperSlide
                    key={index}
                    className="mySwiperImages2"
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



export {ThumbsGalleryLoopPart}