import express from 'express';
import calculateBmi from './bmiCalculator.ts';
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
        })
    } else {
        res.status(400).send({
            error: "malformatted parameters"
        })
    }


})

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})