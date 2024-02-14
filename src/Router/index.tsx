//
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
//
import StaticRouter from "../StaticRouter";
//  Pages
import Main from "../Pages/Main";
import Register from "../Pages/Login&Register/Register";
import Login from "../Pages/Login&Register/Login";
import Profile from "../Pages/Profile";
import Courses from "../Pages/Courses";
// REDAX
import { useSelector } from "react-redux";

export default function Router() {
  //
  const status = useSelector((state: any) => state.userSlice.status);

  const router = createBrowserRouter([
    {
      element: <StaticRouter />,
      children: [
        {
          path: "*",
          element: <Navigate to={"/"} />,
        },
        {
          path: "/",
          element: <Main />,
        },
        {
          path: "login",
          element: !status ? <Login /> : <Navigate to={"/profile"} />,
        },
        {
          path: "register",
          element: !status ? <Register /> : <Navigate to={"/profile"} />,
        },
        status && {
          path: "profile",
          element: <Profile />,
        },
        status && {
          path: "course",
          element: <Courses />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
