export interface Diagnosis {
    code: string;
    name: string;
    latin?: string;
}

export interface Patients {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: Gender;
    occupation: string;
}

export const Gender = {
    male: 'male',
    female: 'female',
    other: 'other'
} as const;

export type Gender = typeof Gender[keyof typeof Gender];

export type NonSensitivePatientsEntry = Omit<Patients,"ssn">;

export type Patient = Omit<Patients,"id">;