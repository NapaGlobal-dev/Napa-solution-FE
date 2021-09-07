import Row from "../components/typeOfList/row";
import React, { useState } from "react";
import clsx from "clsx";
import styles from "./index.module.css";
import Head from "next/head";

function filterProjectByType(type, index, projects) {
  if (!type || !projects) return [];

  const currentType = type.content[index];
  return projects.content.filter((p) =>
    p.content[0].content.some((t) => t.value == currentType.value)
  );
}

function OurWork(props) {
  const [activeTech, setActiveTech] = useState(0);
  const [loadmore, setLoadmore] = useState(false);
  // const history = useHistory();
  console.log(
    "data ourworks",
    props.data,
    filterProjectByType(props.data?.Type, activeTech, props.data?.Projects)
  );
  const handleActive = (index) => {
    setActiveTech(index);
    setLoadmore(false);
  };
  const handleLoadMoreToggle = () => {
    setLoadmore(!loadmore);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="cover">
          <div className="container-fluid" id="projects-section">
            <div className={clsx(styles.wrapText, styles.wrapTextCenter)}>
              <h2
                className={clsx(styles.title, "wow slideInDown")}
                data-wow-delay="0.75s"
              >
                {props.data?.Title?.value}
              </h2>
              <h5
                className={clsx(styles.subTitle, "wow slideInDown")}
                data-wow-delay="0.5s"
              >
                {props.data?.SubTitle?.value}
              </h5>
              <div className={styles.wrapTech}>
                {props.data?.Type?.content.map((entry, index) => (
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
            </div>
            <div
              className={
                filterProjectByType(
                  props.data?.Type,
                  activeTech,
                  props.data?.Projects
                ).length > 6
                  ? loadmore
                    ? clsx(
                        styles.wrapProjectRow,
                        styles.fixheight,
                        styles.loadmore
                      )
                    : clsx(styles.wrapProjectRow, styles.fixheight)
                  : clsx(styles.wrapProjectRow)
              }
            >
              {filterProjectByType(
                props.data?.Type,
                activeTech,
                props.data?.Projects
              ).map((entry, index) => (
                <Row
                  entry={entry}
                  key={Date.now() + index}
                  // loading={loadingProject}
                  // onClick={() => history.push(`/projects/detail/${entry.id}`)}
                />
              ))}
            </div>
            {filterProjectByType(
              props.data?.Type,
              activeTech,
              props.data?.Projects
            ).length > 6 && (
              <div className="d-flex justify-content-center align-items-center">
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
                  {loadmore ? "COLLAPSE" : "LOAD MORE"}
                </h4>
              </div>
            )}
            x
          </div>
        </div>
      </div>
    </>
  );
}

export default OurWork;
