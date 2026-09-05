import express, {type Response} from 'express';
import patientService from '../services/patientService.ts';

import type { NonSensitivePatientsEntry } from '../types.ts';
const router = express.Router();


router.get('/',(_req,res: Response<NonSensitivePatientsEntry[]>) => {
    res.send(patientService.getNonSensitivePatientEntry());
});

router.post('/',(req,res) => {
    const data = req.body;
    res.send(patientService.addPatient(data));
});

export default router;