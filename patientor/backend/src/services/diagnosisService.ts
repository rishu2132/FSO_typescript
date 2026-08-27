import diagnosisData from '../../data/diagnoses.ts';
import type { Diagnosis } from '../types.ts';

const getAll = (): Diagnosis[] => {
    return diagnosisData;
};

export default {
    getAll
}