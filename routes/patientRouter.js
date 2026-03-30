const express = require('express');

const router = express.Router();

const{getPatient,createPatient,updatePatient, deletePatient} = require('../controllers/patientController');

router.get("/patient",getPatient);
router.post("/patient",createPatient);
router.put("/patient/:id",updatePatient);
router.delete("/patient/:id",deletePatient);

module.exports = router;