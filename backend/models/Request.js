const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    serviceProvider: { type: mongoose.Schema.Types.ObjectId, ref: 'ServiceProvider', required: true },
    message: { type: String, required: true },
    status: { type: String, default: 'pending' },
}, { timestamps: true });

module.exports = mongoose.model('Request', requestSchema);
