import styles from './index.module.css';
import img1 from '../../../assets/images/vi/works/jobstep_CV.svg';
import img2 from '../../../assets/images/vi/works/jobstep_call.svg';
import img3 from '../../../assets/images/vi/works/jobstep_onjob.svg';

const Recruit = () => {
  return (
    <div className={styles.root}>
      <div className={styles.mainTitle}>
        <h2>Quy trình tuyển dụng</h2>
        <p>Nhanh chóng - Hiện đại - Chuyên nghiệp</p>
      </div>
      <div className={styles.wrapProcess}>
        <div className={styles.itemProcess1}>
          <div className={styles.text}>
            <div className={styles.mainText}>
                Ứng tuyển
            </div>
            <div className={styles.des}>
              <h5>Click vào vị trí bạn muốn ứng tuyển.</h5>
              <h5>Vui lòng để lại thông tin và đính kèm CV để chúng tôi có thể liên hệ.</h5>
            </div>
          </div>
          <div className={styles.background}></div>
          <div className={styles.img}>
            <img src={img1} alt="AI" />
          </div>
        </div>
        <div className={styles.itemProcess2}>
          <div className={styles.img}>
            <img src={img2} alt="AI" />
          </div>
          <div className={styles.background}></div>
          <div className={styles.text}>
            <div className={styles.mainText}>
            Tuyển chọn CV
            </div>
            <div className={styles.des}>
            <h5>Bạn sẽ nhận được email xác nhận sau khi gửi CV</h5>
            <h5>CV sẽ được chuyển đến bộ phận chuyên môn để xem xét và đánh giá</h5>
            <h5>Trong vòng 1 tuần, bạn sẽ được liên hệ lại để được hẹn phỏng vấn nếu CV phù hợp.</h5>
            
          </div>
          </div>
        </div>
        <div className={styles.itemProcess3}>
          <div className={styles.text}>
            <div className={styles.mainText}>
            Thông báo kết quả
            </div>
            <div className={styles.des}>
            <h5>Bạn sẽ nhận được kết quả nhanh nhất trong vòng 3 ngày sau khi phỏng vấn.</h5>
            <h5>Nếu đạt yêu cầu tuyển dụng, HR sẽ liên hệ để trao đổi về offer và hợp đồng.</h5>
          </div>
          </div>
          <div className={styles.background}></div>
          <div className={styles.img}>
            <img src={img3} alt="AI" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruit;
