//
import style from "./course.module.scss";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
//REDAX
import { useSelector } from "react-redux";

type TypeUser = {
  userSlice: {
    user: {
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

export default function Course() {
  const user = useSelector(({ userSlice }: TypeUser) => userSlice.user);
  const navigate = useNavigate();
  const path = useParams();
  const [object, setObject] = useState({
    title: "",
    desc: "",
    courseTxt: "",
  });

  useEffect(() => {
    if (user.myCourse) {
      const boolean = user.myCourse.find((el) => el.courseTxt === path.name);
      !boolean ? navigate("/profile") : setObject(boolean);
    }
  }, [user.myCourse]);

  return (
    <div>
      <h1>{object.title}</h1>
      <h2>{object.desc}</h2>
      <h2>{object.courseTxt}</h2>
      <Link to={"/profile"}>
        <button style={{ fontSize: 60 }}>GoBack</button>
      </Link>
    </div>
  );
}
