import { createContext, useReducer } from "react"

const mainContextProvider = createContext<{state: State, dispatch: React.Dispatch<Action>}| null>(null)

interface State {
    theme: "light"| "dark"
}

interface Action {
    type: string;
    payload?: string;
}

const initialState:State = {
    theme: "light",
}

function reducer(state: State, action: Action): State {
    switch(action.type) {
        case "ChangeTheme":
            return {...state, theme: state.theme === "light" ? "dark" : "light"}
            default:
                return {...state}
    }

}

function MainContext() {
    const [state, dispatch] = useReducer(reducer, initialState)


  return (
    <div>MainContext</div>
  )
}

export default MainContext