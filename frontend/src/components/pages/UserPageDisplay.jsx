import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const UserPageDisplay = () => {
    const location = useLocation();
    const profession = location.state?.profession || 'Unknown';
    const servicerType = profession;

    const [servicesData, setServicesData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('http://localhost:5000/api/serviceProviders/servicerdata', { servicerType });
                setServicesData(response.data);
            } catch (err) {
                console.error("Error in fetching data", err);
            }
        };

        fetchData();
    }, [servicerType]);

    return (
        <div className=''>
            <h2 className="text-2xl font-bold mb-4">Service Providers Info</h2>
            <div className="space-x-4 flex">
                {servicesData.map((provider, index) => (
                    <div key={index} className="w-96 px-6 py-6 text-center bg-gray-800 rounded-lg lg:mt-0 xl:px-10">
                        <div className="space-y-4 xl:space-y-6">
                            <img className="mx-auto rounded-full h-36 w-36" src="https://thispersondoesnotexist.com/image" alt="author avatar" />
                            <div className="space-y-2">
                                <div className="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
                                    <h3 className="text-white">{provider.name}</h3>
                                    <p className="text-white">{provider.email}</p>
                                    <p className="text-white">Mobile: {provider.mobile}</p>
                                    <p className="text-white">City: {provider.city}</p>
                                    <p className="text-white">Service Type: {provider.serviceType}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserPageDisplay;
