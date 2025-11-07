import { createContext, useReducer } from "react"

// const mainContextProvider = createContext()

interfrace State {
    
}

const initialState = {
    theme: "light"
}

function MainContext() {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>MainContext</div>
  )
}

export default MainContext