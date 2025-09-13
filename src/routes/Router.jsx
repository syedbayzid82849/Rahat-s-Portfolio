import { createBrowserRouter } from "react-router";
import Home from "../Home/Home";
import HomeLayout from "../Layouts/MainLayout/MainLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
]);

export default router;