import { Children } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"


function Router({children}: {children}) {
    const router = createBrowserRouter([
        {
            path: "/",
            element: ""
        }
    ])
    return (
        <RouterProvider router={router}>
            {children}
        </RouterProvider>
    )
}

export default Router