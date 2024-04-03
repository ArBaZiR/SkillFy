//
import style from "./course.module.scss";
//

export default function CourseCategory() {
  //
  const btn = [
    {
      title: "Design",
      img: "/icon/Design.svg",
      category: "",
    },
    {
      title: "Development",
      img: "/icon/Development.svg",
      category: "",
    },
    {
      title: "IT & Software",
      img: "/icon/Monitor.svg",
      category: "",
    },
    {
      title: "Business",
      img: "/icon/Business.svg",
      category: "",
    },
    {
      title: "Marketing",
      img: "/icon/Marketing.svg",
      category: "",
    },
    {
      title: "Photography",
      img: "/icon/Photography.svg",
      category: "",
    },
  ];

  return (
    <div className={style.block}>
      <h2>Choice favourite course from top category </h2>
      <div className={style.btn__block}>
        {btn.map((el, i: number) => (
          <div key={i}>
            <img src={el.img} alt="#!" />
            <button>{el.title}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
