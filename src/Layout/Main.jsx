import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../components/Home/Shared/Footer/Footer";

const Main = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
        setIsVisible(false);
        }, 1000);
        return () => clearTimeout(timeout);
    }, []);
    
    return (
          <div>
            {isVisible ? <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-blue-500"></div>
                </div> : <div>
                        <Outlet></Outlet>
                        <Footer></Footer>
                </div> }
            </div>
    );
};

export default Main;