import { useEffect, useState } from "react";
import ServiceCategory from "./ServiceCategory";

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("/careerData.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="  ">
            <div className="text-center py-10 space-y-2">
                <h1 className="text-3xl font-light mt-10">Our <span className="text-[#43aae2]">services</span> </h1>
                <p className="md:text-5xl text-xl font-semibold">Empower Your <span className="text-[#43aae2]">Career</span> Journey <span className='hidden md:inline'><br /></span> for Greater <span className="text-[#43aae2]">Success</span> </p>
            </div>
            <div className="md:py-10 pb-4 grid md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 md:w-9/10 lg:w-10/12 mx-auto gap-10">
                {
                    services.map(service => <ServiceCategory key={service.id} service={service}></ServiceCategory> )
                }
            </div>
        </div>
    );
};

export default Services;