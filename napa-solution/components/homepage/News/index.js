import styles from "./style.module.css";
import clsx from "clsx";
const New = (props) => {
  return (
    <div className={clsx("container-fluid", styles.container)}>
      <div className={clsx(styles.group1)}>
        <h4>NEWS</h4>
        <p>最新ニュース</p>
      </div>
      <div className={clsx(styles.group2)}>
        <p>
          NAPA SOLUTION（株）― ソフトウェア{"&"}
          アプリ開発展ＳＯＤＥＣ（2020年度）出展
        </p>
        <div className={clsx(styles.content)}>
          <p>
            NAPA SOLUTIONS
            株式会社は年始よりソフトウェア＆アプリ開発展示会（2020年度）に出展するように計画を立てています。
          </p>
          <p>
            弊社が開発している AI、BigData、Blockchain、Embedded
            Systems、Application Development
            に関係があるサービスや技術について紹介させて頂くという目的として出展いたします。
          </p>
          <p>
            なお、弊社が開発できたEZTEAMについても、顧客に紹介したいと存じまいます。
          </p>
        </div>
      </div>
    </div>
  );
};

export default New;
