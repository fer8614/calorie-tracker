
type CalorieDisplayProps = {
    calories: number
    text: string
}
export default function CalorieDisplay( { calories, text } : CalorieDisplayProps ) {
  const calorieYet = <p className="text-green-500">{text}</p> 
  const calorieBurned = <p className="text-red-500">{text}</p> 
  const caloriesDiference = <p className="text-white-500">{text}</p>
   
  const typeCalories: () => React.ReactNode = () => {
    if (text === "Consumed") {
      return calorieYet;
    }else if (text === "Bourned") {
      return calorieBurned;
    } else {
      return caloriesDiference
    }
  };


  return (
    <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
                <span className="font-black text-6xl text-orange-500">{calories}</span>
                {typeCalories()}
    </p>

  )
}
