//
import style from "./main.module.scss";
//Components
import LearnSearch from "./LearnSearch";
import CourseCategory from "./CourseCategory";
import CourseBlock from "./CourseBlock";

export default function Main() {
  //
  return (
    <div className={style.block}>
      <LearnSearch />
      <CourseCategory />
      <CourseBlock />
    </div>
  );
}
