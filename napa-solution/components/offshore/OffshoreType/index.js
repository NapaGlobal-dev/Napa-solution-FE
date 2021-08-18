import { convertArrToObject, getData } from '../../../util/converArrayToObject';
import styles from './style.module.css';

const OffshoreType = (props) => {
    const typeOffshore = convertArrToObject(props.data.property);
    const content = Object.values(typeOffshore).filter((item) =>
    item.name.includes("Offshore_OffshoreType_Introduce")
  );
  let offshoreIntro = [];
  content.map((item) => { offshoreIntro.push({title:item.content[0].value, subtitle:item.content[1].value, content: item.content.slice(2)})});

    return (
        <>
            <div className="container-fluid">
                <div className={styles.cover}>
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
                    <h3>{typeOffshore.Offshore_OffshoreType_Title.value}</h3>
                    <p>{typeOffshore.Offshore_OffshoreType_Subtitle.value}</p>
                    <div className={styles.item}>
                        {offshoreIntro.map((item, key) => (
                            <div className = {styles.introduce} key = {key}>
                            <p className={styles.title}> {item.title} </p>
                            <p className={styles.subtitle}> {item.subtitle}</p>
                            {item.content.map((content, key) =>(
                                <p className={styles.content} key = {key}>{content.value} </p>
                            ))}
                        </div>
                        ))}
    
                    </div>
                </div>
            </div>
        </>
    );
}

export default OffshoreType;