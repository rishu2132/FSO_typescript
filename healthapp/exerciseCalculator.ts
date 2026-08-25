interface Result {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number

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


console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1],2))