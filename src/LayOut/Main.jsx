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
