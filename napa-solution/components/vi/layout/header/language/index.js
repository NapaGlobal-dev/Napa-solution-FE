import clsx from 'clsx';
import { useContext, useState } from 'react';
import languages from 'utils/languages';
import { StoreContext } from 'utils/store';
import styles from './index.module.css';

const Language = () => {
  const [openDropdown, setOpenDropndown] = useState(false);

  const {
    language: [languageId, setLanguageId]
  } = useContext(StoreContext);

  return (
    <div className={styles.langWrapper}>
      <div className={styles.langBtn} onClick={() => setOpenDropndown(true)}>
        <div>{languages[languageId]}</div>
        <div className={clsx(styles.langArr, styles.arrDown)}></div>
      </div>
      <div className={clsx(styles.langList, openDropdown && styles.showLangList)}>
        {languages.map((lang, index) => (
          <div
            key={index}
            onClick={() => {
              setLanguageId(index);
              setOpenDropndown(false);
            }}
            className={clsx(index === lang.activeLang && styles.langActive)}
          >
            <div>{lang}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Language;
