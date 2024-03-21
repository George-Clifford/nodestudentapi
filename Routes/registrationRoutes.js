const express = require("express")
const registrationController = require('../controller/registrationController')
const router = express.Router();

router.post('/addRegistration', registrationController.addRegistration)
router.get("/getAllRegistrations", registrationController.getAllRegistrations);

module.exports = router;