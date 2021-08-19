import { useRef } from "react";

export default function HorizonMilestone({
  scrollE,
  time,
  setTime,
  number = 5,
}) {
  if (number < 5) number = 5;
  if (number > 8) number = 8;

  const time1 = useRef();
  const time2 = useRef();
  const time3 = useRef();
  const time4 = useRef();
  const time5 = useRef();
  const time6 = useRef();
  const time7 = useRef();
  const time8 = useRef();
  const animateRing = useRef();
  const animateLine = useRef();

  const arr = [time1, time2, time3, time4, time5, time6, time7, time8];

  const choices = {
    number5: {
      between: 40,
    },
    number6: {
      between: 30,
    },
    number7: {
      between: 30,
    },
    number8: {
      between: 20,
    },
  };

  const choiced = choices["number" + number];
  const unitDistance1 = 30;
  const unitDistance2 = 25;
  const between = choiced.between;
  const gap = 5;

  function animate(time, current) {
    const distance = time - current;
    if (!distance) return;

    let times;
    if (distance > 0) times = arr.slice(current, time);
    else times = arr.slice(time, current).reverse();

    const startLine = (unitDistance1 - unitDistance2) * 2;
    const linePosition = ["m" + startLine + ",50l0,0"];
    arr.forEach((e, index) =>
      linePosition.push(
        "m" +
          startLine +
          ",50l" +
          ((unitDistance1 * 2 + between) * (index + 1) - startLine + 2) +
          ",0"
      )
    );

    const diamondPosition = [];
    arr.forEach((e, index) =>
      diamondPosition.push(
        "m" +
          (1 + index * (unitDistance1 * 2 + between)) +
          ",50l" +
          unitDistance1 +
          ",-" +
          unitDistance1 +
          " l" +
          unitDistance1 +
          "," +
          unitDistance1 +
          " l-" +
          unitDistance1 +
          "," +
          unitDistance1 +
          " l-" +
          unitDistance1 +
          ",-" +
          unitDistance1 +
          " l" +
          unitDistance1 +
          ",-" +
          unitDistance1
      )
    );

    const timeDistance =
      Math.abs(distance) * 50 ** ((Math.abs(distance) - 1) * 0.03 + 1) + 200;

    animateLine.current.setAttributeNS(
      null,
      "values",
      linePosition[current - 1] + ";" + linePosition[time - 1]
    );
    if (current === 1)
      setTimeout(() => {
        animateLine.current.setAttributeNS(
          null,
          "dur",
          timeDistance - 10 + "ms"
        );
        animateLine.current.beginElement();
      }, 10);
    else {
      animateLine.current.setAttributeNS(null, "dur", timeDistance + "ms");
      animateLine.current.beginElement();
    }

    animateRing.current.setAttributeNS(
      null,
      "values",
      diamondPosition[current - 1] + ";" + diamondPosition[time - 1]
    );
    animateRing.current.setAttributeNS(null, "dur", timeDistance + "ms");
    animateRing.current.beginElement();

    const unit = timeDistance / Math.abs(distance);

    if (distance > 0)
      times.forEach((time, index) => {
        setTimeout(() => {
          time.current.style.fill = "#412490";
        }, (index + 1) * unit);
      });
    else
      times.forEach((time, index) => {
        setTimeout(() => {
          time.current.style.fill = "#9E9E9E";
        }, index * unit + 20);
      });
  }
  function diamond2N(n) {
    return (
      "m" +
      (1 + n * (unitDistance1 * 2 + between) + gap) +
      ",50l" +
      unitDistance2 +
      ",-" +
      unitDistance2 +
      " l" +
      unitDistance2 +
      "," +
      unitDistance2 +
      " l-" +
      unitDistance2 +
      "," +
      unitDistance2 +
      " l-" +
      unitDistance2 +
      ",-" +
      unitDistance2 +
      " l" +
      unitDistance2 +
      ",-" +
      unitDistance2
    );
  }

  function diamond1N(n) {
    return (
      "m" +
      (1 + n * (unitDistance1 * 2 + between)) +
      ",50l" +
      unitDistance1 +
      ",-" +
      unitDistance1 +
      " l" +
      unitDistance1 +
      "," +
      unitDistance1 +
      " l-" +
      unitDistance1 +
      "," +
      unitDistance1 +
      " l-" +
      unitDistance1 +
      ",-" +
      unitDistance1 +
      " l" +
      unitDistance1 +
      ",-" +
      unitDistance1
    );
  }

  function backgroundlineN(n) {
    return (
      "m" +
      (unitDistance1 * 2 + (unitDistance1 * 2 + between) * (n - 1)) +
      ",50l" +
      between +
      ",0"
    );
  }

  function history(newtime) {
    animate(newtime, time);
    scrollE.current?.scrollTo({
      top: 0,
      left: (newtime - 1) * scrollE.current.offsetWidth,
      behavior: "smooth",
    });
    if (newtime !== time) {
    }
    setTime(newtime);
  }

  return (
    <svg
      viewBox={
        "0 0 " +
        (unitDistance1 * 2 + (number - 1) * (unitDistance1 * 2 + between) + 3) +
        " 100"
      }
    >
      {(() => {
        const backgroundlines = [];
        for (let i = 1; i < number; i++) {
          backgroundlines.push(
            <path
              d={backgroundlineN(i)}
              stroke="#9E9E9E"
              strokeWidth="2"
              key={i}
            />
          );
        }
        return backgroundlines;
      })()}
      <path stroke="#412490" strokeWidth="2">
        <animate
          attributeName="d"
          begin="indefinite"
          fill="freeze"
          ref={animateLine}
        ></animate>
      </path>
      {(() => {
        const diamonds = [];
        for (let i = 1; i <= number; i++) {
          diamonds.push(
            <g key={i}>
              <path
                d={diamond2N(i - 1)}
                fill={i !== 1 ? "#9E9E9E" : "#412490"}
                ref={arr[i - 1]}
                onClick={() => history(i)}
              />
              <text
                x={1 + (i - 1) * (unitDistance1 * 2 + between) + gap + 19 + ""}
                y="57"
                fontSize="1.5em"
                fontWeight="bold"
                fill="#FFFFFF"
                onClick={() => history(i)}
              >
                {i}
              </text>
            </g>
          );
        }
        return diamonds;
      })()}

      <path d={diamond1N(0)} stroke="#412490" strokeWidth="2" fill="none">
        <animate
          attributeName="d"
          begin="indefinite"
          fill="freeze"
          ref={animateRing}
        ></animate>
      </path>
    </svg>
  );
}
