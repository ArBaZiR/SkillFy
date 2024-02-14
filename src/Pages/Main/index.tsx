//
import style from "./main.module.scss";
import { Navigate } from "react-router-dom";
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
