import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import serviceProfile0 from '../../assets/serviceProfile0.jpg';
import location from '../../assets/location.png';


const ServicerProfilePage = () => {
  const location = useLocation();
  const { email1 } = location.state || {};
  const [profileData, setProfileData] = useState({});
  
  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const response = await axios.post('http://localhost:5000/api/serviceProviders/servicerProfile', { email1 });
        const data = response.data;
        setProfileData(data);
      } catch (error) {
        console.error('Error in fetching:', error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div>
      <section className="pt-16 bg-blueGray-50">
        <div className="w-full lg:w-6/12 px-4 mx-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full px-4 text-center mt-20">
                  <div className="flex justify-center py-9 lg:pt-4 pt-8">
                    <img alt="..." src={serviceProfile0} className="shadow-lg rounded-full h-52 align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-80-px" />
                  </div>
                </div>
              </div>
              <div className="text-center mt-36">
                <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                  Name : {profileData.name}
                </h3>
                <img src={location} alt=""/>
                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                  city : {profileData.city}
                </div>
                <div className="mb-2 text-blueGray-600 mt-10 font-bold">
                  <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                  ServiceType : {profileData.serviceType}
                </div>
                <div className="mb-2 text-blueGray-600 font-bold">
                  <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400 "></i>
                  phn no : {profileData.mobile}
                </div>
                <div className="mb-2 text-blueGray-600 font-bold ">
                  <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                  Adhar/Pan : {profileData.adharOrPan}
                </div>
                <div className="mb-4 text-blueGray-600 font-bold ">
                  <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                  email : {profileData.email}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicerProfilePage;
