import LeadController from "../controller/lead.controller";
const express = require('express');
const router = express.Router();


router.post('/leads', LeadController.addNewLead);
router.get('/leads', LeadController.getAllLead);

export default router;