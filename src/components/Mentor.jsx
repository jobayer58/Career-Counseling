
const Mentor = ({ mentor }) => {
    const { name, profession, experience, contact, imageUrl,rating } = mentor
    return (
        <div className="">
            <div className="card card-side  bg-base-100 shadow-sm">
                <figure>
                    <img className='md:w-80 '
                        src={imageUrl}
                        alt="mentor" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title md:text-3xl">{name}</h2>
                    <p className="text-xl">Profession: {profession}</p>
                    <p className="text-xl">Experience: {experience}</p>
                    <div className="card-actions items-center ">
                        <p className="text-[#f44848] font-mono text-xl">Rating:{rating}</p>
                        <button className="md:btn md:btn-dash md:btn-info">{contact}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mentor;