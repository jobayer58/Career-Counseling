import { NavLink } from "react-router-dom";

const ServiceCategory = (props = {}) => {
    const {service} = props || {}
    const { service_name, category, pricing, counselor,  image } = service
    return (
        <div className="flex justify-center items-center w-14/15 mx-auto ">
            <div className="card  bg-[#EEF9FF]">
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl h-64" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl font-semibold">{service_name}</h2>
                    <button className="btn btn-dash btn-info">{category }</button>
                    <p className="text-xl">Price: {pricing}</p>
                    <p className="text-2xl">Counselor: {counselor}</p>
                    <div className="card-actions">
                        <NavLink to={`/service/${service.id}`} className="btn bg-[#43aae2]">Learn More</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCategory;