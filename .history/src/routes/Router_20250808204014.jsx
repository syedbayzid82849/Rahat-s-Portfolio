import { createBrowserRouter } from "react-router";
import HomeLayout from "../assets/Layouts/MainLayout/MainLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <>,
            },
        ],
    },
]);

export default router;