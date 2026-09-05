import patientsData from '../../data/patients.ts';
import type { Patients,NonSensitivePatientsEntry, Patient } from '../types.ts';
import {v4 as uuidv4} from 'uuid';

const getAll = (): Patients[] => {
    return patientsData;
};

const getNonSensitivePatientEntry = ():NonSensitivePatientsEntry[] => {
    return patientsData.map(({id, name, dateOfBirth, gender, occupation}) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};

const addPatient = (data:Patient): Patients => {
    const patient = {
        id:uuidv4(),
        ...data
    };
    patientsData.push(patient);
    return patient;

};

export default {
    getAll,
    getNonSensitivePatientEntry,
    addPatient
};