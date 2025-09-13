import React from 'react';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div className="flex flex-col min-h-screen ">
            <Navbar />
            <main className="flex-grow ">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default HomeLayout;