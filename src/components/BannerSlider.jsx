// Swiper CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider2.webp';
import slider3 from '../assets/slider3.jpg';

// Swiper Modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const BannerSlider = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]} 
            spaceBetween={30} 
            slidesPerView={1} 
            navigation 
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }} 
            loop={true} 
        >
            {/* Slide 1 */}
            <SwiperSlide>
                <div className="relative w-full h-[500px] md:h-[600px] lg:h-[550px]">
                    <img
                        src={slider1}
                        alt="Career Guidance"
                        className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4 md:px-12 rounded-xl">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#4DC879] mb-4">Career Guidance</h2>
                        <p className="text-base md:text-lg text-white max-w-3xl leading-relaxed">
                            Discover your true potential with expert career guidance. Get personalized counseling, resume building tips, interview strategies, and industry insights to shape your future.
                        </p>
                        <button className="mt-5 px-6 md:px-10 py-2 md:py-3 bg-[#4DC879] text-white rounded-full font-semibold text-base md:text-lg hover:bg-[#3ab169] transition-colors duration-300">
                            Get Started
                        </button>
                    </div>
                </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
                <div className="relative w-full h-[500px] md:h-[600px] lg:h-[550px]">
                    <img
                        src={slider2}
                        alt="Expert Counselors"
                        className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4 md:px-12 rounded-xl">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#4DC879] mb-4">Expert Counselors</h2>
                        <p className="text-base md:text-lg text-white max-w-3xl leading-relaxed">
                            Expert counselors offer tailored career advice, guiding you through skill development, job opportunities, interview preparation, and personal growth.
                        </p>
                        <button className="mt-5 px-6 md:px-10 py-2 md:py-3 bg-[#4DC879] text-white rounded-full font-semibold text-base md:text-lg hover:bg-[#3ab169] transition-colors duration-300">
                            Learn More
                        </button>
                    </div>
                </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
                <div className="relative w-full h-[500px] md:h-[600px] lg:h-[550px]">
                    <img
                        src={slider3}
                        alt="Personalized Plans"
                        className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4 md:px-12 rounded-xl">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#4DC879] mb-4">Personalized Plans</h2>
                        <p className="text-base md:text-lg text-white max-w-3xl leading-relaxed">
                            Personalized plans align with your unique strengths, goals, and aspirations, offering customized career advice and strategies to help you succeed.
                        </p>
                        <button className="mt-5 px-6 md:px-10 py-2 md:py-3 bg-[#4DC879] text-white rounded-full font-semibold text-base md:text-lg hover:bg-[#3ab169] transition-colors duration-300">
                            Explore Plans
                        </button>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default BannerSlider;
