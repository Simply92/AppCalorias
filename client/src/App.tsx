import { useReducer } from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import ActivityList from "./components/ActivityList"
import { activityReducer, initialState } from "./reducers/activityReducer"

function App() {

  const [state, dispatch] = useReducer( activityReducer, initialState) 

  return (
    <>
      <Header />
      <Form 
      dispatch={dispatch}/>
      <ActivityList 
      activities={state.activities}/>
    </>
  )
}

export default App
