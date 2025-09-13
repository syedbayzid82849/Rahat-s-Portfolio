import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const HomeLayout = () => {
    return (
        <div className="flex flex-col min-h-screen ">
            <Navbar />
            <main className="flex-grow mx">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default HomeLayout;