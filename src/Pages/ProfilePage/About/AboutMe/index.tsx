//
import { useState } from "react";
import style from "./reviews.module.scss";
//REDAX
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../../../store/slices/userSlice";

type TypeUserSlice = {
  userSlice: {
    user: {
      id: number;
      aboutMe: {
        title: string;
        text: string;
      };
    };
  };
};

export default function AboutMe() {
  const user = useSelector((state: TypeUserSlice) => state.userSlice.user);
  const dispatch = useDispatch();
  //
  const [btnState, setBtnState] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(
    !!user.aboutMe ? user.aboutMe.title : ""
  );
  const [text, setText] = useState<string>(
    !!user.aboutMe ? user.aboutMe.text : ""
  );

  function Submit() {
    if ((title && !text) || (title && text) || (!title && !text)) {
      fetch(`https://0d4ea3e525f71456.mokky.dev/users/${user.id}`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          aboutMe: {
            title: title,
            text: text,
          },
        }),
      })
        .then((data) => data.json())
        .then(
          (data: { statusCode: number }) =>
            !data.statusCode && dispatch(setUser(data))
        );
    } else {
      setBtnState(true);
      alert("Введите Заголовок");
    }
  }

  return (
    <div className={style.block}>
      <h3>About me</h3>
      <label>
        <input
          className={btnState ? style.active : ""}
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          readOnly={!btnState}
          placeholder="Title"
        />
        <span />
        <textarea
          className={btnState ? style.active : ""}
          onChange={(e) => setText(e.target.value)}
          value={text}
          readOnly={!btnState}
          placeholder="About me"
        />
        <div>
          <button
            onClick={() => (setBtnState(!btnState), btnState && Submit())}
          >
            {btnState ? "Done" : "Edit"}
          </button>
        </div>
      </label>
    </div>
  );
}
