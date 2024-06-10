//
import style from "./createCourse.module.scss";
import { useState } from "react";
//REDAX
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/userSlice";
//PAGES
import OneStage from "./OneStage";
import TwoStage from "./TwoStage";

type TypeRole = {
  userSlice: {
    user: {
      id: number;
      role: string;
      myCourse: object[];
    };
  };
};

export default function CreateCourse() {
  const dispatch = useDispatch();
  const user = useSelector(({ userSlice }: TypeRole) => userSlice.user);
  //
  const [stageNum, setStageNum] = useState(0);
  // oneStage
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  // twoStage
  const [courseTxt, setCourseTxt] = useState("");

  const obj = {
    title: title,
    desc: desc,
    courseTxt: courseTxt,
  };

  function Submit() {
    fetch(`https://0d4ea3e525f71456.mokky.dev/users/${user.id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        myCourse: user.myCourse ? [...user.myCourse, obj] : [obj],
      }),
    })
      .then((data) => data.json())
      .then((data) => !data.statusCode && dispatch(setUser(data)));
  }

  const stageArray = [
    <OneStage
      title={title}
      desc={desc}
      setTitle={setTitle}
      setDesc={setDesc}
      setStageNum={setStageNum}
    />,
    <TwoStage
      user={user}
      setStageNum={setStageNum}
      courseTxt={courseTxt}
      setCourseTxt={setCourseTxt}
      Submit={Submit}
    />,
  ];

  return (
    <div className={style.container}>
      {stageArray[stageNum]}
      {/* / */}
    </div>
  );
}
