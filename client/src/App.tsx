import { useEffect, useReducer } from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import CalorieTracker from "./components/CalorieTracker"
import ActivityList from "./components/ActivityList"
import { activityReducer, initialState } from "./reducers/activityReducer"

function App() {

  const [state, dispatch] = useReducer( activityReducer, initialState) 

  useEffect(() => {
      localStorage.setItem('activities', JSON.stringify(state.activities))
  }, [state.activities])

  return (
    <>
      <Header 
      state={state}
      dispatch={dispatch}
      />
      <Form 
      dispatch={dispatch}
      state={state}
      />
      <CalorieTracker
      activities={state.activities}
      />
      <ActivityList 
      activities={state.activities}
      dispatch={dispatch}
      />
    </>
  )
}

export default App
