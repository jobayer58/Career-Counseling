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
             {/* Feedback Section */}
            <div className="flex justify-center text-center py-10 px-4">
                <h1 className="text-3xl md:text-4xl">
                    Please Drop Your <span className="text-[#4DC879]">Feedback</span>
                </h1>
            </div>

            {/* Feedback Form */}
            <div className="py-10 px-4 md:px-0">
                <form onSubmit={handleSubmitComment}>
                    <div className="border border-[#4DC879] rounded-2xl py-5 bg-base-100 md:w-6/12 mx-auto space-y-6">
                        <div className="flex flex-col md:flex-row gap-4 md:gap-6 px-6">
                            <fieldset className="flex-1">
                                <label className="label">
                                    <span className="label-text text-xl md:text-2xl">Name</span>
                                </label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="input h-12 md:h-14 w-full"
                                    placeholder="Type Your Name"
                                />
                            </fieldset>

                            <fieldset className="flex-1">
                                <label className="label">
                                    <span className="label-text text-xl md:text-2xl">Drop Your Feedback</span>
                                </label>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    rows="4"
                                    className="input h-40 md:h-44 w-full"
                                    placeholder="Write your comment"
                                />
                            </fieldset>
                        </div>

                        <div className="flex justify-center">
                            <button className="btn bg-[#4DC879] text-xl md:text-2xl px-6">Submit Your Comment</button>
                        </div>
                    </div>
                </form>

                {/* Feedback Display */}
                {submittedData && (
                    <div className="mt-12 text-center">
                        <h2 className="text-3xl md:text-5xl font-semibold mb-6">
                            Our <span className="text-[#4DC879]">Feedback</span>
                        </h2>

                        <div className="flex justify-center">
                            <div className="card border border-[#4DC879] w-full max-w-md">
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-xl md:text-2xl">Name: {submittedData.name}</h2>
                                    <p className="text-lg md:text-xl mt-2">Comment: {submittedData.message}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ServiceDetails;