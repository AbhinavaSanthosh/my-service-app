const express = require('express');
const {
    registerServiceProvider,
    servicerLogin,
    servicerdata
} = require('../controllers/serviceProviderController');

const router = express.Router();

// router.post('/sendOtp', sendOTP);

router.post('/register', registerServiceProvider);
router.post('/serLogin',servicerLogin);
router.post('/servicerdata',servicerdata);
// router.post('/login', authServiceProvider);
// router.post('/verifyOtp', verifyOTP);
// router.get('/', getServiceProviders);

module.exports = router;
