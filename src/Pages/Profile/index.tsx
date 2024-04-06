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
  const [page, setPage] = useState<number>(0);
  const user = useSelector(({ userSlice }: TypeUser) => userSlice.user);
  const navBtnAr = [
    {
      title: "About",
      page: <About />,
    },
    {
      title: "Course",
      page: (
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
          reprehenderit obcaecati dignissimos porro, eius voluptatibus.
        </h1>
      ),
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
