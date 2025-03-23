import React, { useEffect, useState, useCallback } from 'react';
import { FaArrowUp } from "react-icons/fa6";

const TapToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = useCallback(() => {
        setIsVisible(window.scrollY > 300); // Reduced threshold for earlier visibility
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    return (
        <>
            {isVisible && (
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className='w-10 h-10 bg-yellow-500 p-3 rounded-full shadow-xl fixed bottom-10 right-5 z-50 cursor-pointer text-gray-900 opacity-80 hover:opacity-100 hover:scale-110 transition duration-300'
                    aria-label="Scroll to Top"
                >
                    <FaArrowUp />
                </button>
            )}
        </>
    );
}

export default TapToTop;