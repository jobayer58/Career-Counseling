import group from '../assets/img-2.png'
import logo1 from '../assets/icon-16.png'
import logo2 from '../assets/icon-18.png'
const Features = () => {
    return (
        <div className='bg-[#FFF9EB]'>
            <div className='lg:flex justify-center items-center py-8 md:py-14 lg:py-28 gap-16'>
                <div className='mx-5 md:mx-0'>
                    <img className='' src={group} alt="" />
                </div>
                <div className='space-y-4 mx-5 lg:mx-0 mt-4 lg:mt-0'>
                    <h3 className='text-2xl text-[#4DC879]'>Feature</h3>
                    <h1 className='md:text-5xl text-[20px] font-semibold '>Elevate your Career <span className='text-[#4DC879]'>with</span> <br /> expert <span className='text-[#4DC879]'>Guidance</span> <br /> <span className='text-[#4DC879]'>courses</span></h1>
                    <p>Get professional career advice, skill-building resources, and job <span className='hidden md:inline'><br /></span> placement support to achieve your dream career.</p>

                    {/* logo1 */}
                    <div className='border space-y-2 md:space-y-0  md:flex gap-4 border-[#EAF0FF] bg-base-100 px-4 py-6 rounded-2xl'>
                        <div className='flex justify-center items-center '>
                            <img className='h-20 w-20  object-cover' src={logo1} alt="" />
                        </div>
                        <div className='space-y-1'>
                            <h1 className='md:text-xl font-semibold'>🚀 3500+ career-boosting resources </h1>
                            <p className='text-sm'>Access a vast collection of career guides, resume templates,<br /> and expert insights to help you succeed.</p>
                        </div>
                    </div>
                    {/* logo2 */}
                    <div className='border space-y-2 md:space-y-0  md:flex gap-4 border-[#EAF0FF] bg-base-100 px-4 py-6 rounded-2xl'>
                        <div className='flex justify-center items-center '>
                            <img className='h-20 w-20 object-cover' src={logo2} alt="" />
                        </div>
                        <div className='space-y-1'>
                            <h1 className='md:text-xl font-semibold'>🎓 1900+ successful career transformations</h1>
                            <p className='text-sm'>Join thousands of students and professionals who have landed <br /> their dream jobs with our expert counseling and mentorship.</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Features;