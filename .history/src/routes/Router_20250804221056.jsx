import { createBrowserRouter } from "react-router";
import HomeLayout from "../homeLayout/HomeLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <HomeLayout />, // Assuming HomeLayout is the main component for the home route
            },
        ],
    },
]);

export default router;