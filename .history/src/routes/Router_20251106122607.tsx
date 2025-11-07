
import {Home} from "@/pages/Home"
import { type ReactNode } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"


function Router({children}: {children: ReactNode}) {
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