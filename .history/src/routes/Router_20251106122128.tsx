import { Children } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"


function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            elementment
        }
    ])
    return (
        <RouterProvider router={router}>
            {children}
        </RouterProvider>
    )
}

export default Router