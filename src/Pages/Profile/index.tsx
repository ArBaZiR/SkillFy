//
import style from "./profile.module.scss";
//
import MainBlock from "./MainBlock";
import NavBtn from "./NavBtn";
// Page
import About from "../ProfilePage/About";
// REDAX
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Profile() {
  const [page, setPage] = useState(0);
  const user = useSelector((state) => state.userSlice.user);
  const navBtnAr = [
    {
      title: "About",
      page: <About />,
    },
    {
      title: "Course",
      link: "/course",
    },
    {
      title: "Notes",
      page: "",
    },
    {
      title: "Project",
      page: "",
    },
    {
      title: "Podcast",
      page: "",
    },
    {
      title: "Book",
      page: "",
    },
    {
      title: "Review",
      page: "",
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
