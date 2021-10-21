import clsx from "clsx";
import styles from "./style.module.css";
import { useEffect } from "react";
const ClientSay = (props) => {
  const { data } = props;

  useEffect(() => {
    var video = document.querySelector("video");
    var bigbtn = document.querySelector("#big-play-pause");

    function togglePlayPause() {
      $("#video").attr("controls", "enabled");
      if (video.paused) {
        bigbtn.className = "pause";
        video.play();
        setTimeout(function () {
          $("#big-play-pause").css("display", "none");
        }, 2000);
      } else {
        bigbtn.className = "play";
        video.pause();
      }
    }

    bigbtn.onclick = function () {
      $("#video").css("transform", "scale(1)");
      togglePlayPause();
    };

    if (video.currentTime == 0) {
      $("#video").removeAttr("controls");
    }
    video.addEventListener("timeupdate", function () {
      if (video.ended) {
        bigbtn.className = "play";
      }
    });
  });

  return (
    <>
      <div className="container-fluid">
        <div className={clsx(styles.cover)}>
          <h3 id="main-title" id="down-up">
            {data.title}
          </h3>
          <p id="sub-title" id="down-up">
            {data.subTitle}
          </p>
          <div className={clsx(styles.covervideo)}>
            <video
              controls="controls"
              id="video"
              className={clsx(styles.video)}
              width="1500"
              height="700"
              poster={data.poster?.original}
            >
              <source src={data.video} type="video/mp4" autostart="false" />
            </video>

            <div className={("big-buttons", clsx(styles.bigplaypause))}>
              <button id="big-play-pause">
                <img id="play-around" src="./img/play-around.png" />
                <img id="play-text" src="./img/play-text.png" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ClientSay;
