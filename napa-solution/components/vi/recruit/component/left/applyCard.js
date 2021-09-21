import { useState } from 'react';
import styles from './applyCard.module.css';
import FolderImage from 'assets/images/vi/landing/folder.svg';
import axios from 'axios';
import { UPLOAD_S3_ENTRY_POINT } from 'config';
import { S3_URL } from 'config';
import { useMutation } from '@apollo/client';
import generalQueries from 'query/vi/general';
import Popup from 'reactjs-popup';
import { ReactComponent as CloseIcon } from 'assets/icons/vi/recruit/times-solid.svg';
import { ReactComponent as CheckIcon } from 'assets/icons/vi/recruit/check-circle-regular.svg';
import { ReactComponent as LongRightArrowIcon } from 'assets/icons/vi/recruit/long-arrow-alt-right-solid.svg';
import { ReactComponent as FailIcon } from 'assets/icons/vi/recruit/times-circle-regular.svg';
import Loading from 'components/vi/common/loading';

const BuildFileSelector = () => {
  const fileSelector = document.createElement('input');
  if (fileSelector) {
    fileSelector.setAttribute('type', 'file');
    fileSelector.setAttribute('accept', 'application/pdf');
  }
  return fileSelector;
};

const ApplyCard = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    coverLetter: ''
  });
  const [errors, setErrors] = useState({
    nameErr: '',
    emailErr: '',
    coverLetterErr: '',
    fileCV: ''
  });
  const [fileSelect, setFileSelect] = useState(null);
  const [createdSuccess, setCreatedSuccess] = useState(undefined);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setLoading] = useState(false);

  const [createJob] = useMutation(generalQueries.CREATE_JOB_APPLICATION);

  const fileSelector = BuildFileSelector();

  /*
   * @param fileName: name of file (including ext)
   *
   */
  function getFileExtension(fileName) {
    const getFileExtReg = /\.([^.]*?)(?=\?|#|$)/g;
    const result = getFileExtReg.exec(fileName);
    return !result ? result : result[0];
  }

  function handleUploadFile() {
    fileSelector.click();
    fileSelector.onchange = () => {
      if(fileSelector.files[0].type !== 'application/pdf') {
        alert('File type is not allowed! ');
        return;
      }
      setFileSelect(fileSelector.files[0]);
    };
  }

  function handleChange(e) {
    let { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    setErrors({
      ...errors,
      [`${name}Err`]: ''
    });
  }

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function displayFileName() {
    const fileName = fileSelect.name;
    if (fileName.length <= 20) return fileName;
    return `${fileName.substring(0, 18)}... ${getFileExtension(fileName)}`;
  }

  async function handleSubmit() {
    const error = {};
    if (!values.name.trim()) error.nameErr = 'Tên không được để trống';

    if (!values.email.trim()) error.emailErr = 'Email không được để trống';
    else if (!validateEmail(values.email))
      error.emailErr = 'Email không hợp lệ';

    if (!values.coverLetter.trim())
      error.coverLetterErr = 'Thư xin việc không được để trống';

    if (fileSelect === null) error.fileCV = 'File xin việc không được trống';

    if (Object.keys(error).length) {
      setErrors(error);
      return;
    }

    setLoading(true);
    try {
      const result = await axios({
        method: 'POST',
        url: UPLOAD_S3_ENTRY_POINT,
        data: {
          fileExt: '.pdf',
          fullname: values.name
        }
      });
      const { url, key } = result.data;

      const fileCVUrl = `${S3_URL}/${encodeURI(key)}`;

      await createJob({
        variables: {
          ...values,
          fileCVUrl
        }
      });

      await axios({
        method: 'PUT',
        url,
        data: fileSelect,
        headers: {
          'Content-Type': fileSelect.type
        }
      });

      setCreatedSuccess(true);
      setLoading(false);
    } catch (err) {
      console.log(err);

      if (err.message === 'Apply so many times')
        setErrorMessage(
          'Vui lòng không gửi CV quá nhiều lần trên cùng một email.'
        );
      else
        setErrorMessage(
          'Vui lòng kiểm tra lại đường trường internet hoặc refresh lại trang'
        );

      setCreatedSuccess(false);
      setLoading(false);
    }
  }

  return (
    <div className={styles.root}>
      <div id='apply-job-section' className={styles.cpnArea}></div>
      <h3 className={styles.title}>ỨNG TUYỂN NGAY</h3>
      <div className={styles.wrapInfo}>
        <div className={styles.wrapForm}>
          <input
            className={styles.input}
            placeholder='Họ và tên'
            name='name'
            value={values.name}
            onChange={(e) => handleChange(e)}
          />
          <span className={styles.error}>{errors.nameErr}</span>
        </div>
        <div className={styles.wrapForm}>
          <input
            className={styles.input}
            placeholder='Email'
            name='email'
            value={values.email}
            onChange={(e) => handleChange(e)}
          />
          <span className={styles.error}>{errors.emailErr}</span>
        </div>
      </div>

      <div className={styles.wrapTextarea}>
        <textarea
          className={styles.textarea}
          placeholder='Thư xin việc'
          rows='4'
          name='coverLetter'
          onChange={(e) => handleChange(e)}
        />
        <span className={styles.error}>{errors.coverLetterErr}</span>
      </div>
      <div className={styles.wrapInfo}>
        <div className={styles.uploadSection} onClick={handleUploadFile}>
          <img src={FolderImage} alt='CV' className={styles.folderImg} />
          <span
            className={errors.fileCV && fileSelect === null && styles.error}
          >
            {fileSelect !== null
              ? displayFileName()
              : errors.fileCV
              ? errors.fileCV
              : 'Nộp CV tại đây'}
          </span>
        </div>
      </div>
      <div className={styles.wrapSubmit}>
        <div className={styles.wrapBtnSubmit}>
          <button onClick={handleSubmit}>
            Ứng tuyển
          </button>
        </div>
        <div className={styles.wrapHelpertext}>
          <p>*Bạn sẽ nhận được thông báo thông qua email</p>
        </div>
      </div>
      {isLoading && <Loading />}
      <Popup open={createdSuccess !== undefined}>
        <div className={styles.wrapPopup}>
          <div
            className={
              createdSuccess
                ? styles.wrapSuccessPopupTitle
                : styles.wrapFailPopupTitle
            }
          >
            <div className={styles.wrapCloseIcon}>
              <button
                className={styles.btnIcon}
                onClick={() => setCreatedSuccess(undefined)}
              >
                <CloseIcon className={styles.closeIcon} />
              </button>
            </div>
            <div>
              {createdSuccess ? (
                <CheckIcon className={styles.statusIcon} />
              ) : (
                <FailIcon className={styles.statusIcon} />
              )}
            </div>
          </div>
          <div className={styles.wrapContent}>
            <div className={styles.popupTitle}>
              {createdSuccess ? 'Tuyệt vời!' : 'Xin lỗi!'}
            </div>
            <div className={styles.popupContent}>
              {createdSuccess
                ? `Chúng tôi đã nhận được CV của bạn. Vui lòng theo dõi email
              ${values.email} để cập nhật thông tin về tình trạng CV.`
                : errorMessage}
            </div>
            <div className={styles.popupFooter}>
              <a href='/recruit'>Xem tiếp các tin tuyển dụng của chúng tôi</a>
              <LongRightArrowIcon className={styles.longRightArrowIcon} />
            </div>
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default ApplyCard;
