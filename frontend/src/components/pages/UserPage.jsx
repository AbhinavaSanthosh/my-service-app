import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userPage0 from '../../assets/userPage0.png';

const UserPage = () => {
  const navigate = useNavigate();
  const [customProfession, setCustomProfession] = useState('');

  const navigateToUserPageDisplay = (profession) => {
    navigate('/user/pageDisplay', { state: { profession } });
  };

  const handleCustomProfessionSubmit = () => {
    if (customProfession.trim()) {
      navigateToUserPageDisplay(customProfession);
    } else {
      alert("Please enter a valid profession.");
    }
  };

  return (
    <div>
      <div className="p-8">
        <button
          type="button"
          className="text-black border-2 bg-white hover:bg-[#24292F] focus:ring-4 focus:outline-none focus:ring-[#24292F] font-bold rounded-lg text-2xl px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708] me-2 mb-2"
        >
          <img className="w-6 mr-4 rounded-lg" src={userPage0} alt="Service Providers" />
          Services Providers
        </button>
      </div>
      <div className="flex-wrap space-x-14 space-y-12">
        {[
          "Electrician", "Plumber", "Carpenter", "Painter", "AC Repair Technician", "Gardener",
          "House Cleaner", "Cook/Chef", "Driver", "Pest Control Technician", "Mason",
          "Welder", "Tailor", "Tutor", "Babysitter/Nanny", "Pet Groomer",
          "Laundry/Ironing Service", "Security Guard", "Handyman",
          "Computer/IT Support Technician", "Car Mechanic", "Bike Mechanic",
          "Courier/Delivery Service", "Event Planner", "Photographer/Videographer",
          "Makeup Artist", "Personal Trainer/Fitness Instructor",
          "Massage Therapist", "Yoga Instructor",
          "Appliance Repair Technician (e.g., refrigerator, washing machine)"
        ].map((service, index) => (
          <a
            key={index}
            className="relative inline-block text-lg group"
            onClick={() => navigateToUserPageDisplay(service)}
          >
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-full h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-45 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">{service}</span>
            </span>
            <span className="absolute bottom-0 right-0 w-full h-10 -mb-2 -mr-2 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
          </a>
        ))}
      </div>

      {/* Additional Button and Input for Custom Profession */}
      <div className="p-8 mt-8">
        <h1 className='font-bold text-xl'>If others enter the required service provider~</h1>
        <input
          type="text"
          placeholder="required service provider"
          value={customProfession}
          onChange={(e) => setCustomProfession(e.target.value)}
          className="border-2 border-gray-300 p-2 rounded-lg mr-4"
        />
        <button
          type="button"
          onClick={handleCustomProfessionSubmit}
          className="text-white bg-[#132129] hover:bg-[#e6e6e6] hover:text-black  focus:outline-none  font-bold rounded-lg text-xl px-5 py-2.5"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default UserPage;
