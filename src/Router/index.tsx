//
import { RouterProvider, createBrowserRouter } from "react-router-dom";
//
import MainPage from "../Pages/MainPage";
import { UserAuth } from "../hooks";
//  Pages
import Main from "../Pages/Main";
import Register from "../Pages/Login&Register/Register";
import Login from "../Pages/Login&Register/Login";
import Profile from "../Pages/Profile";
import Course from "../Pages/Course";
import CreateCourse from "../Pages/CreateCourse";
// REDAX
import { useSelector } from "react-redux";

export default function Router() {
  UserAuth();
  //
  const { status, user } = useSelector(
    (state: {
      userSlice: {
        status: boolean;
        user: {
          role: string;
        };
      };
    }) => state.userSlice
  );

  const router = createBrowserRouter([
    {
      element: <MainPage />,
      children: [
        {
          path: "*",
          element: <Main />,
        },
        {
          path: "/",
          element: <Main />,
        },
        {
          path: "login",
          element: !status ? <Login /> : <Profile />,
        },
        {
          path: "register",
          element: !status ? <Register /> : <Profile />,
        },
        {
          path: "profile",
          element: status ? <Profile /> : <Login />,
        },
      ],
    },
    {
      path: "course/:name",
      element: <Course />,
    },
    user.role !== "Student"
      ? {
          path: "profile/createCourse",
          element: <CreateCourse />,
        }
      : {},
  ]);

  return <RouterProvider router={router} />;
}
