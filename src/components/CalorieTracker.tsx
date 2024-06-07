import { useMemo } from "react"
import type { Activity } from "../types"
import CalorieDisplay from "./CalorieDisplay"

type CalorieTrackerProps = {
    activities: Activity[]
}
export default function CalorieTracker( { activities } : CalorieTrackerProps ) {

    //Counters
    const caloriesConsumed = useMemo(() => activities.reduce( 
        ( accumulator, activity ) => 
            activity.category === 1 ? accumulator + activity.calories : accumulator, 0 ), [activities])

    const caloriesBurned = useMemo(() => activities.reduce(
        ( accumulator, activity ) => 
            activity.category === 2 ? accumulator + activity.calories : accumulator, 0 ), [activities]) 
    
    const netCalories = useMemo(() => caloriesConsumed - caloriesBurned, [activities]);

  return (
    <>
        <h2 className="text-4xl font-black text-white text-center">Calorie Summary</h2>

        <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
            <CalorieDisplay 
                calories={caloriesConsumed}
                text="Consumed"    
            />

            <CalorieDisplay 
                calories={caloriesBurned}
                text="Bourned"    
            />

            <CalorieDisplay 
                calories={netCalories}
                text="Diference"
            />
        </div>
    </>

  )
}
