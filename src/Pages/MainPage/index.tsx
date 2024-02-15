//
import style from "./mainPage.module.scss";
import { Outlet } from "react-router-dom";
//
import Header from "../../Components/Header";
//
import { UserAuth } from "../../hooks";

export default function MainPage() {
  //
  UserAuth();
  //
  return (
    <div className={style.block}>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
