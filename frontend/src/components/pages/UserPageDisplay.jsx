import React from 'react';

const UserPageDisplay = ({ servicers }) => {
  console.log('UserPageDisplay', servicers);
    return (
        <div>
            <h2>Service Provider Info</h2>
            {servicers.map((provider, index) => (
                <div key={index}>
                    <p>Name: {provider.name}</p>
                    <p>Email: {provider.email}</p>
                    <p>Mobile: {provider.mobile}</p>
                    <p>City: {provider.city}</p>
                    <p>Address: {provider.address}</p>
                    <p>Service Type: {provider.serviceType}</p>
                    <p>Adhar/Pan: {provider.adharOrPan}</p>
                    {/* Render other information as needed */}
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default UserPageDisplay;
