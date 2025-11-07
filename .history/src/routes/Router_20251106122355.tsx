

import { type ReactNode } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"


function Router({children}: {children: ReactNode}) {
    const router = createBrowserRouter([
        {
            path: "/",
            element: 
        }
    ])
    return (
        <Route router={router}>
            {children}
        </Route>
    )
}

export default Router