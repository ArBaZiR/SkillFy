//
import style from "./main.module.scss";
//
import CourseCategory from "./CourseCategory";
import LearnSearch from "./LearnSearch";

export default function Main() {
  //
  return (
    <div className={style.block}>
      <LearnSearch />
      <CourseCategory />
    </div>
  );
}
