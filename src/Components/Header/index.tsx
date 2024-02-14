//
import style from "./header.module.scss";
import { Link } from "react-router-dom";
// Redax
import { useSelector } from "react-redux";

export default function Header() {
  const status = useSelector((state) => state.userSlice.status);

  const btn = [
    {
      title: "Home",
      link: "",
    },
    {
      title: "Pages",
      link: "",
    },
    {
      title: "Courses",
      link: "",
    },
    {
      title: "Features",
      link: "",
    },
    {
      title: "Blog",
      link: "",
    },
  ];

  return (
    <div className={style.block}>
      <Link to={"/"}>
        <h1>Skillfy</h1>
      </Link>
      {status && (
        <div className={style.main__block}>
          <div className={style.btn__block}>
            {btn.map((el, i) => (
              <button key={i}>{el.title}</button>
            ))}
          </div>
          <label className={style.search}>
            <img src="/public/icon/search.svg" alt="#!" />
            <input type="text" placeholder="Search" />
          </label>
          <button className={style.cart}>
            <img src="/public/icon/cart.svg" alt="" />
          </button>
        </div>
      )}
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
