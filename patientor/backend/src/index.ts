import express from 'express';
import diagnosisRouter from './routes/diagnosises.ts';

const app = express();
app.use(express.json());


app.get('/api/ping',(_req,res) => {
    console.log('someone pinged here');
    res.send('pong');
});

app.use('/api/diagnoses',diagnosisRouter);

app.get('/api/patients', (req,res) => {
    console.log(req.body);
    res.send('patient list');
});

const PORT = 3000;

app.listen(PORT, () =>{
    console.log(`Serve is running on port ${PORT}`);
});