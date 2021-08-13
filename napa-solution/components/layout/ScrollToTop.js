import React, { useEffect, useState } from "react";
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    scrollTo(0, 2468);

    // Element to move, time in ms to animate
    function scrollTo(element, duration) {
      var e = document.documentElement;
      if (e.scrollTop === 0) {
        var t = e.scrollTop;
        ++e.scrollTop;
        e = t + 1 === e.scrollTop-- ? e : document.body;
      }
      scrollToC(e, e.scrollTop, element, duration);
    }

    // Element to move, element or px from, element or px to, time in ms to animate
    function scrollToC(element, from, to, duration) {
      if (duration <= 0) return;
      if (typeof from === "object") from = from.offsetTop;
      if (typeof to === "object") to = to.offsetTop;

      scrollToX(element, from, to, 0.55, 1 / duration, 30, easeOutCuaic);
    }

    function scrollToX(element, xFrom, xTo, t01, speed, step, motion) {
      if (t01 < 0 || t01 > 1 || speed <= 0) {
        element.scrollTop = xTo;
        return;
      }
      element.scrollTop = xFrom - (xFrom - xTo) * motion(t01);
      t01 += speed * step;

      setTimeout(function () {
        scrollToX(element, xFrom, xTo, t01, speed, step, motion);
      }, step);
    }

    function easeOutCuaic(t) {
      t--;
      return t * t * t + 1;
    }
  };

  useEffect(() => {
    // Button is displayed after scrolling for 10 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  useEffect(() => {
    $("head").append(`<style>
    .scroll_to_top {
        position: fixed;
        background-color: #000a35;
        bottom: 10px;
        height: 60px;
        right: 0px;
        z-index: 20;
        width: 120px;
        padding: 12px;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        cursor: pointer;
        display: flex;
        alignItems: center;
        transform: translateX(64px);
        opacity:0.7;
    }
    .scroll_to_top:hover {
        transform: translateX(0px);
        transition:all 0.3s;
        opacity:1;
    }   
    .scroll_to_top:not(:hover) {
      transform: translateX(64px);
      transition:all 0.3s;
      opacity:0.7;
  }   
    </style>`);
  });

  return (
    <>
      {isVisible && (
        <div className="scroll_to_top" id="scrollToTop" onClick={scrollToTop}>
          <img
            src="./img/scroll-top.png"
            style={{
              height: 30,
              width: "auto",
              marginRight: 12,
              outline: "none",
              webkitUserSelect: "none",
              mozUserSelect: "none",
              msUserSelect: "none",
              userSelect: "none",
            }}
          />
        </div>
      )}
    </>
  );
}
