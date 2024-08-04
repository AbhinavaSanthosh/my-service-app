const User = require('../models/User');
const generateToken = require('../utils/generateToken');

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });

    console.log("New registration", user)
    if (!user) {
        return res.status(400).json({ message: 'User Created' });
    }

    await user.save();
    res.status(201).json({ 
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
    });
};

const authUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
        res.status(200).json({ 
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
};

module.exports = { registerUser, authUser };
