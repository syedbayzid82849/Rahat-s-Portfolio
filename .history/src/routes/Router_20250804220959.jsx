import { createBrowserRouter } from "react-router";
import HomeLayout from "../homeLayout/HomeLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout / >,
    },
]);

export default router;