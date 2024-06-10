//
import { useState } from "react";
import style from "../register&login.module.scss";
//

type TypeProps = {
  title: string;
  status: boolean;
  func: Function;
};

export default function Form({ title, status, func }: TypeProps) {
  const [roleBtn, setRoleBtn] = useState(0);
  //
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  //
  const roleArray = ["Student", "Teather"];
  //
  function Base(link: string, obj: object) {
    fetch(`https://0d4ea3e525f71456.mokky.dev/${link}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((data) => data.json())
      .then((data: { statusCode: number }) => {
        data.statusCode
          ? status
            ? alert("Taкой Email Уже используется")
            : alert("Неверный Email или Пароль :(")
          : func(data);
      });
  }
  //
  function Register() {
    const mailValid =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.match(mailValid) && password.length > 4) {
      if (password === repeatPassword) {
        Base(register.link, register.obj);
      } else {
        alert("Пароли не совпадают");
      }
    } else {
      email.match(mailValid) ? "" : alert("Введите корректный Email");
      password.length < 4 ? alert("Длинна пароля должна быть больше 5") : "";
    }
  }
  // Status if True(Register) else false(Login)
  const register = {
    obj: {
      name: name,
      email: email,
      password: password,
      role: roleArray[roleBtn],
    },
    link: "register",
  };

  const login = {
    obj: {
      email: email,
      password: password,
    },
    link: "auth",
  };
  //

  return (
    <div className={style.input__block}>
      {status ? (
        <label>
          <p>Full name</p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="name"
            placeholder="Your name"
          />
        </label>
      ) : (
        ""
      )}
      <label>
        <p>Email address</p>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Exampl@email.com"
        />
      </label>
      <label>
        <p>Password</p>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter password"
        />
      </label>
      {status ? (
        <label>
          <p>Repeat Password</p>
          <input
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            type="password"
            placeholder="Repeat Password"
          />
        </label>
      ) : (
        ""
      )}
      {status ? (
        <div className={style.role__block}>
          <p>Your Role</p>
          <div>
            {roleArray.map((el, i) => (
              <button
                key={i}
                className={i === roleBtn ? style.active_btn : ""}
                onClick={() => setRoleBtn(i)}
              >
                {el}
              </button>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
      <div className={style.create__block}>
        <button
          onClick={() => (status ? Register() : Base(login.link, login.obj))}
          className={style.login_btn}
        >
          {title}
        </button>
        <p>OR</p>
        <button className={style.google_btn}>Sign with Google</button>
      </div>
    </div>
  );
}
