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
  // const history = useHistory();
  console.log(
    "data ourworks",
    props.data,
    filterProjectByType(props.data?.Type, activeTech, props.data?.Projects)
  );
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
                    onClick={() => setActiveTech(index)}
                  >
                    <span>{entry.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.wrapProjectRow}>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default OurWork;
