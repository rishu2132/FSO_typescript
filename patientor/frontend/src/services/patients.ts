import axios from "axios";
import { Patient, PatientFormValues } from "../types";



const getAll = async () => {
  const { data } = await axios.get<Patient[]>(
    `/api/patients`
  );

  return data;
};

const create = async (object: PatientFormValues) => {
  const { data } = await axios.post<Patient>(
    `/api/patients`,
    object
  );

  return data;
};

export default {
  getAll, create
};

