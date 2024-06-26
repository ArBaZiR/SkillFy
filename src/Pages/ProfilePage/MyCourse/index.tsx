//
import style from "./myCourse.module.scss";
import { Link } from "react-router-dom";
// REDAX
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../../store/slices/userSlice";
import { useEffect, useState } from "react";

type TypeUser = {
  userSlice: {
    user: {
      id: number;
      role: string;
      myCourse: [
        {
          title: string;
          desc: string;
          courseTxt: string;
        }
      ];
    };
  };
};

export default function MyCourse() {
  const user = useSelector(({ userSlice }: TypeUser) => userSlice.user);
  const dispatch = useDispatch();
  const [contin, setContin] = useState(false);
  const [idCourse, setIdCourse] = useState(0);
  const [course, setCourse] = useState([
    {
      title: "",
      desc: "",
      courseTxt: "",
    },
  ]);

  useEffect(() => {
    user.myCourse && setCourse(user.myCourse);
  }, [user.myCourse]);

  function Base(array: object[]) {
    fetch(`https://0d4ea3e525f71456.mokky.dev/users/${user.id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        myCourse: array,
      }),
    })
      .then((data) => data.json())
      .then((data) => !data.statusCode && dispatch(setUser(data)));
  }

  function RemoveElem(i: number) {
    const newArray = [...user.myCourse];
    newArray.splice(i, 1);
    Base(newArray);
  }

  return (
    <div className={style.block}>
      {(!user.myCourse || !user.myCourse.length) && <h2>Nothing courses</h2>}
      {user.role !== "Student" && course.length < 3 && (
        <Link to={"/profile/createCourse"}>
          <button className={style.createCourse}>Create Course</button>
        </Link>
      )}
      {user.myCourse &&
        course.map((el, i) => (
          <div key={i} className={style.course__block}>
            <Link to={`/course/${el.title}`}>
              <div className={style.course}>
                <h1>{el.title}</h1>
                <p>{el.desc}</p>
              </div>
            </Link>
            <div>
              <button onClick={() => (setIdCourse(i), setContin(true))}>
                Delete
              </button>
            </div>
          </div>
        ))}
      {contin && (
        <>
          <div className={style.continue}>
            <h2>Are you sure you want to continue delete?</h2>
            <div>
              <button onClick={() => setContin(false)}>Back</button>
              <button onClick={() => (setContin(false), RemoveElem(idCourse))}>
                Continue
              </button>
            </div>
          </div>
          <div className={style.background} />
        </>
      )}
    </div>
  );
}
