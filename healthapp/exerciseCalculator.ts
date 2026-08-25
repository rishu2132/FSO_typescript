interface Result {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number

}

interface WorkHours {
    days: number[],
    target: number
}


const enterArguments = (argv: string[]): WorkHours  => {
    if (argv.length < 4) throw new Error ('insufficient arguments. Need more arguments.');

    if ((argv.filter(n => isNaN(Number(n)))).length === 2){
        let daysArr = argv.slice(3);
        console.log(daysArr)
        return {
            days:daysArr.map(n => Number(n)),
            target: Number(argv[2])
        }
    } else {
        throw new Error ('all arguments are not numbers (required input) ')
    }
}



const calculateExercises = (hours:number[], target: number):Result => {
    const average = (hours.reduce((s,n) => s+n,0))/hours.length;
    let rating: number;
    let ratingDescription: string;
    if (average >= target){
        rating =3 ;
        ratingDescription = "Keep up the good work"
    } else if( average > target - 0.5){
        rating = 2;
        ratingDescription = "can do better , work hard";
    } else {
        rating = 1;
        ratingDescription = "need to focus and diligent";
    }
    return {
        periodLength: hours.length,
        trainingDays: (hours.filter(n => n !== 0)).length,
        success: target === average,
        target: target,
        average: average,
        rating:rating,
        ratingDescription:ratingDescription 
    }
}


try {
    const {days, target} = enterArguments(process.argv);
    console.log(calculateExercises(days,target));

} catch (error: unknown){
    let errorMessage = 'Something bad happened.';
    if (error instanceof Error){
        errorMessage += "Error: " + error.message;
    }
    console.log(errorMessage);
}