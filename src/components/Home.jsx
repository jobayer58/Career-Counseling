import BannerSlider from './BannerSlider';
import Features from './Features';
import Mentors from './Mentors';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <BannerSlider></BannerSlider>
            <Services></Services>
            <Features></Features>
            <Mentors></Mentors>
        </div>
    );
};

export default Home;