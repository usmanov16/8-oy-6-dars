
import Home from "@/pages/Home"
import Document from "@/pages/Document"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Categories from "@/pages/Categories"


function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/instruction",
            element: <Document/>
        },
        {
            path: "/categories",
            element: <Categories/>
        },
        {
            path: "/game-fieldd",
            element: </>
        },
    ])
    return (
        <RouterProvider router={router}>
        </RouterProvider>
    )
}

export default Router