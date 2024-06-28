//
import style from "../stage.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//

type TypeProps = {
  user: {
    myCourse: object[];
  };
  setStageNum: Function;
  courseTxt: string;
  setCourseTxt: Function;
  Submit: Function;
};

export default function TwoStage({
  user,
  setStageNum,
  courseTxt,
  setCourseTxt,
  Submit,
}: TypeProps) {
  //
  const navigate = useNavigate();
  const [contin, setContin] = useState(false);

  return (
    <div className={style.block}>
      <h1>Course Info</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <textarea
          value={courseTxt}
          onChange={(e) => setCourseTxt(e.target.value)}
          placeholder="Maximum of 250 characters"
          maxLength={249}
        />
      </form>
      <div className={style.btn__block}>
        <button onClick={() => setStageNum(0)}>Back</button>
        {courseTxt && (
          <button onClick={() => setContin(true)}>CreateCourse</button>
        )}
      </div>
      {contin && (
        <>
          <div className={style.continue}>
            <h2>Are you sure you want to continue?</h2>
            <div>
              <button onClick={() => setContin(false)}>Back</button>
              <button
                onClick={() =>
                  !user.myCourse || user.myCourse?.length < 3
                    ? (Submit(), navigate("/profile"))
                    : alert("Вы привысили количество допустимых курсов")
                }
              >
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
