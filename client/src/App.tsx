import { useEffect } from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import CalorieTracker from "./components/CalorieTracker"
import ActivityList from "./components/ActivityList"
import { useActivity } from "./hooks/useActivity"

function App() {

  const { state } = useActivity()

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities))
  }, [state.activities])

  return (
    <>
      <Header />
      <Form />
      <CalorieTracker />
      <ActivityList />
    </>
  )
}

export default App
