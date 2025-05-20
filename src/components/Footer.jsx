import logo from '../assets/icons8-compass-100.png'
import fb from '../assets/fb-48.png'
import ins from '../assets/instagram-48.png'
import tw from '../assets/twitter-48.png'
import yt from '../assets/youtube-48.png'

const Footer = () => {
    return (
        <div className=' bg-[#272727]'>
            <div className=" text-[#FFF9EB] grid md:grid md:grid-cols-2  md:space-x-5  md:mx-auto lg:flex  lg:justify-around py-10 space-y-8">
                {/* part-1 */}
                <div className='space-y-4 text-center md:text-start lg:text-start'>
                    <div className='flex items-center justify-center lg:justify-start md:gap-3 gap-1'>
                        <img className='w-14 h-14 object-cover' src={logo} alt="" />
                        <h2 className='lg:text-3xl text-2xl text-[#4DC879] font-semibold'>CAREER <span className='text-[#f44848]'>COUNSELING</span></h2>
                    </div>
                    <div className='px-1 md-pl-1 lg:px-0 text-center lg:text-start'>
                        <p>No matter where you are on your career journey, <span className='hidden lg:inline'><br /></span> let us help you define a path towards professional <span className='hidden lg:inline'><br /></span> fulfillment with our best career counselling in Bangladesh</p>
                    </div>
                    <div className='flex justify-center  lg:justify-start'>
                        <input className='py-3 lg:px-10 pl-3 rounded-l-2xl' type="email" placeholder='Enter your Email' name="" id="" />
                        <button className=' bg-[#f44848] py-3 px-5 rounded-r-2xl'>Send</button>
                    </div>
                    <div className='flex justify-center lg:justify-start gap-3'>
                        <img src={fb} alt="" />
                        <img src={ins} alt="" />
                        <img src={tw} alt="" />
                        <img src={yt} alt="" />
                    </div>



                </div>
                {/* part 2 */}
                <div className='space-y-4 text-center   md:justify-center lg:text-start'>
                    <h1 className='text-2xl'>Useful Links</h1>
                    <ul className='text-xl space-y-3 font-sans'>
                        <li>About</li>
                        <li>services</li>
                        <li>Mentors</li>
                        <li>Blogs</li>
                    </ul>
                </div>
                {/* part 3 */}
                <div className='space-y-4 text-center  lg:text-start'>
                    <h1 className='text-2xl'>Top Categories</h1>
                    <ul className='text-xl space-y-3 font-sans'>
                        <li>Psychological Counselling </li>
                        <li>Personality Development</li>
                        <li>Career Coaching </li>
                        <li>Job Interview Skills</li>
                    </ul>
                </div>
                {/* part 4 */}
                <div className='space-y-4 text-center  lg:text-start'>
                    <h1 className='text-2xl'>Help & support</h1>
                    <ul className='text-xl space-y-3 font-sans'>
                        <li>Contact</li>
                        <li>Privacy Policy</li>
                        <li>Terms</li>
                        <li>Condition</li>
                    </ul>
                </div>
            </div>
            <hr className='text-gray-300 ' />
            <p className='text-sm text-center text-[#FFF9EB] py-3 '>Copyright © 2025 Career Counseling By programming Hero .</p>

        </div>
    );
};

export default Footer;