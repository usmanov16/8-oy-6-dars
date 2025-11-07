import { createContext, useReducer, type ReactNode } from "react";

export const mainContextProvider = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | null>(null);

interface State {
  theme: "light" | "dark";
}

interface Action {
  type: string;
  payload?: string;
}

const initialState: State = {
  theme: "light",
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ChangeTheme":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      return { ...state };
  }
}

function MainContext({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <mainContextProvider.Provider value={{ state, dispatch }}>
      {children}
    </mainContextProvider.Provider>
  );
}

export default MainContext;

