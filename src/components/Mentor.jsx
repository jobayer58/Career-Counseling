const Mentor = ({ mentor }) => {
    const { name, profession, experience, contact, imageUrl, rating } = mentor
    return (
        <div className="p-2">
            <div className="card flex flex-col md:flex-row bg-base-100 shadow-sm rounded-lg overflow-hidden">
                <figure className="md:w-1/3 w-full">
                    <img
                        className="w-full h-64 md:h-full object-cover"
                        src={imageUrl}
                        alt="mentor"
                    />
                </figure>
                <div className="card-body flex-1 p-4 md:p-6">
                    <h2 className="card-title text-2xl md:text-3xl">{name}</h2>
                    <p className="text-lg md:text-xl mt-2">Profession: {profession}</p>
                    <p className="text-lg md:text-xl">Experience: {experience}</p>
                    <div className="card-actions mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <p className="text-[#f44848] font-mono text-lg md:text-xl">Rating: {rating}</p>
                        <button className="btn btn-info btn-sm md:btn-md">{contact}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mentor;
