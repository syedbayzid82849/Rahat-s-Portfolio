import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />, // Assuming HomeLayout is defined elsewhere
    },
]);

export default router;