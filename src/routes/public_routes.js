import { Navigate, useRoutes } from "react-router-dom";
import Components from "../pages/Components";
import LandingPage from "../pages/LandingPage";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Components />,
    },
    {
      path: "/dashboard",
      element: <LandingPage />,
    },
    {
      path: "*",
      element: <Navigate to="/error" replace />,
    },
  ]);
}
