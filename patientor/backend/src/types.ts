import { z } from 'zod';

export interface Diagnosis {
    code: string;
    name: string;
    latin?: string;
}

export const Gender = {
    male: 'male',
    female: 'female',
    other: 'other'
} as const;

export type Gender = typeof Gender[keyof typeof Gender];

export const NewPatientSchema = z.object({
    name: z.string(),
    ssn: z.string(),
    occupation : z.string(),
    dateOfBirth: z.iso.date(),
    gender: z.enum(Gender)
});

export type Patient = z.infer<typeof NewPatientSchema>;

export interface Patients extends Patient {
    id: string;
}

export type NonSensitivePatientsEntry = Omit<Patients,"ssn">;

