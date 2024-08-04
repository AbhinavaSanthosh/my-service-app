import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ServiceProvidersList = () => {
    const [serviceType, setServiceType] = useState('');
    const [serviceProviders, setServiceProviders] = useState([]);

    useEffect(() => {
        const fetchServiceProviders = async () => {
            const { data } = await axios.get('/api/serviceProviders', { params: { serviceType } });
            setServiceProviders(data);
        };
        fetchServiceProviders();
    }, [serviceType]);

    return (
        <div>
            <h1>Service Providers</h1>
            <select value={serviceType} onChange={(e) => setServiceType(e.target.value)}>
                <option value="">Select Service Type</option>
                <option value="plumber">Plumber</option>
                <option value="electrician">Electrician</option>
                <option value="carpenter">Carpenter</option>
                <option value="steelFixer">Steel Fixer</option>
                <option value="generalLabor">General Labor</option>
                {/* Add other service types */}
            </select>
            <ul>
                {serviceProviders.map((provider) => (
                    <li key={provider._id}>
                        <h2>{provider.name}</h2>
                        <p>{provider.serviceType}</p>
                        <p>{provider.address}</p>
                        <p>{provider.mobile}</p>
                        <button>Contact</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServiceProvidersList;
