
import {  useMainContext } from "./context/MainContext"


function App() {
  const {state, dispatch} =  useMainContext()
  return (
    <div>App</div>
  )
}

export default App