import clsx from "clsx";
import styles from "./style.module.css";
import { convertArrToObject } from "../../../util/converArrayToObject";

const data = {
  title: "WHY NAPA?",
  subTitle: "なぜナパ？",
  table: [
    {
      why: "01. 安価で高品質",
      reason: [
        "・オフショアの開発スタイルで、国内開発と比べて30％以上のコスト削減を実現致します。",
        "・弊社ではお客様の要望・状況により、ジャパン側で日本人の方が各プロジェクトの品質",
        "・コミュニケーション ※進捗などを常時チェックし、迅速にアラートをあげる体制を構築しております。",
      ],
    },
    {
      why: "02. 日本市場・文化・働き方・マナーの理解度が高い",
      reason: [
        "・10年以上日本での就労経験のあるコアメンバーで設立し、日本のビジネスを理解しており、日本での就労経験のあるエンジニアも多く在 籍しているため、日本文化での開発が行えます。",
        "・日本語能力が高いエンジニアが多く、直接御社のエンジニア同士、",
        "※日本語でやりとりすることが可能です。",
        "・日本法人が窓口としてサポートしています。",
        "※これらの観点からオフショア開発に始めてトライするお客様でも安心でご利用いただけます。",
      ],
    },
    {
      why: "03. 技術能力が高い",
      reason: [
        "・世界のトレンドを常にキャッチアップしており、画像処理・音声処理などのAI技術・ブロックチェーン技術など最先端技術も問題なく対 応できます。",
        "・組み込み開発など、ECU・MBDの開発がその他のオフショアとの差別点となります。",
        "・AIの学習データづくりの技術もあり、データ収集・前処理から解析することができます。",
        "・ISTQBやAWSなど世界基準の資格を持ってCMMIレベル3の基準に基づき、いつも世界の高い基準で開発・作業を行なっていく。",
      ],
    },
  ],
};
const WhyNapa = (props) => {
  const datas = convertArrToObject(props.data.property);
  const title = Object.values(datas).filter((item) =>
    item.name.includes("CompanyAbout_WhyNapa_Title")
  )[0];
  const subTitle = Object.values(datas).filter((item) =>
    item.name.includes("CompanyAbout_WhyNapa_SubTitle")
  )[0];
  const tableWhy = Object.values(
    datas.CompanyAbout_WhyNapa_Table.content
  ).filter((item) => item.name.includes("CompanyAbout_WhyNapa_Table_Why"));
  const tableReason = Object.values(
    datas.CompanyAbout_WhyNapa_Table.content
  ).filter((item) => item.name.includes("CompanyAbout_WhyNapa_Table_Reason"));

  return (
    <div className="container-fluid">
      <div className={clsx("cover", styles.cover)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="58.948"
          height="124.343"
          viewBox="0 0 58.948 124.343"
        >
          <g
            id="Group_135"
            data-name="Group 135"
            transform="translate(-98.543 -1182.829)"
          >
            <line
              id="Line_88"
              data-name="Line 88"
              x1="94.203"
              transform="matrix(0.574, -0.819, 0.819, 0.574, 101, 1261.142)"
              fill="none"
              stroke="#6a43d5"
              stroke-width="4"
            />
            <line
              id="Line_89"
              data-name="Line 89"
              x1="94.203"
              transform="matrix(0.574, -0.819, 0.819, 0.574, 101, 1283.819)"
              fill="none"
              stroke="#6a43d5"
              stroke-width="6"
            />
            <line
              id="Line_90"
              data-name="Line 90"
              x1="94.203"
              transform="matrix(0.574, -0.819, 0.819, 0.574, 101, 1306.024)"
              fill="none"
              stroke="#6a43d5"
              stroke-width="4"
            />
          </g>
        </svg>
        <h3 id="down-up">{title.value}</h3>
        <p id="down-up">{subTitle.value}</p>
        <div className={clsx(styles.table)}>
          {tableWhy?.map((item, index) => (
            <div className={clsx(styles.item)} key={index} id="down-up">
              <p>{item.value}</p>
              <div className={clsx(styles.groupReason)}>
                {tableReason[index].content?.map((reason, index) => (
                  <p key={index}>{reason.value}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyNapa;
