import Row from "../components/typeOfList/row";
import { useState, useEffect } from "react";
import clsx from "clsx";
import styles from "./index.module.css";
// import router, { useRouter } from "next/router";
// function filterProjectByType(type, index, projects) {
//   if (!type || !projects) return [];

//   const currentType = type.content[index];
//   return projects.content.filter((p) =>
//     p.content[0].content.some((t) => t.value == currentType.value)
//   );s
// }

const splitUrl = (urlstring, regex = undefined) => {
  const urls = urlstring.split(",");
  const rs = !regex ? urls[0] : urls.find((url) => regex.test(url)) || urls[0];
  return rs.trim();
};

function OurWork({ data, service }) {
  const [activeTech, setActiveTech] = useState(0);
  const [loadmore, setLoadmore] = useState(6);
  const [caseStudies, setCaseStudies] = useState([]);
  // const router = useRouter();
  const arrKeys = [
    {
      value: "All",
    },
  ];
  const keys = arrKeys.concat(
    data?.keys[0]?.content &&
      data?.keys[0]?.content.slice().filter((e) => {
        return e.key !== "JODC" && e.key !== "Mobile Application Development";
      })
  );
  const title = data?.caseStudies[0]?.key;
  const subTitle = data?.caseStudies[0]?.value;

  useEffect(() => {
    const tempList = data?.caseStudies[0]?.content
      ?.map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    setCaseStudies(
      tempList?.filter((e) => {
        return (
          e.value !== "NFT Gaming" &&
          e.value !== "ERC20" &&
          e.value !== "Hackathon" &&
          e.value !== "Ultorex"
        );
      }) || []
    );
  }, [data]);

  const caseStudyList = (() => {
    if (!service) {
      if (!activeTech)
        return caseStudies?.map((cs) => {
          cs.rightUrl = splitUrl(cs.url);
          return cs;
        });

      const reg = RegExp(keys[activeTech]?.key);
      return caseStudies
        ?.filter((cs) => reg.test(cs.key))
        .map((cs) => {
          cs.rightUrl = splitUrl(cs.url, reg);
          return cs;
        });
    }

    const reg = RegExp(service.toUpperCase());
    return caseStudies
      ?.filter((cs) => reg.test(cs.url.toUpperCase()))
      .map((cs) => {
        // find url based on service name
        cs.rightUrl = splitUrl(cs.url, reg);
        return cs;
      });
  })();
  const handleActive = (index) => {
    setActiveTech(index);
    setLoadmore(6);
  };

  const handleLoadMoreToggle = (e) => {
    if (e.target.innerHTML == "COLLAPSE") setLoadmore(6);
    else setLoadmore(loadmore + 6);
  };

  return (
    <>
      <div className="container-fluid">
        <div className={styles.wrapCS} id="down-up">
          <div id="projects-section" className={styles.wrapCenter}>
            <div className={clsx(styles.wrapText, styles.wrapTextCenter)}>
              <h2
                className={clsx("wow slideInDown")}
                data-wow-delay="0.75s"
                id="main-title"
              >
                {title}
              </h2>
              <h5
                className={"wow slideInDown"}
                data-wow-delay="0.5s"
                id="sub-title"
              >
                {subTitle}
              </h5>
              {!service ? (
                <div className={styles.wrapTech} id="casetudy-select">
                  {keys.map((entry, index) => (
                    <div
                      key={index}
                      className={clsx(
                        activeTech === index
                          ? styles.techItemActive
                          : styles.techItem,
                        "wow slideInDown"
                      )}
                      data-wow-delay="0.25s"
                      onClick={() => handleActive(index)}
                    >
                      <span>{index === 0 ? entry?.value : entry?.key}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <></>
              )}
            </div>
            <div
              className={
                caseStudyList?.length > 6
                  ? loadmore < 6
                    ? clsx(
                        styles.wrapProjectRow,
                        // styles.fixheight,
                        styles.loadmore
                      )
                    : clsx(styles.wrapProjectRow)
                  : clsx(styles.wrapProjectRow)
              }
            >
              {caseStudyList?.slice(0, loadmore).map((entry, index) => (
                <Row
                  entry={entry}
                  key={entry.name}
                  // loading={loadingProject}
                  // onClick={() => router.push(`${entry.url}`)}
                />
              ))}
            </div>
            {caseStudyList?.length > 6 && (
              <div
                className={clsx(
                  "d-flex icon-loadmore justify-content-center align-items-center",
                  styles.button
                )}
                onClick={handleLoadMoreToggle}
              >
                <img
                  className={clsx(
                    "svg-inline--fa fa-dot-circle fa-w-16",
                    styles.svgicon
                  )}
                  src="/img/loadmore.svg"
                  alt="loadmore"
                />
                <h4 className={clsx(styles.h4text)}>
                  {loadmore > caseStudyList.length ? "COLLAPSE" : "LOAD MORE"}
                </h4>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default OurWork;
