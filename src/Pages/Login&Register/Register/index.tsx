//
import style from "../register&login.module.scss";
import { Link } from "react-router-dom";
//
import StoryBlock from "../../../Components/StoryBlock";
import Form from "../Form";
//REDAX
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/slices/userSlice";

export default function Register() {
  const dispatch = useDispatch();
  //
  function Registration(data: object) {
    dispatch(setUser(data.data));
    localStorage.setItem("token", JSON.stringify(data.token));
  }

  return (
    <div className={style.block}>
      <StoryBlock />
      <div className={style.main__block}>
        <h2>Create your free account</h2>
        <p>
          See how the world’s best user experiences <br />
          are created
        </p>
        <Form title="Create account" status={true} func={Registration} />
        <p>
          By signing up, you agree to our communications and usage <br />
          terms Already have an account?
          <span>
            <Link to={"/login"}>Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
}
