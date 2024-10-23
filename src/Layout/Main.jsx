import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../components/Home/Shared/Footer/Footer";

const Main = () => {
    const [isVisible, setIsVisible] = useState(true);
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp');

    useEffect(() => {
        const timeout = setTimeout(() => {
        setIsVisible(false);
        }, 1000);
        return () => clearTimeout(timeout);
    }, []);
    
    return (
          <div>
            {isVisible ? <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-red-500"></div>
                </div> : <div className="bg-[#24272B]">
                        <Outlet></Outlet>
                        {noHeaderFooter || <Footer></Footer>}
                </div> }
            </div>
    );
};

export default Main;