//
import style from "./profile.module.scss";
//
import MainBlock from "./MainBlock";
import NavBtn from "./NavBtn";
// Page
import About from "../ProfilePage/About";
import MyCourse from "../ProfilePage/MyCourse";
// REDAX
import { useSelector } from "react-redux";
import { useState } from "react";

type TypeUser = {
  userSlice: {
    user: {
      role: string;
      name: string;
      email: string;
    };
  };
};

export default function Profile() {
  const [page, setPage] = useState(0);
  const { user } = useSelector(({ userSlice }: TypeUser) => userSlice);

  const navBtnAr = [
    {
      title: "About",
      page: <About />,
    },
    {
      title: "Course",
      page: <MyCourse />,
    },
  ];

  return (
    <div className={style.block}>
      <h2>{user.role} Profile</h2>
      <MainBlock user={user} />
      <NavBtn page={page} setPage={setPage} navBtnAr={navBtnAr} />
      {navBtnAr[page].page}
    </div>
  );
}
