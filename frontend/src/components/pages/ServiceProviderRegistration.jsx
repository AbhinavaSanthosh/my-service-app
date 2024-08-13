import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const ServiceProviderRegistration = ({ history }) => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const [city, setCity] = useState('');
    const [customCity, setCustomCity] = useState('');
    const [address, setAddress] = useState('');
    const [serviceType, setServiceType] = useState('');
    const [customServiceType, setcustomServiceType] = useState('');
    const [adharOrPan, setAdharOrPan] = useState('');

    const handleCityChange = (e) => {
        const selectedCity = e.target.value;
        if (selectedCity === 'Other') {
            setCustomCity('');
        }
        setCity(selectedCity);
    };

    const handleServiceType = (e) => {
        const serviceType = e.target.value;
        if (serviceType === 'Other') {
            setcustomServiceType('');
        }
        setServiceType(serviceType);
    };

    const handleCustomCityChange = (e) => {
        const value = e.target.value;
        setCustomCity(value);
    };

    const handleCustomServiceType = (e) => {
        const value = e.target.value;
        setcustomServiceType(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const finalCity = city === "Other" ? customCity : city;
            const finalServiceType = serviceType === "Other" ? customServiceType : serviceType;
            const { data } = await axios.post('http://localhost:5000/api/serviceProviders/register', { name, email, password, mobile, city: finalCity, address, serviceType : finalServiceType , adharOrPan });
            localStorage.setItem('serviceProviderInfo', JSON.stringify(data));
            navigate('/ServicerProfilePage',{state :{email1 : email}} );
            console.log('Success:', data);
        }
        catch (error) {
            console.error('Error registering service provider:', error.response ? error.response.data : error.message);
        }
    };

    const cities = [
        "Select city","Agartala", "Agra", "Ahmedabad", "Ahmednagar", "Ajmer", "Akola", "Aligarh", "Allahabad", "Ambattur",
        "Amritsar", "Anantapur", "Asansol", "Aurangabad", "Avadi", "Bangalore", "Bareilly", "Belgaum", "Bellary",
        "Bengaluru", "Berhampur", "Bhagalpur", "Bhatpara", "Bhavnagar", "Bhilai", "Bhilwara", "Bhopal", "Bhubaneswar",
        "Bikaner", "Bilaspur", "Bokaro", "Chandigarh", "Chennai", "Coimbatore", "Cuttack", "Davanagere", "Dehradun",
        "Delhi", "Dhanbad", "Durgapur", "Erode", "Faridabad", "Ghaziabad", "Gopalpur", "Gulbarga", "Gurgaon", "Guwahati",
        "Gwalior", "Haridwar", "Howrah", "Hubli-Dharwad", "Hyderabad", "Indore", "Jabalpur", "Jaipur", "Jalandhar",
        "Jalgaon", "Jamnagar", "Jamshedpur", "Jhansi", "Jodhpur", "Kadapa", "Kalyan-Dombivli", "Kamarhati", "Kanpur",
        "Kharagpur", "Kochi", "Kolhapur", "Kolkata", "Kollam", "Kota", "Kozhikode", "Kurnool", "Latur", "Loni", "Lucknow",
        "Ludhiana", "Madurai", "Maheshtala", "Mangalore", "Mathura", "Meerut", "Moradabad", "Muzaffarnagar",
        "Muzaffarpur", "Mysore", "Nagpur", "Nanded", "Nashik", "Navi Mumbai", "New Delhi", "Panihati", "Patiala", "Patna",
        "Pondicherry", "Pune", "Purnia", "Raipur", "Rajahmundry", "Rajkot", "Ranchi", "Rohtak", "Salem", "Siliguri",
        "Solapur", "South Dumdum", "Srinagar", "Surat", "Tiruchirappalli", "Tirunelveli", "Tiruppur", "Thane",
        "Thiruvananthapuram", "Udaipur", "Ulhasnagar", "Vadodara", "Varanasi", "Vasai-Virar", "Vijayawada",
        "Visakhapatnam", "Warangal", "Other"
    ];

    const serviceProviderRoles = [
        "Select service provider","AC Repair Technician", "Appliance Repair Technician(e.g., refrigerator, washing machine)",
        "Babysitter / Nanny", "Bike Mechanic", "Car Mechanic", "Carpenter", "Computer / IT Support Technician",
        "Cook / Chef", "Courier / Delivery Service", "Driver", "Electrician", "Event Planner",
        "Gardener", "Handyman", "House Cleaner", "Laundry / Ironing Service", "Makeup Artist",
        "Massage Therapist", "Mason", "Painter", "Pest Control Technician", "Personal Trainer / Fitness Instructor",
        "Pet Groomer", "Photographer / Videographer", "Plumber", "Security Guard", "Tailor",
        "Tutor", "Welder", "Yoga Instructor", "Other"
    ];


    return (
        <div>
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                <h1 className="text-lg font-semibold mt-8 mb-4">Service Provider Registration</h1>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Username</label>
                <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                        </svg>
                    </span>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
                </div>
                <label htmlFor="email-address-icon" className="block mb-2 mt-2 text-sm font-medium text-gray-900">Your Email</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                        </svg>
                    </div>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required />
                </div>
                <label htmlFor="password" className="block mb-2 mt-2 text-sm font-medium text-gray-900">Password</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M17 8h-1V6a5 5 0 0 0-10 0v2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2ZM7 6a3 3 0 0 1 6 0v2H7V6Zm3 10a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z" />
                        </svg>
                    </div>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required />
                </div>

                <label htmlFor="mobile" className="block mb-2 mt-2 text-sm font-medium text-gray-900">Mobile Number</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                            <path d="M16 13.01a3.019 3.019 0 0 1-.714 1.95l-2.045 2.518a2.99 2.99 0 0 1-1.95.954 15.823 15.823 0 0 1-7.104-1.501 15.934 15.934 0 0 1-4.65-3.6A15.934 15.934 0 0 1 .03 6.035a15.822 15.822 0 0 1 1.502-7.103A2.99 2.99 0 0 1 2.486.98L5.003 2.41a3.02 3.02 0 0 1 .714 1.95c0 .75-.27 1.49-.714 2.04L4.417 8.42a12.54 12.54 0 0 0 5.578 5.578l2.518-2.045a3.02 3.02 0 0 1 2.04-.714c.75 0 1.49.27 2.04.714L16 13.01Z" />
                        </svg>
                    </div>
                    <input type="text" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mobile Number" required />
                </div>

                <label htmlFor="adharOrPan" className="block mb-2 mt-2 text-sm font-medium text-gray-900">Adhar/PAN</label>
                <input type="text" id="adharOrPan" value={adharOrPan} onChange={(e) => setAdharOrPan(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-2.5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Adhar or PAN" required />

                <label htmlFor="serviceType" className="block mb-2 mt-2 text-sm font-medium text-gray-900">Service Type</label>
                <select
                    id="serviceType" value={serviceType} onChange={handleServiceType}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                    {serviceProviderRoles.map((serviceType) => (
                        <option key={serviceType} value={serviceType}>{serviceType}</option>
                    ))}
                </select>
                {serviceType === 'Other' && (
                    <div className="mt-2">
                        <label htmlFor="customServiceType" className="block mb-2 text-sm font-medium text-gray-900">Enter your serviceType</label>
                        <input
                            type="text"
                            id="customServiceType"
                            value={customServiceType}
                            onChange={(e) => handleCustomServiceType(e)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                    </div>
                )}
                <label htmlFor="city" className="block mb-2 mt-2 text-sm font-medium text-gray-900">City</label>
                <select
                    id="city" value={city} onChange={handleCityChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                    {cities.map((city) => (
                        <option key={city} value={city}>{city}</option>
                    ))}
                </select>
                {city === 'Other' && (
                    <div className="mt-2">
                        <label htmlFor="customCity" className="block mb-2 text-sm font-medium text-gray-900">Enter your city</label>
                        <input
                            type="text"
                            id="customCity"
                            value={customCity}
                            onChange={(e) => handleCustomCityChange(e)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                    </div>
                )}

                <label htmlFor="address" className="block mb-2 mt-2 text-sm font-medium text-gray-900">Address</label>
                <textarea id="address" value={address} onChange={(e) => setAddress(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Address" required></textarea>
                <button type="submit" className="mt-4 bg-[#202e4c] border-2 font-semibold text-white py-2 px-4 rounded-lg hover:bg-slate-50 hover:text-black hover:border-slate-950 ">
                    Register
                </button>
            </form>
        </div>
    );
};

export default ServiceProviderRegistration;
