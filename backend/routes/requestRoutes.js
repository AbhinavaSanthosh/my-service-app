const express = require('express');
const { createRequest, handleRequest, updateRequestStatus } = require('../controllers/requestController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, createRequest);
router.get('/', protect, handleRequest);
router.put('/:id', protect, updateRequestStatus);

module.exports = router;
