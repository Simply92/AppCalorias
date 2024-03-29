import { useReducer } from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import { activityReducer, initialState } from "./reducers/activityReducer"

function App() {

  const [state, dispatch] = useReducer( activityReducer, initialState) 

  return (
    <>
      <Header />
      <Form 
      dispatch={dispatch}/>
    </>
  )
}

export default App
