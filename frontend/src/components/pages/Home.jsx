import React from 'react';
import bg1 from '../../assets/bg1.jpg';

const Home = () => {
    return (
        <div className="pt-96 pb-48 bg-sky-100 w-full pl-10 pr-9">
            <div className="home-content">
                <h1 className="mb-4 text-3xl font-extrabold text-gray-500  md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Welcome to</span> Service Provider App.</h1>
                <p className="text-lg font-normal text-gray-600 lg:text-xl dark:text-gray-600">Find service providers near you based on your current location. Choose from a variety of categories such as plumbers, electricians, carpenters, steel fixers, general labor, and more. Connect easily with service providers through our platform.</p>
            </div>
        </div>
    );
};

export default Home;
