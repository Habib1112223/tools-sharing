import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import { useEffect, useState } from 'react';
const Main = () => {
      const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <div>
        {isLoading ? (
            <>
                <div className="flex flex-col items-center justify-center h-screen">
                    <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 border-dashed border-t-orange-500 border-b-orange-500 border-r-blue-500 border-l-blue-500 animate-spin h-12 w-12"></div>
                    <h1 className="text-2xl font-bold text-center">
                        <span className="text-red-600">T</span>
                        <span className="text-green-600">O</span>
                        <span className="text-blue-600">O</span>
                        <span className="text-yellow-600">L</span>
                        <span className="text-indigo-600">S</span>
                        <span className="text-pink-600"> </span>
                        <span className="text-teal-600">A</span>
                        <span className="text-purple-600">N</span>
                        <span className="text-red-600">D</span>
                        <span className="text-blue-600"> </span>
                        <span className="text-orange-600">S</span>
                        <span className="text-green-600">H</span>
                        <span className="text-indigo-600">A</span>
                        <span className="text-pink-600">R</span>
                        <span className="text-yellow-600">I</span>
                        <span className="text-teal-600">N</span>
                        <span className="text-purple-600">G</span>
                        <span className="text-red-600"> </span>
                        <span className="text-green-600">W</span>
                        <span className="text-blue-600">E</span>
                        <span className="text-orange-600">B</span>
                        <span className="text-indigo-600">S</span>
                        <span className="text-yellow-600">I</span>
                        <span className="text-teal-600">T</span>
                        <span className="text-pink-600">E</span>
                        <span className="text-red-600"> </span>
                    </h1>
                </div>
            </>

        ) : (
            <>
                <Navbar />
                <Outlet />
                <Footer />
            </>
        )}
    </div>
  );
};

export default Main;
