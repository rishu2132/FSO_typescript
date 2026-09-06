import express, {type Response, type Request} from 'express';
import patientService from '../services/patientService.ts';

import { newPatientParser, errorMiddleware } from '../middleware.ts';

import type { NonSensitivePatientsEntry, Patient, Patients } from '../types.ts';
const router = express.Router();


router.get('/',(_req,res: Response<NonSensitivePatientsEntry[]>) => {
    res.send(patientService.getNonSensitivePatientEntry());
});

router.post('/',newPatientParser,(req: Request<unknown, unknown, Patient>,res: Response<Patients>) => {
    const data = patientService.addPatient(req.body);
    res.json(data);
});

router.use(errorMiddleware);

export default router;