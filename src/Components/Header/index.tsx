//
import style from "./header.module.scss";
import { Link } from "react-router-dom";
// Redax
import { useSelector } from "react-redux";

export default function Header() {
  const status = useSelector(
    (state: {
      userSlice: {
        status: boolean;
      };
    }) => state.userSlice.status
  );

  return (
    <div className={style.block}>
      <Link to={"/"}>
        <h1>Skillfy</h1>
      </Link>
      {status ? (
        <div className={style.profile}>
          <Link to={"/profile"}>
            <button className={style.register}>Profile</button>
          </Link>
        </div>
      ) : (
        <div className={style.profile}>
          <Link to={"/login"}>
            <button className={style.login}>login</button>
          </Link>
          <Link to={"/register"}>
            <button className={style.register}>Register</button>
          </Link>
        </div>
      )}
    </div>
  );
}
