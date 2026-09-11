import axios from 'axios';
import type { DiaryEntry } from '../types';

const getAll = () => {
    return axios
        .get<DiaryEntry[]>('/api/diaries')
        .then(response => response.data);

};



export default {getAll};