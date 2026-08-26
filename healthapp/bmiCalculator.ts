interface Input {
    height: number,
    weight: number
}


const parseArguments = (argv:string[]): Input => {
    if (argv.length > 4)throw new Error('too much arguments');
    if (argv.length < 4)throw new Error('Not sufficient arguments');

    if (!isNaN(Number(argv[2])) && !isNaN(Number(argv[3]))){
        return {
            height: Number(argv[2]),
            weight: Number(argv[3])
        }
    } else {
        throw new Error ('argument was not number')
    }
}



const calculateBmi = (height: number, weight: number) => {
    if (height === 0) throw new Error('height cannot be zero');

    const bmi = weight / ((height/100)**2);
    if (bmi < 18.5) return 'Underweight';
    else if (bmi >= 18.5 && bmi <=25) return 'Normal range';
    else if (bmi > 25 && bmi <= 30) return 'Overweight';
    else return "Obese";
}


if(process.argv[1] === import.meta.filename){
    try {
        const {height, weight} = parseArguments(process.argv);
        console.log(calculateBmi(height, weight));
    } catch (error: unknown){
        let errorMessage = "Something bad happend.";
        if (error instanceof Error){
            errorMessage += "Error: " + error.message;
        }
        console.log(errorMessage);
    }
}
export default calculateBmi;