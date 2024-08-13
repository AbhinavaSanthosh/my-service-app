const { response } = require('express');
const ServiceProvider = require('../models/ServiceProvider');
const generateToken = require('../utils/generateToken');

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

const servicerProfile = async (req, res) => {
    const {email1} = req.body;
    const ServiceProviderdata = await ServiceProvider.findOne({ email: email1 });
    if(ServiceProviderdata){
        res.json({
            name : ServiceProviderdata.name,
            email : ServiceProviderdata.email,
            mobile : ServiceProviderdata.mobile,
            city : ServiceProviderdata.city,
            address : ServiceProviderdata.address,
            serviceType : ServiceProviderdata.serviceType,
            adharOrPan: ServiceProviderdata.adharOrPan
        });
    }else{
        res.status(200).send({message: 'No data found'});
    }
    
}

module.exports = { registerServiceProvider, servicerLogin, servicerdata, servicerProfile};
