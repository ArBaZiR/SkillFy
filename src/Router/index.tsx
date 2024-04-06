//
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
//
import MainPage from "../Pages/MainPage";
//  Pages
import Main from "../Pages/Main";
import Register from "../Pages/Login&Register/Register";
import Login from "../Pages/Login&Register/Login";
import Profile from "../Pages/Profile";
// REDAX
import { useSelector } from "react-redux";

export default function Router() {
  //
  const status = useSelector(
    (state: {
      userSlice: {
        status: boolean;
      };
    }) => state.userSlice.status
  );
  const router = createBrowserRouter([
    {
      element: <MainPage />,
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
        {
          path: "profile",
          element: status ? <Profile /> : <Navigate to={"/"} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
