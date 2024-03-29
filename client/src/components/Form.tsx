import { useState, ChangeEvent, FormEvent, Dispatch } from "react"
import { Activity } from "../types/Index"
import { categories } from "../data/data"
import { ActivityActions } from "../reducers/activityReducer"

type FormProps = {
    dispatch: Dispatch<ActivityActions>
}

const Form = ({dispatch} : FormProps) => {

    const initialState = {
        category: 1,
    name: "",
    calories: 0,
    }

const [activity, setActivity] = useState<Activity>(initialState)

const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
const isNumberField = ['category', 'calories'].includes(e.target.id)

    setActivity({   
        ...activity,
        [e.target.id]: isNumberField? +e.target.value : e.target.value
    })
}

const isValidActivity = () => {
    const { name, calories} = activity
    return name.trim() !== '' && calories > 0
}

const handleSubmit = (e: FormEvent<HTMLFormElement>) => { 
   e.preventDefault()
   dispatch({ type: "save-activity", payload: {newActivity : activity}})
   setActivity(initialState)
}

  return (
    <div className="bg-lime-500 py-20 px-5">
      <div className="max-w-4xl mx-auto">
        <form
        className="space-y-5 bg-white shadow p-10 rounded-lg"
        onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-3">
                <label className="font-bold" htmlFor="category">Categoria:</label>
                <select 
                className="border border-slate-300 p-2 rounded-lg w-full bg-white" 
                value={activity.category} 
                id="category"
                onChange={handleChange}>
                {categories.map(category => (
                    <option 
                    key={category.id}
                    value={category.id}>
                        {category.name}
                    </option>
                ))

                }
                </select>
            </div>
           
           <div className="grid grid-cols-1 gap-3">
            <label className="font-bold" htmlFor="name">Actividad:</label>
            <input
            className="border border-slate-00 p-2 rounded-lg" 
            id="name"
            type="text" 
            placeholder="Ej. Comida, Jugo de naranja, Ensalada, Ejercicio, Pesas, Bicicleta"
            value={activity.name}
            onChange={handleChange}/>
            </div>
            
            <div className="grid grid-cols-1 gap-3">
            <label className="font-bold" htmlFor="calories">Calorias:</label>
            <input
            className="border border-slate-00 p-2 rounded-lg" 
            id="calories"
            type="number" 
            placeholder="Calorias. ej. 300"
            value={activity.calories}
            onChange={handleChange}/>
            </div>

            <input 
            className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase
             text-white cursor-pointer disabled:opacity-10"
            type="submit"
            value={activity.category === 1? 'Guardar comida' : 'Guardar ejercicio'}
            disabled= {!isValidActivity()} />
        </form>
      </div>
    </div>
  )
}

export default Form
