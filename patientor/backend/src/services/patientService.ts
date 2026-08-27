import patientsData from '../../data/patients.ts';
import type { Patients,NonSensitivePatientsEntry } from '../types.ts';

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
    }))
}

export default {
    getAll,
    getNonSensitivePatientEntry
};