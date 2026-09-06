import type { Patient } from "./types.ts";
import { Gender } from "./types.ts";


const parseNewPatient = (object: unknown): Patient => {
    
    if (!object || typeof object !== 'object'){
        throw new Error('Incorrect or missing data');
    }

    if ('name' in object && 'ssn' in object && 'occupation' in object && 'dateOfBirth' in object && 'gender' in object    ){
        const newEntry : Patient = {
            name: parseName(object.name),
            ssn: parseSSN(object.ssn),
            occupation: parseOccupation(object.occupation),
            gender: parseGender(object.gender),
            dateOfBirth: parseDate(object.dateOfBirth) 
            };

        return newEntry;
    }
   
    throw new Error ('some fiels are missing');
};

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};


const parseName = (name: unknown): string => {
    if (!name || !isString(name) || !isNaN(Number(name))){
        throw new Error ('incorrect or missing name');
    }

    return name;
};

const parseOccupation = (name: unknown): string => {
    if (!name || !isString(name) || !isNaN(Number(name))){
        throw new Error ('incorrect or missing occupation');
    }

    return name;
};

const parseSSN = (ssn: unknown): string => {
    if (!ssn || !isString(ssn) || !isNaN(Number(ssn))){
        throw new Error ('incorrect or missing ssn');
    }

    return ssn;
};

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
};

const parseDate = (date: unknown): string => {
    if (!date || !isString(date) || !isDate(date)){
        throw new Error ('incorrect or missing date: ' + date);

    }
    return date;
};

const isGender = (text: string): text is Gender => {
    return (Object.values(Gender) as string[]).includes(text);
};

const parseGender = (gender: unknown): Gender => {
    if (!gender || !isString(gender) || !isGender(gender)){
        throw new Error ('Incorrect or missing gender: '+ gender);
    }
    return gender;
};

export default parseNewPatient;