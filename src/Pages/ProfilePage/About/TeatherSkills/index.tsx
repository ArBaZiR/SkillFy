//
import { useState, useEffect } from "react";
import style from "./info.module.scss";
//REDAX
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../../store/slices/userSlice";

type TypeUserSlice = {
  userSlice: {
    user: {
      id: number;
      info: {
        skill: string[];
        exp: string[];
        edducation: string[];
        awward: string[];
        other: string[];
      };
    };
  };
};

export default function TeatherSkills() {
  const dispatch = useDispatch();
  const user = useSelector((state: TypeUserSlice) => state.userSlice.user);
  //
  const [editBlock, setEditBlock] = useState(false);
  const [infoBtnInd, setInfoBtnInd] = useState(0);
  const [inputTitle, setInputTitle] = useState("");
  const [userInfo, setUserInfo] = useState(user.info ? user.info : {});
  //
  useEffect(() => {
    editBlock && Base(userInfo);
  }, [userInfo]);

  const infoArray = [
    {
      title: "Skill Set:",
      obj: {
        skill: user.info?.skill
          ? [...user.info.skill, inputTitle]
          : [inputTitle],
      },
      text: user.info?.skill?.length ? user.info.skill : ["None"],
    },
    {
      title: "Exp:",
      obj: {
        exp: user.info?.exp ? [...user.info.exp, inputTitle] : [inputTitle],
      },
      text: user.info?.exp?.length ? user.info.exp : ["None"],
    },
    {
      title: "Edducation:",
      obj: {
        edducation: user.info?.edducation
          ? [...user.info.edducation, inputTitle]
          : [inputTitle],
      },
      text: user.info?.edducation?.length ? user.info.edducation : ["None"],
    },
    {
      title: "Awward:",
      obj: {
        awward: user.info?.awward
          ? [...user.info.awward, inputTitle]
          : [inputTitle],
      },
      text: user.info?.awward?.length ? user.info.awward : ["None"],
    },
    {
      title: "Other:",
      obj: {
        other: user.info?.other
          ? [...user.info.other, inputTitle]
          : [inputTitle],
      },
      text: user.info?.other?.length ? user.info.other : ["None"],
    },
  ];

  function Base(obj: object) {
    fetch(`https://0d4ea3e525f71456.mokky.dev/users/${user.id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        info: obj,
      }),
    })
      .then((data) => data.json())
      .then((data) => dispatch(setUser(data)));
  }

  function Submit(obj: object) {
    if (inputTitle && infoArray[infoBtnInd].text.length < 5) {
      //Добавляю Объект к Info
      setUserInfo({ ...userInfo, ...obj });
    }
  }

  function RemoveInfo(i: number) {
    // Пока что пирдумал так, но Это полная ХУЙНЯ
    const deleteInfo = [...infoArray[infoBtnInd].text];
    if (deleteInfo[i] !== "None") {
      deleteInfo.splice(i, 1);
      infoArray[infoBtnInd].obj.skill &&
        (infoArray[infoBtnInd].obj.skill = deleteInfo);
      infoArray[infoBtnInd].obj.exp &&
        (infoArray[infoBtnInd].obj.exp = deleteInfo);
      infoArray[infoBtnInd].obj.edducation &&
        (infoArray[infoBtnInd].obj.edducation = deleteInfo);
      infoArray[infoBtnInd].obj.awward &&
        (infoArray[infoBtnInd].obj.awward = deleteInfo);
      infoArray[infoBtnInd].obj.other &&
        (infoArray[infoBtnInd].obj.other = deleteInfo);
      setUserInfo({ ...userInfo, ...infoArray[infoBtnInd].obj });
    }
  }

  function InfoBtnClick(i: number) {
    setInfoBtnInd(i);
    setInputTitle("");
    setEditBlock(!editBlock);
  }

  return (
    <div className={style.block}>
      <h3>Teather Info</h3>
      <span />
      <div className={style.info__block}>
        {infoArray.map((el, i) => (
          <div key={i}>
            <h4>{el.title}</h4>
            <div className={style.info__skills}>
              {el.text.map((text, i: number) => (
                <p key={i}>{text}</p>
              ))}
            </div>
            <button onClick={() => InfoBtnClick(i)}>Изменить</button>
          </div>
        ))}
      </div>
      <div className={`${style.edit__block} ${editBlock && style.active}`}>
        <h2>{infoArray[infoBtnInd].title}</h2>
        <div>
          {infoArray[infoBtnInd].text.map((el, i: number) => (
            <p key={i} onClick={() => RemoveInfo(i)}>
              {el}
            </p>
          ))}
        </div>
        <label>
          <input
            onChange={(e) => setInputTitle(e.target.value)}
            value={inputTitle}
            type="text"
            placeholder="Enter Title"
          />
          <button onClick={() => Submit(infoArray[infoBtnInd].obj)}>
            Done
          </button>
        </label>
        <button
          onClick={() => setEditBlock(false)}
          className={style.close__block}
        >
          X
        </button>
      </div>
      <div
        onClick={() => setEditBlock(!editBlock)}
        className={`${style.background} ${editBlock && style.active}`}
      />
      <div className={style.social__links}></div>
    </div>
  );
}
