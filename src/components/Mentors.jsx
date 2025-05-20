import { useEffect, useState } from "react";
import Mentor from "./Mentor";

const Mentors = () => {
    const [mentors, setMentors] = useState([])
    useEffect(() => {
        fetch('/mentorData.json')
            .then(res => res.json())
            .then(data => setMentors(data))
    }, [])
    return (
        <div className="bg-[#EEF9FF]">
            <div className="text-center py-10 space-y-2">
                <h1 className="md:text-3xl font-light mt-10"><span className="text-[#43aae2]">Meet</span> our Career Experts</h1>
                <p className="lg:text-5xl md:text-3xl font-semibold">World Class <span className="text-[#43aae2]">Brilliance</span>  Always At Your <br /> <span className="text-[#43aae2]">Reach</span></p>
            </div>
            <div className="pb-10 grid md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-7 w-11/12 mx-auto">
                {
                    mentors.map(mentor => <Mentor key={mentor.id} mentor={mentor}></Mentor>)
                }
            </div>
        </div>
    );
};

export default Mentors;