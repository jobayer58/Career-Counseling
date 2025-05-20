import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Footer from "./Footer";
import { FcRating } from "react-icons/fc";

const ServiceDetails = () => {

    const { user } = useContext(AuthContext)
    const data = useLoaderData()
    const { id } = useParams()
    const service = data.find(item => item.id === parseInt(id))
    const [name, setName] = useState()
    const [message, setMessage] = useState()
    const [submittedData, setSubmittedData] = useState()

    const handleSubmitComment = e => {
        e.preventDefault()
        setSubmittedData({ name, message })
        setName('')
        setMessage('')
    }

    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <div className=" flex justify-center text-center py-10 ">
                <h1 className="text-4xl">Hey! <span className="text-[#4DC879] text-5xl">{user.displayName}</span> Are You Interest This Course 😊</h1>
            </div>
            <div className='lg:flex justify-center items-center md:w-10/12 mx-4 md:mx-auto rounded-2xl py-6  bg-[#EEF9FF]'>
                {/* img */}
                <div className=" justify-items-end px-8 ">
                    <img className='rounded-2xl h-96 w-[1700px] object-cover' src={service?.image} alt="" />
                </div>
                {/* text */}
                <div className='space-y-4 px-6 mt-4 lg:mt-0'>
                    <p className="text-3xl font-semibold">{service?.service_name}</p>
                    <p>{service?.description}</p>
                    <p className="text-xl">Category:{service?.category}</p>
                    <p className="text-xl">Time: {service?.duration}</p>
                    <p className="text-xl">Counselor: {service?.counselor}</p>
                    <div className="flex gap-2  items-center">
                        <p className="text-xl"><FcRating></FcRating></p>
                        <p>{service?.rating}</p>
                    </div>
                    <button className="btn btn-outline btn-info">Enrol Now </button>
                </div>
            </div>
            {/*  */}
            <div className="flex text-center justify-center items-center py-10">
                <h1 className="text-4xl">Please Drop Your <span className="text-[#4DC879]">FeedBack</span></h1>
            </div>
            {/*  */}
            <div className="py-10">
                <form onSubmit={handleSubmitComment}>
                    <div className="border-[#4DC879] border mx-3 rounded-2xl py-5 bg-base-100 md:w-6/12 md:mx-auto">
                        <div className="flex md:px-8 lg:pl-20 px-4">
                            <fieldset className="fieldset">
                                <label className="label">
                                    <span className="label-text text-2xl">Name</span>
                                </label>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="input h-14 md:w-60" placeholder="Type here Name" />

                            </fieldset>
                        </div>
                        <div className="flex items-center px-4 md:px-0 justify-center">
                            <fieldset className="fieldset">
                                <label className="label">
                                    <span className="label-text text-2xl">Drop your Feedback</span>
                                </label>
                                <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} required rows="4" className="input text-2xl h-44 lg:w-[800px] " placeholder="Comment" />

                            </fieldset>

                        </div>
                        <div className="flex justify-center items-center py-2 "><button className="btn bg-[#4DC879] text-xl">Submit Your Comment</button></div>
                    </div>

                </form>
                {
                    submittedData && (
                        <h1 className="text-center py-6 text-5xl font-semibold">Our <span className="text-[#4DC879]">Feedback</span></h1>
                    )
                }
                <div className="flex justify-center items-center mx-2 md:mx-0">
                    {submittedData && (
                        <div className="card border  border-[#4DC879] w-96">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Name :{submittedData.name}</h2>
                                <p>Comment :{submittedData.message}</p>

                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ServiceDetails;