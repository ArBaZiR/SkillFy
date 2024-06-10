//
import style from "./mainPage.module.scss";
import { Outlet } from "react-router-dom";
//
import Header from "../../Components/Header";
//
export default function MainPage() {
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
