//
import style from "./navBtn.module.scss";

type TypeProps = {
  page: number;
  setPage: Function;
  navBtnAr: object[];
};

//
export default function NavBtn({ page, setPage, navBtnAr }: TypeProps) {
  return (
    <div className={style.block}>
      <div className={style.nav_btn}>
        {navBtnAr.map((el: any, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={page == i ? style.active : ""}
          >
            {el.title}
          </button>
        ))}
      </div>
    </div>
  );
}
