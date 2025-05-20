// Swiper CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import slider1 from '../assets/slider1.jpg'
import slider2 from '../assets/slider2.webp'
import slider3 from '../assets/slider3.jpg'

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
            autoplay={{ delay: 3000 }} 
            loop={true} 
        >
            {/* {slide1} */}
            <SwiperSlide >
                <div className="relative">
                    <img
                        src={slider1}
                        alt="Slide 1"
                        className="w-full h-[650px] object-cover "
                    />
                    {/* bg-[#49474799] */}
                    <div className="absolute inset-0 bg-[#5c595999]  flex flex-col items-center justify-center  bg-opacity-50 ">
                        <h2 className="text-4xl font-bold text-center text-[#4DC879]  ">Career Guidance</h2>
                        <p className="text-xl mt-4 text-[#FFF9EB]  text-center ">Discover your true potential with expert career guidance. <span className='hidden md:inline'><br /></span> Get personalized counseling, resume building tips, <span className='hidden md:inline'><br /></span> interview strategies, and industry insights to shape your future. <span className='hidden md:inline'><br /></span> Plan your career growth, develop essential skills, and unlock <span className='hidden md:inline'><br /></span> job opportunities with professional advice. Take the right steps <span className='hidden md:inline'><br /></span> towards your dream job and achieve career success today! 🚀</p>
                    </div>
                </div>
            </SwiperSlide>

            {/* slide 2 */}
            <SwiperSlide>
                <div className="relative">
                    <img
                        src={slider2}
                        alt="Slide 2"
                        className="w-full h-[650px] object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-[#5c595999] flex flex-col items-center justify-center  bg-opacity-50 ">
                        <h2 className="text-4xl font-bold text-center text-[#4DC879]">Expert Counselors</h2>
                        <p className="text-xl mt-4 text-[#FFF9EB]  text-center">Expert counselors offer tailored career advice, guiding you through <span className='hidden md:inline'><br /></span> skill development,  job opportunities, interview preparation,  and personal <span className='hidden md:inline'><br /></span> growth,  ensuring you make informed decisions and achieve lasting <span className='hidden md:inline'><br /></span> success in your professional journey.</p>
                    </div>
                </div>
            </SwiperSlide>

            {/* slide 3 */}
            <SwiperSlide>
                <div className="relative ">
                    <img
                        src={slider3}
                        alt="Slide 3"
                        className="w-full h-[650px] object-cover"
                    />
                    <div className="absolute inset-0 bg-[#5c595999] flex flex-col items-center justify-center  bg-opacity-50 ">
                        <h2 className="text-4xl font-bold text-center text-[#4DC879] ">Personalized Plans</h2>
                        <p className="text-xl mt-4 text-[#FFF9EB]  text-center">Personalized plans are designed to align with your unique strengths,<span className='hidden md:inline'><br /></span> goals, and aspirations, offering customized career advice, skill development, <span className='hidden md:inline'><br /></span> and strategies to help you succeed in your professional journey.</p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default BannerSlider;