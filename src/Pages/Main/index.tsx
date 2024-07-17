//
import style from "./main.module.scss";
//Components
import LearnSearch from "./LearnSearch";
import CourseCategory from "./CourseCategory";
import CourseBlock from "./CourseBlock";
import { useState } from "react";

export default function Main() {
  const [titleCrs, setTitleCrs] = useState("");
  //
  return (
    <div className={style.block}>
      <LearnSearch setTitleCrs={setTitleCrs} />
      <CourseCategory />
      <CourseBlock titleCrs={titleCrs} />
    </div>
  );
}
