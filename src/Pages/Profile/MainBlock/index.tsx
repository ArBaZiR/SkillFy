//
import style from "./mainBlock.module.scss";
//REDAX
import { useDispatch } from "react-redux";
import { removeUser } from "../../../store/slices/userSlice";

type TypeProps = {
  user: object;
};

export default function MainBlock({ user }: TypeProps) {
  const dispatch = useDispatch();
  const { name, email } = user;

  return (
    <div className={style.block}>
      <div className={style.profile}>
        <img src="/public/img/girl.png" alt="#!" />
        <div>
          <p className={style.userName}>{name}</p>
          <p className={style.userEmail}>{email}</p>
        </div>
      </div>
      <div className={style.main__inform}>
        <div className={style.followers}>
          <p>3,000</p>
          <p>Followers</p>
        </div>
        <div className={style.following}>
          <p>22</p>
          <p>Following</p>
        </div>
        <div className={style.rating}>
          <p>4.7</p>
          <p>Rating</p>
        </div>
      </div>
      <button
        onClick={() => (
          dispatch(removeUser()), localStorage.removeItem("token")
        )}
        className={style.exit}
      >
        Exit
      </button>
    </div>
  );
}
