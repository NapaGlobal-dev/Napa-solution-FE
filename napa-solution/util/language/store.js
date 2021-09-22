import { createContext, useEffect, useRef, useState } from 'react';

export const StoreContext = createContext(null);

const StoreProvier = ({ children }) => {
  let initLanguageData = null;
  const [language, setLanguage] = useState(
    initLanguageData === null ? 2 : parseInt(initLanguageData)
  );
  // const prevLanguage = useRef();
  // useEffect(() =>{
  //   prevLanguage.current = 
  // })

  const handleChangeLanguage = (languageId) => {
    localStorage.setItem('languageID', languageId);
    setLanguage(languageId);
    window.location.href = '/';
  };

  const [store, setStore] = useState({
    language: [language, handleChangeLanguage]
  })

  useEffect(() => {
      initLanguageData = localStorage.getItem('languageID');
      setLanguage(parseInt(initLanguageData));
      const store = {
        language: [language, handleChangeLanguage]
      };
      setStore(store);
  },[language])

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default StoreProvier