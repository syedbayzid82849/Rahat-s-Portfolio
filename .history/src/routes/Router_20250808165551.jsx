import { createBrowserRouter } from "react-router";
import HomeLayout from "../assets/HomeLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <div>Hello World</div>,
            },
        ],
    },
]);

export default router;