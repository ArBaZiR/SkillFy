//
import style from "./courseBlc.module.scss";
import { useState, useEffect } from "react";
//

type TypeUser = {
  role: string;
  myCourse: [
    {
      title: string;
      desc: string;
      courseTxt: string;
    }
  ];
};
type TypeCrsInf = {
  title: string;
  desc: string;
  courseTxt: string;
};

export default function CourseBlock() {
  const [allCard, setAllcard] = useState([
    [
      {
        title: "",
        desc: "",
        courseTxt: "",
      },
    ],
  ]);

  useEffect(() => {
    fetch("https://0d4ea3e525f71456.mokky.dev/users")
      .then((data) => data.json())
      .then((data) => {
        const myCrsAll: Array<[TypeCrsInf]> = [];
        data.map(
          (el: TypeUser) =>
            el.myCourse && el.role !== "Student" && myCrsAll.push(el.myCourse)
        );
        setAllcard(myCrsAll);
      });
  }, []);

  return (
    <div className={style.block}>
      <div className={style.card__block}>
        {allCard.map((el) =>
          el.map((el, i) => (
            <div key={i} className={style.card}>
              <h2>{el.title}</h2>
              <h3>{el.desc}</h3>
              <button>Don't Работает</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
