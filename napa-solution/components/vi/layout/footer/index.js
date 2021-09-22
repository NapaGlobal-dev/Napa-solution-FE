import styles from './index.module.css';
import FacebookIcon from '../../../assets/icons/vi/social/facebook.svg';
import LinkedInIcon from '../../../assets/icons/vi/social/linkedIn.svg';

const arrSocial = [
  {
    id: 1,
    name: 'Facebook',
    icon: FacebookIcon,
    href: 'https://www.facebook.com/Napaglobal'
  },
  {
    id: 1,
    name: 'LinkedIn',
    icon: LinkedInIcon,
    href: 'https://www.linkedin.com/company/napaglobal/'
  },
  // { id: 1, name: 'Twitter', icon: TwitterIcon, href: 'https://twitter.com/' }
];

const arrTerms = [
  { id: 1, content: 'IT Consulting Services' },
  { id: 1, content: 'Tech Support Services' },
  { id: 1, content: 'Cloud Computing Solutions' }
];

const Footer = () => {
  return (
    <footer className={styles.root}>
      {/* <img alt='Footer' src={FooterImage} className={styles.img} /> */}
      <div className={styles.wrapFooter}>
        <div className={styles.social}>
          <h3 className={styles.followUs}>Follow Us</h3>
          <div className={styles.wrapIcons}>
            {arrSocial.map((entry, index) => (
              <a key={index} href={entry.href} className={styles.wrapIcon}>
                <img
                  alt={entry.name}
                  src={entry.icon}
                  className={styles.icon}
                />
              </a>
            ))}
          </div>
        </div>
        <div className={styles.terms}>
          {arrTerms.map((entry, index) => (
            <h5 className={styles.term} key={index}>
              {entry.content}
            </h5>
          ))}
        </div>
        <div className={styles.copyRight}>
          <h5 className={styles.term}>
            © 2020 NAPA Global. All Rights Reserved.
          </h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
