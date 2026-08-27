import express from 'express';
import diagnosisRouter from './routes/diagnosises.ts';
import patientRouter from './routes/patient.ts';

const app = express();
app.use(express.json());


app.get('/api/ping',(_req,res) => {
    console.log('someone pinged here');
    res.send('pong');
});

app.use('/api/patients',patientRouter);
app.use('/api/diagnoses',diagnosisRouter);


const PORT = 3000;

app.listen(PORT, () =>{
    console.log(`Serve is running on port ${PORT}`);
});