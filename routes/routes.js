const express = require('express');

const contectUsController = require('../controller/contect_us');


const router = express.Router();
//authentication
router.post('/contect-us', contectUsController.contectUs);
router.post('/get-quot', contectUsController.getquotation);




module.exports = router;