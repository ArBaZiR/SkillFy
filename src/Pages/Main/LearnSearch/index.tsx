//
import { useState } from "react";
import style from "./learn.module.scss";

export default function LearnSearch({
  setTitleCrs,
}: {
  setTitleCrs: Function;
}) {
  const [title, setTitle] = useState("");
  //
  return (
    <div className={style.learn__Search}>
      <div className={style.background} />
      <div className={style.title__block}>
        <h1>
          Learn new skills <br /> online with <br /> top educators
        </h1>
        <p>
          Choose from over 100,000 online video <br /> courses with new
          additions published every mont.
        </p>
        <form
          onSubmit={(e) => (e.preventDefault(), setTitleCrs(title))}
          className={style.search}
        >
          <input
            type="text"
            placeholder="Search your favourite course"
            onChange={(e) => setTitle(e.target.value)}
          />
          <button>
            <svg
              width="27"
              height="27"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.7099 16.29L14.31 12.9C15.4069 11.5025 16.0022 9.77666 15.9999 8C15.9999 6.41775 15.5308 4.87103 14.6517 3.55544C13.7727 2.23985 12.5232 1.21447 11.0614 0.608967C9.59963 0.00346625 7.9911 -0.15496 6.43926 0.153721C4.88742 0.462403 3.46196 1.22433 2.34314 2.34315C1.22432 3.46197 0.462401 4.88743 0.153721 6.43928C-0.15496 7.99113 0.00346624 9.59966 0.608965 11.0615C1.21446 12.5233 2.23984 13.7727 3.55543 14.6518C4.87102 15.5308 6.41773 16 7.99997 16C9.77662 16.0022 11.5024 15.407 12.9 14.31L16.2899 17.71C16.3832 17.8032 16.4939 17.8772 16.6157 17.9277C16.7375 17.9781 16.8681 18.0041 16.9999 18.0041C17.1318 18.0041 17.2624 17.9781 17.3842 17.9277C17.506 17.8772 17.6167 17.8032 17.7099 17.71C17.8032 17.6168 17.8771 17.5061 17.9276 17.3842C17.9781 17.2624 18.004 17.1319 18.004 17C18.004 16.8681 17.9781 16.7376 17.9276 16.6157C17.8771 16.4939 17.8032 16.3832 17.7099 16.29ZM2 8C2 6.81331 2.35189 5.65328 3.01117 4.66658C3.67046 3.67989 4.60753 2.91085 5.70388 2.45673C6.80023 2.0026 8.00663 1.88378 9.17051 2.11529C10.3344 2.3468 11.4035 2.91825 12.2426 3.75736C13.0817 4.59648 13.6532 5.66557 13.8847 6.82946C14.1162 7.99335 13.9974 9.19975 13.5432 10.2961C13.0891 11.3925 12.3201 12.3295 11.3334 12.9888C10.3467 13.6481 9.18666 14 7.99997 14C6.40868 14 4.88256 13.3679 3.75735 12.2426C2.63214 11.1174 2 9.5913 2 8Z"
                fill="#ffffff"
              />
            </svg>
          </button>
        </form>
      </div>
      <img src="/img/girl.png" alt="" />
    </div>
  );
}
