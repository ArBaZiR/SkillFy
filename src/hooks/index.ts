//
import { useEffect } from "react";
// REDAX
import { useDispatch } from "react-redux";
import { setUser, removeUser } from "../store/slices/userSlice";

export function UserAuth() {
  const dispatch = useDispatch();
  //
  useEffect(() => {
    const getToken: string = JSON.parse(localStorage.getItem("token"));
    if (getToken) {
      dispatch(setUser({}));
      fetch("https://0d4ea3e525f71456.mokky.dev/auth_me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      })
        .then((data) => data.json())
        .then((data) =>
          data.statusCode
            ? (dispatch(removeUser()), console.log(data.statusCode))
            : dispatch(setUser(data))
        );
    }
  }, []);
}
