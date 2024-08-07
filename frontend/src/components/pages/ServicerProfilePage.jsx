import React from 'react';
import axios from 'axios';
import serviceProfile0 from '../../assets/serviceProfile0.jpg';


const ServicerProfilePage = () => {
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
                    <div className="lg:mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        89
                      </span>
                      <span className="text-sm text-blueGray-400">Requests</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
                <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                  Name
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                  location
                </div>
                <div className="mb-2 text-blueGray-600 mt-10">
                  <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                  service - type
                </div>
                <div className="mb-2 text-blueGray-600 mt-10">
                  <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                  mobile
                </div>
                <div className="mb-2 text-blueGray-600 ">
                  <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                  Adhar/Pan
                </div>
                <div className="mb-2 text-blueGray-600 ">
                  <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                  email
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
