
import { Home } from "lucide-react"
import { type ReactNode } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"


function Router({children}: {children: ReactNode}) {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <H
        }
    ])
    return (
        <RouterProvider router={router}>
            {children}
        </RouterProvider>
    )
}

export default Router