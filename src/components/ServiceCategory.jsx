import { NavLink } from "react-router-dom";

const ServiceCategory = ({ service }) => {
    const { service_name, category, pricing, counselor, image, id } = service;

    return (
        <div className="w-full max-w-md mx-auto p-4">
            <div className="card bg-[#EEF9FF] rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
                <figure className="px-6 pt-6">
                    <img
                        src={image}
                        alt={service_name}
                        className="rounded-xl h-64 w-full object-cover"
                    />
                </figure>
                <div className="card-body items-center text-center p-4 md:p-6 flex-1">
                    <h2 className="card-title text-2xl md:text-3xl font-semibold">{service_name}</h2>
                    <button className="btn btn-dash btn-info mt-2">{category}</button>
                    <p className="text-lg md:text-xl mt-2">Price: {pricing}</p>
                    <p className="text-lg md:text-xl mt-1">Counselor: {counselor}</p>
                    <div className="card-actions mt-4">
                        <NavLink
                            to={`/service/${id}`}
                            className="btn bg-[#43aae2] text-white hover:bg-[#3398c6] transition-colors duration-300"
                        >
                            Learn More
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ServiceCategory;
