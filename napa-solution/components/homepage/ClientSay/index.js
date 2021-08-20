import clsx from "clsx";
import styles from "./style.module.css";
import { useEffect } from "react";
import Head from "next/head";
const ClientSay = (props) => {
  const { data } = props;

  useEffect(() => {
    $("head").append(`<style>
    // .style_buttons__2FgUD > button.pause::before {
    //   content: "${"\\f28b"}";
    // }
    // .style_buttons__2FgUD > button.displaynone::before {
    //   display:none;
    // }
    .style_bigplaypause__2LY4v > button.pause::before {
      content: "${"\\f28b"}";
      transiton: ease 0.3s;
    }
    .style_bigplaypause__2LY4v > button.displaynone::before {
      visibility:hidden;
      transiton: ease 0.3s;
    }
    .style_bigplaypause__2LY4v > button.play::before {
      content: "${"\\f144"}";
      transiton: ease 0.3s;
    }
    </style>`);
    var video = document.querySelector("video");
    // var juice = document.getElementById("orange-juice");
    // var btn = document.querySelector("#play-pause");
    var bigbtn = document.querySelector("#big-play-pause");
    // var orangeBar = document.getElementById("orange-bar");
    // if (btn.hasClass("pause") ) {
    //   $(".pause:before").css({ content: "/f28b" });
    // }
    function togglePlayPause() {
      $("#video").attr("controls", "enabled");
      if (video.paused) {
        // btn.className = "pause";
        bigbtn.className = "pause";
        // btn.addClass("displaynone");
        // btn.className = "displaynone";

        video.play();
        setTimeout(function () {
          // btn.className = "pause";
          bigbtn.className = "displaynone";
        }, 2000);
      } else {
        // btn.className = "play";
        bigbtn.className = "play";
        // bigbtn.addClass("displaynone");
        // bigbtn.className = "displaynone";

        video.pause();
      }
    }
    // btn.onclick = function () {
    //   togglePlayPause();
    // };
    bigbtn.onclick = function () {
      togglePlayPause();
    };
    // video.onclick = function () {
    //   togglePlayPause();
    // };

    if (video.currentTime == 0) {
      $("#video").removeAttr("controls");
    }

    // if (video.currentTime > 0) {
    //   $("#video").attr("controls", "enabled");
    // }
    video.addEventListener("timeupdate", function () {
      // var juicePos = video.currentTime / video.duration;
      // juice.style.width = juicePos * 100 + "%";
      if (video.ended) {
        // btn.className = "play";
        bigbtn.className = "play";
      }
    });
    // orangeBar.addEventListener("click", (e) => {
    //   const progressTime = (e.offsetX / orangeBar.offsetWidth) * video.duration;
    //   video.currentTime = progressTime;
    // });
  });

  return (
    // <div className="container">
    <>
      <Head>
        <link key="css/video.css" rel="stylesheet" href="css/video.css" />
      </Head>
      <div className="container-fluid">
        <div className={clsx(styles.cover)}>
          <h3 id="main-title" id="down-up">
            {data.title}
          </h3>
          <p id="sub-title" id="down-up">
            {data.subTitle}
          </p>
          <video
            // autoplay="autoplay"
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
            <button id="big-play-pause" />
          </div>
          {/* <div
            className={("controls", clsx(styles.controls))}
            style={{ display: "none" }}
          >
            <div className={clsx(styles.orangeBar)} id="orange-bar">
              <div className={clsx(styles.orangeJuice)} id="orange-juice" />
            </div>
            <div className={("buttons", clsx(styles.buttons))}>
              <button id="play-pause" />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
export default ClientSay;
