//
import style from "../stage.module.scss";
import { Link } from "react-router-dom";
//

type TypeProps = {
  title: string;
  desc: string;
  setTitle: Function;
  setDesc: Function;
  setStageNum: Function;
};
export default function OneStage({
  title,
  desc,
  setTitle,
  setDesc,
  setStageNum,
}: TypeProps) {
  return (
    <div className={style.block}>
      <h1>Create Course</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          <p>Title</p>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Maximum of 25 characters"
            maxLength={25}
            type="text"
          />
        </label>
        <label>
          <p>Description</p>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Maximum of 99 characters"
            maxLength={99}
          />
        </label>
      </form>
      <div className={style.btn__block}>
        <Link to={"/profile"}>
          <button>Back</button>
        </Link>
        {title && desc && <button onClick={() => setStageNum(1)}>Next</button>}
      </div>
    </div>
  );
}
