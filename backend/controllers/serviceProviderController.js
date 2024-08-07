const ServiceProvider = require('../models/ServiceProvider');
const generateToken = require('../utils/generateToken');
// const sendSms = require('../utils/sendSms');

const registerServiceProvider = async (req, res) => {
    const { name, email, password, mobile, city, address, serviceType, adharOrPan } = req.body;
    const serviceProviderExists = await ServiceProvider.findOne({ email });

    if (serviceProviderExists) {
        return res.status(400).json({ message: 'Service Provider already exists' });
    }

    const serviceProvider = new ServiceProvider({
        name, email, password, mobile, city, address, serviceType, adharOrPan
    });
    
    await serviceProvider.save();

    res.status(201).json({ 
        _id: serviceProvider._id,
        name: serviceProvider.name,
        email: serviceProvider.email,
        city: serviceProvider.city,
        serviceType: serviceProvider.serviceType,
        token: generateToken(serviceProvider._id),
    });
};

const servicerLogin = async (req, res) =>{
    const {email, password} = req.body;
    const serviceProvider = await ServiceProvider.findOne({ email });
    if (serviceProvider && (await serviceProvider.matchPassword(password))) {
        // res.json({
        //     _id: serviceProvider._id,
        //     name: serviceProvider.name,
        //     email: serviceProvider.email,
        //     city: serviceProvider.city,
        //     serviceType: serviceProvider.serviceType,
        //     token: generateToken(serviceProvider._id),
        // });
        // console.log("login successful");
        res.json({ message: 'Login successful'});
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
}

const servicerdata = async (req, res) => {
    const {servicerType} = req.body;
    const serviceProvider = await ServiceProvider.find({serviceType : servicerType});
    res.json(serviceProvider);
}

// const verifyOTP = async (req, res) => {
//     const { mobile, otp } = req.body;
//     const serviceProvider = await ServiceProvider.findOne({ mobile });

//     if (serviceProvider && serviceProvider.otp == otp) {
//         serviceProvider.isVerified = true;
//         await serviceProvider.save();
//         res.json({ message: 'OTP verified successfully', success: true });
//     } else {
//         res.status(400).json({ message: 'Invalid OTP', success: false });
//     }
// };

// const sendOTP = async (req, res) => {
//     const { mobile } = req.body;
//     console.log(mobile);
//     const otp = Math.floor(100000 + Math.random() * 900000);
//     await sendSms(mobile, `Your OTP is ${otp}`);
//     // You may want to save the OTP to the database or in-memory store
//     res.status(200).json({ message: 'OTP sent successfully' });
// };

module.exports = { registerServiceProvider, servicerLogin, servicerdata};
