//
import style from "./mainBlock.module.scss";
//REDAX
import { useDispatch } from "react-redux";
import { removeUser } from "../../../store/slices/userSlice";

type TypeProps = {
  user: any;
};

export default function MainBlock({ user }: TypeProps) {
  const dispatch = useDispatch();

  return (
    <div className={style.block}>
      <div className={style.profile}>
        <img src="/img/girl.png" alt="#!" />
        <div>
          <p className={style.userName}>{user.name}</p>
          <p className={style.userEmail}>{user.email}</p>
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
