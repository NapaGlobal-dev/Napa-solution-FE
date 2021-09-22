import clsx from 'clsx';
import { useContext, useEffect, useState } from 'react';
import languages from '../../../../../util/language/language';
import { StoreContext } from '../../../../../util/language/store';
import styles from './index.module.css';

const Language = () => {
  const [openDropdown, setOpenDropndown] = useState(false);
  const [language, setLanguage] = useState({});
  const dataLang = useContext(StoreContext)?.language;

  useEffect(() => {
    setLanguage(dataLang);
  }, [dataLang]);

  return (
    <div className={styles.langWrapper}>
      <div className={styles.langBtn} onClick={() => setOpenDropndown(true)}>
        <div>{languages[language[0]]}</div>
        <div className={clsx(styles.langArr, styles.arrDown)}></div>
      </div>
      <div className={clsx(styles.langList, openDropdown && styles.showLangList)}>
        {languages.map((lang, index) => (
          <div
            key={index}
            onClick={() => {
              language && language[1](index);
              setOpenDropndown(false);
            }}
            className={clsx(index === language[0] && styles.langActive)}
          >
            <div>{lang}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Language;
