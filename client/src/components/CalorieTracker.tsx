import { useMemo } from "react"
import { Activity } from "../types/Index"
import CalorieDisplay from "./CalorieDisplay"

type CalorieProps = {
   activities: Activity[]
}

const CalorieTracker = ({activities} : CalorieProps) => {
  
  const caloriesConsumed = useMemo(() => activities.reduce((total, activity) => 
  activity.category === 1 ? total + activity.calories : total, 0) ,[activities])
    console.log(caloriesConsumed)
  const caloriesBurned = useMemo(() => activities.reduce((total, activity) => 
  activity.category === 2 ? total + activity.calories : total, 0) ,[activities])

  const netCalories = useMemo(() => caloriesConsumed - caloriesBurned ,[activities])
  return (
    <div className="bg-gray-800 py-10">
      <div className="max-w-4xl mx-auto">
          <h2 
          className="text-4xl font-black text-white text-center">
            Resumen de calorias
          </h2>
          <div 
          className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
         <CalorieDisplay
          calories= {caloriesConsumed}
          text = "Consumidas"/>
         <CalorieDisplay
          calories= {caloriesBurned}
          text = "Ejercicios"/>
          <CalorieDisplay
          calories= {netCalories}
          text = "Diferencia"/>
          </div>
          
      </div>
    </div>
  )
}

export default CalorieTracker
