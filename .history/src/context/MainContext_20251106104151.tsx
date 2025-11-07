import { createContext, useReducer } from "react"

// const mainContextProvider = createContext()

const 

function MainContext() {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>MainContext</div>
  )
}

export default MainContext