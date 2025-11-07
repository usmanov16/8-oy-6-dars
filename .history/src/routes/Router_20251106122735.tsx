
import Home from "@/pages/Home"
import Document from "@/pages/Document"
import { type ReactNode } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"


function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/instruction",
            element: <Document/>
        }
    ])
    return (
        <RouterProvider router={router}>
            {children}
        </RouterProvider>
    )
}

export default Router