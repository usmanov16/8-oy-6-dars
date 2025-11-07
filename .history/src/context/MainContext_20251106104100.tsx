import { createContext } from "react"

const mainContextProvider = createContext()

function MainContext() {
  return (
    <div>MainContext</div>
  )
}

export default MainContext