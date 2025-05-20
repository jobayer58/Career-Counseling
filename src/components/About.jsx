import logo from "../assets/icons8-compass-100.png"
const About = () => {
    return (
        <div className="bg-[#EEF9FF]" >
            <div className="grid justify-center items-center lg:w-8/12 mx-auto space-y-2">
                <div className="text-center space-y-2 ">
                    <div className="flex justify-center items-center">
                        <img className="h-36 w-36 " src={logo} alt="" />
                    </div>
                    <p className="md:text-2xl font-semibold"><span className="text-[#4DC879] ">Empowering</span> Success for 15 years</p>
                    <h1 className="md:text-4xl font-semibold">Career <span className="text-[#4DC879]">Management</span > for Students, <span className='hidden md:inline'><br /></span> Graduates & <span className="text-[#4DC879]">Working</span> Professionals</h1>
                </div>
                <div>
                    <p className="w-8/12 text-center mx-auto text-gray-600">Choosing the right career path can be challenging, but with the right guidance,  it becomes a journey of growth and success. Our career counseling platform is dedicated to helping  students, job seekers, and professionals make informed career decisions. We provide expert advice,  personalized counseling, and industry insights to empower individuals in achieving their professional goals. Whether you need guidance on career selection, skill development, or job opportunities, we are here to support you every step of the way.</p>
                </div>
            </div>
            {/*  */}
            <div>
                <div className="md:flex space-y-5 md:space-y-0 mx-2 justify-around py-10 lg:gap-0 md:gap-6 md:w-9/12 md:mx-auto">
                    <div className="card  bg-base-100 md:w-[400px]">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-4xl text-[#4DC879]">Mission</h2>
                            <p>Our mission is to empower individuals by providing accurate career insights, mentorship, and skill-building opportunities, ensuring they make well-informed career decisions.</p>
                            
                        </div>
                    </div>
                    <div className="card bg-base-100 md:w-[400px]">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-4xl text-[#4DC879]">Vision</h2>
                            <p>We envision a world where every individual finds success and fulfillment in their career by making informed, confident, and strategic choices.</p>
                            
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
            
        </div>
    );
};

export default About;