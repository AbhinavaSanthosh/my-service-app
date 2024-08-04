import React, { useState } from 'react';
import axios from 'axios';

const ContactServiceProvider = ({ providerId }) => {
    const [message, setMessage] = useState('');

    const handleSendRequest = async () => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        const { data } = await axios.post('/api/requests', { user: userInfo._id, serviceProvider: providerId, message }, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        });
        console.log(data);
    };

    return (
        <div>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" />
            <button onClick={handleSendRequest}>Send Request</button>
        </div>
    );
};

export default ContactServiceProvider;
