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

export default function CourseBlock({ titleCrs }: { titleCrs: string }) {
  const [allCard, setAllcard] = useState<TypeUser[]>([]);

  useEffect(() => {
    fetch(
      `https://0d4ea3e525f71456.mokky.dev/users?${
        !titleCrs ? "_select=myCourse,role,name" : `myCourse.title=${titleCrs}`
      }`
    )
      .then((data) => data.json())
      .then((data) => {
        const array: TypeUser[] = [];
        if (!data.statusCode) {
          data.map((el: TypeUser) => el.role !== "Student" && array.push(el));
          setAllcard(array);
        }
      });
  }, [titleCrs]);

  // useEffect(() => {
  //   fetch(`https://0d4ea3e525f71456.mokky.dev/users?${`myCourse.title=12312`}`)
  //     .then((data) => data.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);
  console.log(allCard);

  return (
    <div className={style.block}>
      <div className={style.card__block}>
        {allCard.length ? (
          allCard.map((elem) =>
            elem.myCourse.map((el, i) =>
              !titleCrs ? (
                <div key={i} className={style.card}>
                  <h2>{el.title}</h2>
                  <h3>{el.desc}</h3>
                  <h1>{elem.name}</h1>
                  <button>Don't Работает</button>
                </div>
              ) : (
                titleCrs == el.title && (
                  <div key={i} className={style.card}>
                    <h2>{el.title}</h2>
                    <h3>{el.desc}</h3>
                    <h1>{elem.name}</h1>
                    <button>Don't Работает</button>
                  </div>
                )
              )
            )
          )
        ) : (
          <h1>Ничего нету</h1>
        )}
      </div>
    </div>
  );
}
