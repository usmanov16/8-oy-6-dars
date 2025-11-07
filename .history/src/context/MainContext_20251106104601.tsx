import { createContext, useReducer } from "react"

// const mainContextProvider = createContext()

interface State {
    theme: "light"| "dark"
}

interface Action {
    type: string;
    payload: string;
}

const initialState:State = {
    theme: "light",
}

function reducer(state: State, action: Action): State {
retu

}

function MainContext() {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>MainContext</div>
  )
}

export default MainContext