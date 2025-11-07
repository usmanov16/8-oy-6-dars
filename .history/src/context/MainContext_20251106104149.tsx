import { createContext, useReducer } from "react"

// const mainContextProvider = createContext()



function MainContext() {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>MainContext</div>
  )
}

export default MainContext