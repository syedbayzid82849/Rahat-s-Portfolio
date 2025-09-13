import { createBrowserRouter } from "react-router";
import HomeLayout from "../homeLayout/HomeLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
        index: true,
            
        ],
    },
]);

export default router;