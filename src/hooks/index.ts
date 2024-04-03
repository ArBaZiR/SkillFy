//
import { useEffect } from "react";
// REDAX
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlice";

export function UserAuth() {
  const dispatch = useDispatch();
  //
  useEffect(() => {
    const getToken: string = JSON.parse(localStorage.getItem("token"));
    if (getToken) {
      fetch("https://0d4ea3e525f71456.mokky.dev/auth_me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      })
        .then((data) => data.json())
        .then(
          (data: { statusCode: string }) =>
            !data.statusCode && dispatch(setUser(data))
        );
    }
  }, []);
}
