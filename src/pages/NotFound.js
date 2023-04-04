import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className="text-center flex justify-center items-center flex-col min-h-screen font-poppins">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold animate-bounce pb-5">Oops!</h1>
            <p className="text-xl md:text-4xl font-medium pb-5">404 - Page Not Found!</p>
            <p className="max-w-xl text-sm w-3/4 md:text-xl pb-5">The page you are looking for might have been removed had its name changed or is temporary unavailable.</p>
            <button className="bg-primary text-sm md:text-xl font-medium px-3 py-2 rounded-lg" onClick={() => navigate('/')}>Back to Home</button>
        </div>


    )
}

export default NotFound;