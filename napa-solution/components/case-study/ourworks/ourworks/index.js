import Row from "../components/typeOfList/row";
import { useState, useEffect } from "react";
import clsx from "clsx";
import styles from "./index.module.css";
import { useRouter } from "next/router";
// function filterProjectByType(type, index, projects) {
//   if (!type || !projects) return [];

//   const currentType = type.content[index];
//   return projects.content.filter((p) =>
//     p.content[0].content.some((t) => t.value == currentType.value)
//   );
// }

function OurWork({ data, service }) {
  const [activeTech, setActiveTech] = useState(0);
  const [loadmore, setLoadmore] = useState(6);
  const [caseStudies, setCaseStudies] = useState([]);
  const router = useRouter();
  const keys = [
    {
      value: "All",
    },
    ...data?.keys[0]?.content,
  ];

  const title = data?.caseStudies[0]?.key;
  const subTitle = data?.caseStudies[0]?.value;

  useEffect(() => {
    setCaseStudies(
      data?.caseStudies[0]?.content
        ?.map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
    );
  }, []);

  // const history = useHistory();
  // console.log(
  //   "data ourworks",
  //   props.data,
  //   filterProjectByType(props.data?.Type, activeTech, props.data?.Projects)
  // );
  const caseStudyList = (() => {
    if (!service) {
      if (!activeTech) return caseStudies;

      const reg = RegExp(keys[activeTech].key);
      return caseStudies?.filter((cs) => reg.test(cs.key));
    }

    const reg = RegExp(service);
    return caseStudies?.filter((cs) => reg.test(cs.key));
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
        <div className={styles.wrapCS}>
          <div id="projects-section">
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
                <div className={styles.wrapTech}>
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
                      <span>{entry.value}</span>
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
                  key={Date.now() + index}
                  // loading={loadingProject}
                  onClick={() => router.push(`${entry.url}`)}
                />
              ))}
            </div>
            {caseStudyList?.length > 6 && (
              <div className="d-flex icon-loadmore justify-content-center align-items-center">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="dot-circle"
                  className={clsx(
                    "svg-inline--fa fa-dot-circle fa-w-16",
                    styles.svgicon
                  )}
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"
                  ></path>
                </svg>
                <h4
                  onClick={handleLoadMoreToggle}
                  className={clsx(styles.h4text)}
                >
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
