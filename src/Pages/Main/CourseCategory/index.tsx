//
import style from "./course.module.scss";
//

export default function CourseCategory() {
  //
  const btn = [
    {
      title: "Design",
      img: "/public/icon/Design.svg",
      category: "",
    },
    {
      title: "Development",
      img: "/public/icon/Development.svg",
      category: "",
    },
    {
      title: "IT & Software",
      img: "/public/icon/Monitor.svg",
      category: "",
    },
    {
      title: "Business",
      img: "/public/icon/Business.svg",
      category: "",
    },
    {
      title: "Marketing",
      img: "/public/icon/Marketing.svg",
      category: "",
    },
    {
      title: "Photography",
      img: "/public/icon/Photography.svg",
      category: "",
    },
  ];

  return (
    <div className={style.block}>
      <h2>Choice favourite course from top category </h2>
      <div className={style.btn__block}>
        {btn.map((el, i) => (
          <div key={i}>
            <img src={el.img} alt="#!" />
            <button>{el.title}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
