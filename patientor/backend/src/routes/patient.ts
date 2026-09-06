import express, {type Response} from 'express';
import patientService from '../services/patientService.ts';
import parseNewPatient from '../utils.ts';

import type { NonSensitivePatientsEntry } from '../types.ts';
const router = express.Router();


router.get('/',(_req,res: Response<NonSensitivePatientsEntry[]>) => {
    res.send(patientService.getNonSensitivePatientEntry());
});

router.post('/',(req,res) => {
    try {
        const data = parseNewPatient(req.body);
        res.json(patientService.addPatient(data));
    } catch (error : unknown) {
        let errorMessage = "Something bad happened : ";
        if (error instanceof Error){
            errorMessage += 'Error: ' + error.message;
        }
        res.status(400).send(errorMessage);
    }
});

export default router;