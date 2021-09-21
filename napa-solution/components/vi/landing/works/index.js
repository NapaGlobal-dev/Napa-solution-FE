import styles from './index.module.css';
import { FetchAllWorks, FetchIntroWorks } from 'services/vi/home';
import parser from 'html-react-parser';

const Works = () => {
  const { loadingIW, introWorks } = FetchIntroWorks();
  const { loadingWorks, works } = FetchAllWorks();
  const parse = (text, placeholder) =>
    loadingWorks ? placeholder ?? '' : parser(text?.['vi'] ?? '');
  return (
    <div className={styles.root} id='services-section'>
      <div className={styles.mainTitle}>
        <h2>{!loadingIW && parse(introWorks?.title)}</h2>
        <p>{!loadingIW && parse(introWorks?.subtitle)}</p>
      </div>
      <div className={styles.wrapItemWork}>
        {!loadingWorks &&
          works?.works?.map((entry, index) => (
            <div className={styles.itemWork} key={index}>
              <div className={styles.icon}>
                <img
                  src={!loadingWorks && entry.image.original}
                  alt="AI"
                />
              </div>
              <div className={styles.text}>
                <div className={styles.title}>
                  {!loadingWorks && entry?.fullName}
                </div>
                <div className={styles.des}>
                  {!loadingWorks && parse(entry?.description)}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Works;
