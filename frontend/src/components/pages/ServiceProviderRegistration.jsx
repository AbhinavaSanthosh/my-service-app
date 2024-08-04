import axios from 'axios';
import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const ServiceProviderRegistration = ({ history }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [serviceType, setServiceType] = useState('');
    const [adharOrPan, setAdharOrPan] = useState('');
    // const [otp, setOtp] = useState('');
    // const [isOtpSent, setIsOtpSent] = useState(false);
    // const navigate = useNavigate();

    // const handleSendOtp = async () => {
    //     try {
    //         // Send OTP to the mobile number
    //         await axios.post('http://localhost:5000/api/serviceProviders/sendOtp', { mobile });
    //         setIsOtpSent(true);
    //     } catch (error){
    //         console.error('Error sending OTP:', error);
    //     }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // try {
        //     // Verify OTP
        //     const otpResponse = await axios.post('http://localhost:5000/api/serviceProviders/verifyOtp', { mobile, otp });
        //     if (otpResponse.data.success) {
        //         const { data } = await axios.post('http://localhost:5000/api/serviceProviders/register', { name, email, password, mobile, address, serviceType, adharOrPan });
        //         localStorage.setItem('serviceProviderInfo', JSON.stringify(data));
        //         history.push('/servicer/home');
        //     } else {
        //         alert('Invalid OTP');
        //     }
        // } catch (error) {
        //     console.error('Error registering service provider:', error);
        // }
        try {
            const { data } = await axios.post('http://localhost:5000/api/serviceProviders/register', { name, email, password, mobile, city, address, serviceType, adharOrPan });
            localStorage.setItem('serviceProviderInfo', JSON.stringify(data));
            // history.push('/servicer/home');
            // navigator('/');
            console.log('Success:', data);
        }
        catch (error){
            console.error('Error registering service provider:', error.response ? error.response.data : error.message);
        }
    };

    const cities = [
        "Mumbai", "Delhi", "Bengaluru", "Hyderabad", "Ahmedabad", "Chennai", "Kolkata",
        "Pune", "Jaipur", "Surat", "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane",
        "Bhopal", "Visakhapatnam", "Patna", "Vadodara", "Ghaziabad", "Ludhiana",
        "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot", "Kalyan-Dombivli", "Vasai-Virar",
        "Varanasi", "Srinagar", "Aurangabad", "Dhanbad", "Amritsar", "Navi Mumbai",
        "Allahabad", "Ranchi", "Howrah", "Coimbatore", "Jabalpur", "Gwalior", "Vijayawada",
        "Jodhpur", "Madurai", "Raipur", "Kota", "Guwahati", "Chandigarh", "Solapur",
        "Hubli-Dharwad", "Bareilly", "Mysore", "Tiruchirappalli", "Tiruppur", "Salem",
        "Aligarh", "Gurgaon", "Jalandhar", "Thiruvananthapuram", "Bhubaneswar", "Moradabad",
        "Jamshedpur", "Asansol", "Durgapur", "Nanded", "Kolhapur", "Ajmer", "Gulbarga",
        "Jamnagar", "Ujjain", "Loni", "Siliguri", "Jhansi", "Ulhasnagar", "Mangalore",
        "Erode", "Belgaum", "Ambattur", "Tirunelveli", "Malegaon", "Gaya", "Jalgaon",
        "Udaipur", "Maheshtala", "Davanagere", "Kozhikode", "Akola", "Kurnool", "Bokaro",
        "South Dumdum", "Bellary", "Patiala", "Gopalpur", "Agartala", "Bhagalpur", "Muzaffarpur",
        "Bhatpara", "Panihati", "Latur", "Dhule", "Rohtak", "Korba", "Bhilwara", "Berhampur",
        "Muzaffarnagar", "Ahmednagar", "Mathura", "Kollam", "Avadi", "Kadapa", "Anantapur",
        "Kamarhati", "Bilaspur", "Kharagpur", "Rajahmundry", "New Delhi", "Warangal",
        "Haridwar", "Bardhaman", "Purnia", "Pondicherry"
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
                <label htmlFor="password" className="
block mb-2 mt-2 text-sm font-medium text-gray-900">Password</label>
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
                    {/* <button type="button" onClick={handleSendOtp} className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-lg">
                        Send OTP
                    </button> */}
                </div>

                {/* {isOtpSent && (
                    <>
                        <label htmlFor="otp" className="block mb-2 mt-2 text-sm font-medium text-gray-900">Enter OTP</label>
                        <input type="text" id="otp" value={otp} onChange={(e) => setOtp(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-2.5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="OTP" required />
                    </>
                )} */}

                <label htmlFor="city" className="block mb-2 mt-2 text-sm font-medium text-gray-900">City</label>
                <select id="city" value={city} onChange={(e) => setCity(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                    {cities.map((city) => (
                        <option key={city} value={city}>{city}</option>
                    ))}
                </select>

                <label htmlFor="address" className="block mb-2 mt-2 text-sm font-medium text-gray-900">Address</label>
                <textarea id="address" value={address} onChange={(e) => setAddress(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Address" required></textarea>

                <label htmlFor="serviceType" className="block mb-2 mt-2 text-sm font-medium text-gray-900">Service Type</label>
                <input type="text" id="serviceType" value={serviceType} onChange={(e) => setServiceType(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-2.5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Service Type" required />

                <label htmlFor="adharOrPan" className="block mb-2 mt-2 text-sm font-medium text-gray-900">Adhar/PAN</label>
                <input type="text" id="adharOrPan" value={adharOrPan} onChange={(e) => setAdharOrPan(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-2.5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Adhar or PAN" required />

                <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">
                    Register
                </button>
            </form>
        </div>
    );
};

export default ServiceProviderRegistration;
