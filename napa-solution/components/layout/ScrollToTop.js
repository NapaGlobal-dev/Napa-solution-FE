import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
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
    // $(".scroll_to_topp").hover(() => {
    //   $(this).css("transform", "translateX(0px) !important");
    // });
  });
  //scroll-to-top classes: fixed, bottom:0, right:0
  return (
    <>
      {isVisible && (
        <div className="scroll_to_top" id="scrollToTop" onClick={scrollToTop}>
          <img
            src="./img/scroll-top.png"
            style={{ height: 30, width: "auto", marginRight: 12 }}
          />
          {/* <h3
            style={{
              fontSize: 25,
              borderLeft: "1px solid #FFF",
              paddingLeft: 12,
              height: "100%",
            }}
          >
            TOP
          </h3> */}
        </div>
      )}
    </>
  );
}
