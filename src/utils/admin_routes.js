import { Navigate, useRoutes } from "react-router-dom";

import DashboardLayout from "../components/layouts/index";
import DashboardApp from "../containers/DashboardApp";
import User from "../containers/User";
import Subject from "../containers/Subject";
import Receipt from "../containers/Receipt";
import Contributor from "../containers/Contributor";
import Enrollment from "../containers/Enrollment";
import Class_ from "../containers/Class_";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { path: "/", element: <Navigate to="/dashboard" replace /> },
        { path: "/dashboard", element: <DashboardApp /> },
        { path: "users", element: <User /> },
        { path: "contributor", element: <Contributor /> },
        { path: "job-posts", element: <User /> },
        { path: "subject", element: <Subject /> },
        { path: "receipt", element: <Receipt /> },
        { path: "enrollment", element: <Enrollment /> },
        { path: "class", element: <Class_ /> },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/dashboard" replace />,
    },
  ]);
}
