import { getData } from "../../util/converArrayToObject";
import { useRef, useState } from "react";
import Hisory from "./History";
import Milestone from "./Milestone";
import HorizonMilestone from "./HorizonMilstone";

export default function Timeline({ data }) {
  const title = getData(data, /CompanyHistory_Timeline_Title/)[0];
  const timelines = getData(data, /CompanyHistory_Timeline_Content/);
  const scrollE = useRef();
  const [time, setTime] = useState(1);
  const nextR = useRef();

  function next(time) {
    nextR?.current(time);
  }

  return (
    <>
      <div className="cover">
        <img className="decor-head-line" src="/img/line-style.svg" />
        <h3 id="down-up">{title?.key}</h3>
        <p id="down-up">{title?.value}</p>
      </div>
      <div className="container-timeline">
        <div className="timeline">
          <Milestone
            scrollE={scrollE}
            setTime={setTime}
            nextR={nextR}
            time={time}
            number={timelines.length}
          />
          <div className="slide">
            <div className="stack" ref={scrollE}>
              {timelines.map((timeline, index) => (
                <Hisory
                  next={() => next(index + 1)}
                  timeline={timeline}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
        {title ? (
          <div className="horizonMilestone">
            <HorizonMilestone
              scrollE={scrollE}
              setTime={setTime}
              time={time}
              number={timelines.length}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
