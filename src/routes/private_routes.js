import { useRoutes, Navigate } from "react-router-dom";
import PaymentPage from "../pages/PaymentPage";
import SetupProfilePage from "../pages/SetupProfilePage";
import StudentChapterPage from "../pages/StudentChapterPage";
import StudentHomepage from "../pages/StudentHomepage";
import StudentMySubjectsPage from "../pages/StudentMySubjectsPage";
import StudentSubjectPage from "../pages/StudentSubjectPage";
import SubjectsDetailsPagePrivate from "../pages/SubjectDetailsPagePrivate";
import NotFoundPage from "../pages/NotFoundPage";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <StudentHomepage />,
    },
    {
      path: "/profile",
      element: <SetupProfilePage />,
    },

    {
      path: "/chapter/:chapterId",
      element: <StudentChapterPage />,
    },

    {
      path: "/subject/:subjectId",
      element: <SubjectsDetailsPagePrivate />,
    },

    {
      path: "/my-subjects",
      element: <StudentMySubjectsPage />,
    },
    {
      path: "/payment",
      element: <PaymentPage />,
    },

    {
      path: "/my-subject/:subjectId",
      element: <StudentSubjectPage />,
    },
    {
      path: "/not-found",
      element: <NotFoundPage />,
    },
    { path: "*", element: <Navigate to="/not-found" /> },
  ]);
}
