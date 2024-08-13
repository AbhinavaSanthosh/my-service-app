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
        <div className='p-6'>
            <h2 className="text-2xl font-bold mb-4">Service Providers Info</h2>
            <div className="flex flex-wrap gap-14">
                {servicesData.map((provider, index) => (
                    <div key={index} className="w-full md:w-80 px-6 py-6 text-center bg-gray-800 rounded-lg">
                        <div className="space-y-4 xl:space-y-6">
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
            <h1 className='mt-64'>Service providers</h1>
        </div>

    );
};

export default UserPageDisplay;
