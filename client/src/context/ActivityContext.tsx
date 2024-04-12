import { createContext, ReactNode, useReducer, Dispatch, useMemo } from "react"
import { ActivityActions, activityReducer, ActivityState, initialState } from "../reducers/activityReducer"
import { categories } from "../data/data"
import { Activity } from "../types/Index"

type ActivityProviderProps = {
    children: ReactNode
}

type ActivityContextProps = {
    state: ActivityState
    dispatch: Dispatch<ActivityActions>
    caloriesConsumed: number
    caloriesBurned: number
    netCalories: number
    categoryName: (category: Activity["category"]) => string[]
    isEmply: boolean
}

export const ActivityContext = createContext<ActivityContextProps>(null!)

export const ActivityProvider = ({ children }: ActivityProviderProps) => {

    const [state, dispatch] = useReducer(activityReducer, initialState)

    const caloriesConsumed = useMemo(() => state.activities.reduce((total, activity) =>
        activity.category === 1 ? total + activity.calories : total, 0), [state.activities])

    const caloriesBurned = useMemo(() => state.activities.reduce((total, activity) =>
        activity.category === 2 ? total + activity.calories : total, 0), [state.activities])

    const netCalories = useMemo(() => caloriesConsumed - caloriesBurned, [state.activities])

    const categoryName = useMemo(
        () => (category: Activity["category"]) =>
            categories.map((cat) => (cat.id === category ? cat.name : "")),
        [state.activities]
    );

    const isEmply = useMemo(() => state.activities.length === 0, [state.activities]);
    return (
        <ActivityContext.Provider value={{
            state,
            dispatch,
            caloriesConsumed,
            caloriesBurned,
            netCalories,
            categoryName,
            isEmply
        }}>
            {children}
        </ActivityContext.Provider>
    )
}
