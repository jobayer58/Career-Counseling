import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

const HomeLayouts = () => {
    const location = useLocation();

    useEffect(() => {
        const locationSet = location.pathname;
        const locationTitle = locationSet === '/' ? 'Home' : locationSet.split('/')[1];
        document.title = `CAREER COUNSELING | ${locationTitle.charAt(0).toUpperCase() + locationTitle.slice(1)}`;
    }, [location]);
    return (
        <div>
            <section>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </section>
        </div>
    );
};

export default HomeLayouts;