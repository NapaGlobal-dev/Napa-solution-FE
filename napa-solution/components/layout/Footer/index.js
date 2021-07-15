const Footer = () => {
  return (
    <footer id="sticky-footer" className="">
      <div className="footer-info row container-fluid no-default-spacing">
        <div className="footer-item-1">
          <a href="business-summary.html" className="footer-title">
            事業概要
          </a>
          <a href="operation-management.html" className="footer-content">
            » 運転管理
          </a>
          <a href="inspect-maintenance.html" className="footer-content">
            » 設備管理・点検・保守
          </a>
          <a href="remote-manage.html" className="footer-content">
            » 広域ビル・遠隔管理
          </a>
        </div>
        <div className="footer-item-2">
          <a href="company.html" className="footer-title">
            企業情報
          </a>
          <a href="company.html" className="footer-content">
            » ご挨拶
          </a>
          <a href="company-profile.html" className="footer-content">
            » 会社概要
          </a>
          <a href="company-history.html" className="footer-content">
            » 沿革
          </a>
          <a href="csr.html" className="footer-content">
            » CSR
          </a>
        </div>
        <div className="footer-item-3">
          <a href="recruit.html" className="footer-title">
            採用情報
          </a>
          <a href="recruit-about.html" className="footer-content">
            » 日本空調システムについて
          </a>
          <a href="recruit-score.html" className="footer-content">
            » 「数値」で見る日本空調システムの強み
          </a>
          <a href="recruit-senior.html" className="footer-content">
            » 先輩が語る日本空調システムの仕事
          </a>
          <a href="recruit-qa.html" className="footer-content">
            » よくある質問
          </a>
        </div>
        <div className="footer-item-3">
          <span className="footer-title">&nbsp;</span>
          <a href="recruit-system.html" className="footer-content">
            » 各種制度
          </a>
          <a
            href="https://job.rikunabi.com/2021/company/r999142021/"
            target="_blank"
            className="footer-content"
          >
            » 新卒採用エントリー
          </a>
          <a
            href="https://en-gage.net/system_saiyo/"
            target="_blank"
            className="footer-content"
          >
            » 中途採用エントリー
          </a>
        </div>
        <div className="footer-logo">
          <img className="footer-img" src="./img/footer/logo-footer.png" />
          <span className="text-footer">〒461-0011 名古屋市東区白壁1-9</span>
        </div>
      </div>

      <div className="footer-coppy-right">
        <div className="container-fluid no-default-spacing">
          <div className="row no-default-spacing">
            <div className="col-xl-6 col-md-12 order-2 order-lg-1 no-default-spacing">
              <span className="end-footer-text-1">
                © NIPPON KUCHO SYSTEM Co., Ltd.
              </span>
            </div>
            <div className="col-xl-6 col-md-12 order-1 order-lg-2 no-default-spacing wapper-text-end">
              <a href="privacy-policy.html" className="end-footer-text-2">
                » プライバシーポリシー
              </a>
              <a href="outsourcing.html" className="end-footer-text-3">
                » 協力会社の皆様へ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
