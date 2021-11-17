import { Component } from "react";
// // Import Swiper React components
// import SwiperCore, { Autoplay } from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';
// // Import Swiper styles
// import 'swiper/swiper-bundle.css';
// // import 'swiper';
// // import 'swiper/navigation.scss'; // Navigation module
// // import 'swiper/pagination.scss'; // Pagination module


// Core modules imports are same as usual
import { Navigation, Pagination } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper

import Img1 from '../../assets/img/banner-1.jpg'

// SwiperCore.use([Autoplay]);

class SliderMy extends Component {
    render() {
        return (
            <div className="bannar-wrapper">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    autoplay={{ delay: 3000 }}
                >
                    <SwiperSlide>
                        <div className="banner-content" >
                            <div className="banner-content-img" style={{ backgroundImage: `url(${Img1})` }}></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 banner-content-text">
                                        <div>
                                            <h1>We’re here to help you.</h1>
                                            <p>We connect talented people with great companies. <br /> Join our network today.</p>
                                            <button className="btn btn-primary btn-pill btn-lg">Join Our network</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="banner-content" >
                            <div className="banner-content-img" style={{ backgroundImage: `url(${Img1})` }}></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 banner-content-text">
                                        <div>
                                            <h1>We’re here to help you.</h1>
                                            <p>We connect talented people with great companies. <br /> Join our network today.</p>
                                            <button className="btn btn-primary btn-pill btn-lg">Join Our network</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="banner-content" >
                            <div className="banner-content-img" style={{ backgroundImage: `url(${Img1})` }}></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 banner-content-text">
                                        <div>
                                            <h1>We’re here to help you.</h1>
                                            <p>We connect talented people with great companies. <br /> Join our network today.</p>
                                            <button className="btn btn-primary btn-pill btn-lg">Join Our network</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="banner-content" >
                            <div className="banner-content-img" style={{ backgroundImage: `url(${Img1})` }}></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 banner-content-text">
                                        <div>
                                            <h1>We’re here to help you.</h1>
                                            <p>We connect talented people with great companies. <br /> Join our network today.</p>
                                            <button className="btn btn-primary btn-pill btn-lg">Join Our network</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        )
    }
}

export default SliderMy