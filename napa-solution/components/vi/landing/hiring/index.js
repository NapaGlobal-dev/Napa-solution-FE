import styles from './index.module.css';
import Item from './item';
import { FetchAllRecruits, FetchIntroRecruit } from '../../../../services/vi/home';
import parser from 'html-react-parser';

const Hiring = () => {
  const { loadingIR, introRecruit } = FetchIntroRecruit();
  const { loadingRecruit, recruits } = FetchAllRecruits(3, 0);

  const parse = (text, placeholder) =>
    loadingIR ? placeholder ?? '' : parser(text?.['vi'] ?? '');
  return (
    <div className={styles.root} id='recruit'>
      <h1 className={styles.title}>
        {!loadingIR && parse(introRecruit?.home_recruit_title)}
      </h1>
      <p className={styles.desc}>
        {!loadingIR && parse(introRecruit?.home_recruit_subtile)}
      </p>
      <div className={styles.wrapListItem}>
        {!loadingRecruit &&
          recruits?.recruits?.map((entry, index) => (
            <Item
              key={index}
              data={entry}
              index={index}
              loadingRecruit={loadingRecruit}
              lastItem={recruits?.recruits?.length - 1 === index && true}
            />
          ))}
      </div>
    </div>
  );
};

export default Hiring;
