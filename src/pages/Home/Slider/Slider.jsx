import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper';
import { useRef } from 'react';
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import './Slider.css'
const Slider = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className="lg:px-10 rounded">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="flex bg-gray-300 dark:bg-slate-700 rounded h-96 flex-col-reverse md:flex-row">
                        <div className=" flex items-center h-96 md:w-1/2">
                            <div className="text-gray-950 dark:text-white">
                                <h1 className="md:mb-5 text-xl md:text-5xl font-bold">For more diversity</h1>
                                <p className="md:mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary bg-[#e2136e] border-none dark:bg-white dark:text-gray-950">Here we are</button>
                            </div>
                        </div>
                        <div className="h-96 md:w-1/2">
                            <img className="rounded w-full" src="https://edge.mondly.com/blog/wp-content/uploads/2020/03/learn-bengali-1.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex bg-gray-300 dark:bg-slate-700 rounded h-96 flex-col-reverse md:flex-row">
                        <div className=" flex items-center h-96 md:w-1/2">
                            <div className="text-gray-950 dark:text-white">
                                <h1 className="mb-5 text-xl md:text-5xl font-bold">Are you looking for Arabic language?</h1>
                                <p className="md:mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary bg-[#e2136e] border-none dark:bg-white dark:text-gray-950 mb-2">Here we are</button>
                            </div>
                        </div>
                        <div className="h-96 md:w-1/2">
                            <img className="rounded h-full w-full" src="https://www.quranhost.com/wp-content/uploads/2023/04/learn-arabic.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex bg-gray-300 dark:bg-slate-700 rounded h-96 flex-col-reverse md:flex-row">
                        <div className=" flex items-center h-96 md:w-1/2">
                            <div className="text-gray-950 dark:text-white">
                                <h1 className="md:mb-5 text-xl md:text-5xl font-bold">For more diversity</h1>
                                <p className="md:mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary bg-[#e2136e] border-none dark:bg-white dark:text-gray-950">Here we are</button>
                            </div>
                        </div>
                        <div className="h-96 md:w-1/2">
                            <img className="rounded w-full" src="https://edge.mondly.com/blog/wp-content/uploads/2020/03/learn-bengali-1.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex bg-gray-300 dark:bg-slate-700 rounded h-96 flex-col-reverse md:flex-row">
                        <div className=" flex items-center h-96 md:w-1/2">
                            <div className="text-gray-950 dark:text-white">
                                <h1 className="mb-5 text-xl md:text-5xl font-bold">Are you looking for Arabic language?</h1>
                                <p className="md:mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary bg-[#e2136e] border-none dark:bg-white dark:text-gray-950 mb-2">Here we are</button>
                            </div>
                        </div>
                        <div className="h-96 md:w-1/2">
                            <img className="rounded h-full w-full" src="https://www.quranhost.com/wp-content/uploads/2023/04/learn-arabic.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
};

export default Slider;