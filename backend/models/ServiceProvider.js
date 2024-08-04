const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const serviceProviderSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        mobile: { type: String, required: true },
        // otp: { type: String, required: true },
        // isVerified: { type: Boolean, default: false },
        city: { type: String, required: true },
        address: { type: String, required: true },
        serviceType: { type: String, required: true },
        adharOrPan: { type: String, required: true },
    },
    { timestamps: true }
);

serviceProviderSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

serviceProviderSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const ServiceProvider = mongoose.model('ServiceProvider', serviceProviderSchema);

module.exports = ServiceProvider;
