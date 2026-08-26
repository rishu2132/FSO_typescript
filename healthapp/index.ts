import express from 'express';
import calculateBmi from './bmiCalculator.ts';
import { calculateExercises } from './exerciseCalculator.ts';
const app = express();

app.use(express.json());
app.get('/hello',(_req, res) => {
    res.send('Hello FullStack!');
});

app.get('/bmi', (req,res) => {
    const height = Number(req.query.height);
    const weight = Number(req.query.weight);

    if(!isNaN(height) && !isNaN(weight)){
        const bmi = calculateBmi(height,weight);
        res.send({
            height,
            weight,
            bmi
        });
    } else {
        res.status(400).send({
            error: "malformatted parameters"
        });
    }


});

app.post('/exercises', (req,res) => {

    const { daily_exercises , target } = req.body;
   
    if(!target || !daily_exercises){
        return res.status(400).send({error: 'parameters missing'});
    }

    const allNumbers: number[] = daily_exercises.map(Number);

    if(Number(target) && !allNumbers.some(isNaN)){
        const result = calculateExercises(allNumbers,target);
        return res.send(result);
    } 

    return res.status(400).send({error: 'malformatted parameters'});
    
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});