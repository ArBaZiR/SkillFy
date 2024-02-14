//
import style from "./about.module.scss";
//
import TeatherSkills from "./TeatherSkills";
import AboutMe from "./AboutMe";
// REDAX
import { useSelector } from "react-redux";

export default function About() {
  const role = useSelector((state: any) => state.userSlice.user.role);
  //
  return (
    //
    <div className={style.block}>
      {role !== "Student" && <TeatherSkills />}
      <AboutMe />
    </div>
  );
}
