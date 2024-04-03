//
import style from "../register&login.module.scss";
import { Link } from "react-router-dom";
//
import StoryBlock from "../../../Components/StoryBlock";
import Form from "../Form";
//REDAX
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/slices/userSlice";

export default function Login() {
  const dispatch = useDispatch();
  //
  function SingIn(data: { token: string; data: object }) {
    dispatch(setUser(data.data));
    localStorage.setItem("token", JSON.stringify(data.token));
  }

  return (
    <div className={style.block}>
      <StoryBlock />
      <div className={style.main__block}>
        <h2>Hello ! Welcome back.</h2>
        <p>
          Log in with your data that you entered <br />
          during Your registration.
        </p>
        <Form title="Sing in" status={false} func={SingIn} />
        <p>
          Don’t have an account?{" "}
          <span>
            <Link to={"/register"}>Sing up</Link>
          </span>
        </p>
      </div>
    </div>
  );
}
