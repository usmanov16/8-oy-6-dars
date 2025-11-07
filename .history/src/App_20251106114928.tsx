
import {  useMainContext } from "./context/MainContext"


function App() {
  const {state, dispatch} =  useMainContext(mainContextProvider)
  return (
    <div>App</div>
  )
}

export default App