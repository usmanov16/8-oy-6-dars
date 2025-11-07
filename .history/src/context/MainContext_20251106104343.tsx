import { createContext, useReducer } from "react"

// const mainContextProvider = createContext()

interface State {
    theme: "light"| "dark"
}

const initialState:State = {
    theme: "light"
}

function reducer(state: State, {}) {

}

function MainContext() {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>MainContext</div>
  )
}

export default MainContext