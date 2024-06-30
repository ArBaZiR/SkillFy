//
import style from "./courseBlc.module.scss";
import { useState, useEffect } from "react";
//

type TypeUser = {
  name: string;
  role: string;
  myCourse: [
    {
      title: string;
      desc: string;
      courseTxt: string;
    }
  ];
};

export default function CourseBlock() {
  const [allCard, setAllcard] = useState([
    {
      name: "",
      role: "",
      myCourse: [
        {
          title: "",
          desc: "",
          courseTxt: "",
        },
      ],
    },
  ]);

  useEffect(() => {
    fetch("https://0d4ea3e525f71456.mokky.dev/users?_select=myCourse,role,name")
      .then((data) => data.json())
      .then((data) => {
        const newArray: Array<TypeUser> = [];
        data.map((el: TypeUser) => el.role !== "Student" && newArray.push(el));
        setAllcard(newArray);
      });
  }, []);

  return (
    <div className={style.block}>
      <div className={style.card__block}>
        {allCard.length !== 1 ? (
          allCard.map((elem) =>
            elem.myCourse.map((el, i) => (
              <div key={i} className={style.card}>
                <h2>{el.title}</h2>
                <h3>{el.desc}</h3>
                <h1>{elem.name}</h1>
                <button>Don't Работает</button>
              </div>
            ))
          )
        ) : (
          <h1>Ничего нету</h1>
        )}
      </div>
    </div>
  );
}
