//
import style from "./courses.module.scss";
//
export default function Course() {
  //
  return (
    <div className={style.block}>
      <h2>Courses</h2>
      <div className={style.courses__block}>
        <div className={style.course__card}></div>
      </div>
    </div>
  );
}
