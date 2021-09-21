// import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import clsx from 'clsx';
import Button from 'components/en/common/Button';
import Loading from 'components/vi/common/loading';
import parser from 'html-react-parser';
import generalQueries from 'query/en/general';
import { useContext, useState } from 'react';
import { FetchIntroEmail } from 'services/en/data/general';
import languages from 'utils/languages';
import { StoreContext } from 'utils/store';

import styles from './index.module.css';

const initialState = { name: '', email: '', message: '' };

function Consultation() {
  const { loadingEmail, introEmail } = FetchIntroEmail();

  const [state, setState] = useState(initialState);
  const [errors, setErrors] = useState({
    nameErr: false,
    emailErr: false,
    messageErr: false
  });
  const [isLoading, setLoading] = useState(false);
  const [formTxt, setFormTxt] = useState(false);

  const [addCustomer] = useMutation(generalQueries.ADD_CUSTOMER);
  const {
    language: [languageId, setLanguageId]
  } = useContext(StoreContext);

  /*===============Function================*/

  /*
   * Handle change event for fields name, email, message
   */
  const handleChangeField = (e) => {
    const { name, value } = e.target;

    setState((prevState) => ({ ...prevState, [name]: value }));

    if (!value.trim())
      setErrors({
        ...errors,
        [`${name}Err`]: true
      });
    else if (name === 'email' && !validateEmail(value.trim()))
      setErrors({ ...errors, emailErr: 2 });
    else setErrors({ ...errors, [`${name}Err`]: false });
  };

  /*
   */
  const resetForm = () => setState(initialState);

  /*
   * @param {string} email input email need validating
   *
   * @return {boolean} email is valid or not
   */
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  /*
   * Validate fields
   *
   * @return true/false
   */
  const validate = () => {
    const tempErrors = {};

    for (const key of Object.keys(state))
      if (!state[key].trim()) tempErrors[`${key}Err`] = true;

    if (!tempErrors.emailErr && !validateEmail(state.email.trim()))
      tempErrors.emailErr = 2;

    if (Object.keys(tempErrors).length) {
      setErrors(tempErrors);
      return false;
    }

    return true;
  };

  /*
   */
  const submitSendMail = () => {
    if (!validate()) return;

    setLoading(true);
    addCustomer({
      variables: {
        name: state.name,
        email: state.email,
        subject: 'Contact request from NAPA-WEB-EN',
        message: state.message
      }
    }).then((res) => {
      setLoading(false);
      resetForm();
      setFormTxt(true);
      setTimeout(() => setFormTxt(false), 5000);
    });
  };

  const parse2 = (text, placeholder) => {
    const lang = languages[languageId].toLowerCase();
    return loadingEmail ? placeholder ?? '' : parser(text?.[lang] ?? '');
  };

  /*============Rendering============*/
  return (
    <div className={styles.root}>
      <div className={styles.wrapContent}>
        <div id='contact-section' className={styles.consutation}></div>
        <div className={clsx(styles.wrapText, 'wow slideInLeft')}>
          <h2 className={styles.title}>
            {!loadingEmail && parse2(introEmail.intro_email_title)}
          </h2>
          <h5 className={styles.subTitle}>
            {!loadingEmail && parse2(introEmail?.intro_email_subtitle)}
          </h5>
          <div
            className={clsx(
              styles.contactInfo,
              languageId === 0
                ? styles.contactInfoColorEN
                : styles.contactInfoColorVI
            )}
          >
            <span>
              {!loadingEmail && parse2(introEmail?.intro_email_email)}
            </span>
            <span>
              {!loadingEmail && parse2(introEmail?.intro_email_phone)}
            </span>
          </div>
        </div>
        <div className={clsx(styles.wrapForm, 'wow slideInRight')}>
          <div className={styles.form}>
            <div className={styles.firstRow}>
              <div className={styles.name}>
                <input
                  className={styles.form1}
                  placeholder={languageId === 0 ? 'Full name' : 'Họ và tên'}
                  type='text'
                  name='name'
                  value={state.name}
                  onChange={(e) => handleChangeField(e)}
                />
                <span className={styles.error}>
                  {errors.nameErr &&
                    !loadingEmail &&
                    parse2(introEmail?.intro_email_name_error)}
                </span>
              </div>
              <div className={styles.email}>
                <input
                  className={styles.form1}
                  placeholder='Email'
                  type='text'
                  name='email'
                  value={state.email}
                  onChange={(e) => handleChangeField(e)}
                />
                <span className={styles.error}>
                  {!loadingEmail &&
                    errors.emailErr &&
                    (errors.emailErr == 1
                      ? parse2(introEmail?.intro_email_email_error)
                      : parse2(introEmail?.intro_email_email_invalid_error))}
                </span>
              </div>
            </div>
            <div className={styles.secondRow}>
              <textarea
                rows={5}
                className={styles.message}
                placeholder={languageId === 0 ? 'Message' : 'Nội dung'}
                name='message'
                value={state.message}
                onChange={(e) => handleChangeField(e)}
              />
              <span className={styles.error}>
                {!isLoading &&
                  errors.messageErr &&
                  parse2(introEmail?.intro_email_message_error)}
              </span>
            </div>
            <div className={styles.wrapBtn}>
              <div className={languageId && styles.btn}>
                {languageId === 0 ? (
                  <Button onClick={submitSendMail} disabled={isLoading}>
                    Submit
                  </Button>
                ) : (
                  <button onClick={submitSendMail} disabled={isLoading}>
                    Submit
                  </button>
                )}
              </div>
              <div className={clsx(styles.text, formTxt && styles.textTrst)}>
                {!isLoading && parse2(introEmail?.intro_email_success_noti)}
              </div>
            </div>
            {isLoading && <Loading />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consultation;
