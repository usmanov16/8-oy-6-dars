import { useContext } from "react"
import { mainContextProvider } from "./context/MainContext"


function App() {
  const {state, dispatch} =  useContext(mainContextProvider)
  return (
    <div>App</div>
  )
}

export default App