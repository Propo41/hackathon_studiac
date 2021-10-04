import { Navigate, useRoutes } from "react-router-dom";
import Components from "../pages/Components";
import LandingPage from "../pages/LandingPage";
import SignIn from "../pages/SignInPage";
import StudentHomepage from "../pages/StudentHomepage";
import StudentMySubjectsPage from "../pages/StudentMySubjectsPage";
import StudentSubjectPage from "../pages/StudentSubjectPage";
import SubjectsDetailsPage from "../pages/SubjectDetailsPage";
import Subjects from "../pages/SubjectsPage";
import SignUpPage from "../pages/SignUpPage";
import SetupProfilePage from "../pages/SetupProfilePage";

export default function Router() {
  return useRoutes([
    /*   {
      path: "/",
      element: <Components />,
    }, */
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/sign-up",
      element: <SignUpPage />,
    },
    {
      path: "/student/profile",
      element: <SetupProfilePage />,
    },

    {
      path: "/subjects",
      element: <Subjects />,
    },
    {
      path: "/subject/subjectId",
      element: <SubjectsDetailsPage />,
    },
    {
      path: "/student/home",
      element: <StudentHomepage />,
    },
    {
      path: "/student/subjects",
      element: <StudentMySubjectsPage />,
    },

    {
      path: "/student/subject",
      element: <StudentSubjectPage />,
    },

    {
      path: "*",
      element: <Navigate to="/error" replace />,
    },
  ]);
}
