import React from 'react';
import { Link } from 'react-router-dom';
import navlogo from '../assets/nav-logo.png';

const Navbar = () => {
    return (
        // <nav classNameName='h-25 p-3 flex flex-wrap bg-white border-gray-200 dark:bg-gray-300'>
        //     <img classNameName="w-20" src={navlogo} alt="" />
        //     <h1 classNameName='font-bold text-4xl'>services</h1>
        //     <ul classNameName="flex  w-full justify-end">
        //         <li classNameName='list-none'><Link to="./">Home</Link></li>
        //         <li><Link to="/user/login">User</Link></li>
        //         <li><Link to="/servicer/login">Servicer</Link></li>
        //     </ul>
        // </nav>


        <nav className="bg-white border-gray-200 dark:bg-gray-900 h-25">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={navlogo} className="h-12" alt="" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Services</span>
                </a>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page"><Link to="./">Home</Link></a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><Link to="/user/login">User</Link></a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><Link to="/servicer/login">Servicer</Link></a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    );
};

export default Navbar;
