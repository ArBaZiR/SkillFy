//
import style from "./storyBlock.module.scss";

export default function StoryBlock() {
  return (
    <div className={style.block}>
      <div className={style.background} />
      <img src="/public/img/registerMain.png" alt="#!" />
      <h1>
        Turn your ambition <br />
        into a success story
      </h1>
      <p>Choose from over 100,000 online video.</p>
    </div>
  );
}
