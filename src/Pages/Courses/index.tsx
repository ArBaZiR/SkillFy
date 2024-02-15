//
import style from "./courses.module.scss";
import { Link } from "react-router-dom";
//
export default function Course() {
  //
  return (
    <div className={style.block}>
      <div className={style.menu__block}>
        <div className={style.back__block}>
          <Link to={"/profile"}>
            <button>Back</button>
          </Link>
          <h2>Learn Adobe XD & Prototyping</h2>
          <div className={style.progress__bar}>25% Complete</div>
        </div>
        <label className={style.search}>
          <img src="/icon/search.svg" alt="" />
          <input type="text" placeholder="Search" />
        </label>
      </div>
      <div className={style.main__block}></div>
    </div>
  );
}
