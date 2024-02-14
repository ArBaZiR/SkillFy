//
import style from "./navBtn.module.scss";
import { Link } from "react-router-dom";

type TypeBtnAr = {
  page: number;
  setPage: any;
  navBtnAr: Array<any>;
};

export default function NavBtn({ page, setPage, navBtnAr }: TypeBtnAr) {
  return (
    <div className={style.block}>
      <div className={style.nav_btn}>
        {navBtnAr.map((el, i) => (
          <Link key={i} to={el.link}>
            <button
              onClick={() => setPage(i)}
              className={page == i ? style.active : ""}
            >
              {el.title}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
