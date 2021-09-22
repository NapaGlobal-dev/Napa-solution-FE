import styles from './index.module.css';
import WorldMap from '../../../assets/images/en/home/world-map.png';
import clsx from 'clsx';
import Earth from '../../../assets/flag/earth-globe.svg';
import VNFlag from '../../../assets/flag/vn.svg';
import USAFlag from '../../../assets/flag/usa.svg';
import AUSFlag from '../../../assets/flag/aus.svg';
import JPFlag from '../../../assets/flag/jp.svg';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import SlideWrapper from './SlideWrapper';
import BackgroundMobile from './components/backgroundMobile';

const arrOffices = [
  {
    id: 1,
    flag: Earth,
    alt: "Earth",
    dot: null,
    activeState: null,
    h3: "Our offices",
    content: "We have 4 offices around the world",
    leader: null,
    fullContent: null
  },
  {
    id: 2,
    flag: VNFlag,
    alt: "Vietnam's flag",
    dot: styles.VNDot,
    activeState: 'vn',
    h3: 'Vietnam',
    content: 'Our headquarter office in Danang, Vietnam is led by ',
    leader: 'Mr. Peter Ngo',
    fullContent:
      "Peter Ngo is a business and technical leader in the Information Technology outsourcing industry with 12 years of experience in working with large corporations and agile startups in the US, Japan, Korea, and Vietnam. Peter has worked on all important roles in software development from software engineer to delivery manager. Prior to founding NAPA Global, Peter was a Business Unit Director at FPT, one of the leading IT companies in Asia. Peter continues to bring his deep understanding in technology and business to help NAPA Global's clients achieve their business goals."
  },
  {
    id: 3,
    flag: AUSFlag,
    alt: "Australia's flag",
    dot: styles.AUDot,
    activeState: 'au',
    h3: 'Australia',
    content: 'Our office in Australia is led by ',
    leader: 'Dr. Danny Ngo',
    fullContent:
      'Dr. Danny Ngo has 14 years of R&D experience in Oceania and North America, having established himself as an international expert in the domain of the Internet of Things, 5G/6G telecommunications systems, and intelligent transportation. He has collaborated with the world’s largest corporations in the telecommunications industry in several key R&D projects. At Napa Global, he is a principal technology advisor and a VP leading the market development efforts in Australia and New Zealand. He continues to bring his expert knowledge of advanced engineering and technology into the software and systems design process.'
  },
  {
    id: 4,
    flag: USAFlag,
    alt: "US's flag",
    dot: styles.NADot,
    activeState: 'na',
    h3: 'US',
    content: 'Our presence in the US is led by ',
    leader: 'Ms. Kimberly Bui',
    fullContent:
      'Kimberly Bui is an expert in state-of-the-art technologies and business strategies. She has advised entrepreneurs from startups and executive business leaders from multi-national corporations on a wide range of technologies in AI, robotics, e-commerce, and financial services to meet their business needs. At NAPA Global, Kimberly provides valuable guidance for our development teams to best serve different types of clients.'
  },
  {
    id: 5,
    flag: JPFlag,
    alt: "Japan's flag",
    dot: styles.JPDot,
    activeState: 'jp',
    h3: 'Japan',
    content: 'Our office in Japan, NAPA solutions, is led by ',
    leader: 'Mr. Azel Le',
    fullContent:
      "Azel Le is an experienced technologist and a serial entrepreneur with more than 10 years of working experience in the Information Technology industry. He is an expert in the embedded system domain and has helped many automotive companies solve their challenging engineering problems. Azel Le has also founded several startups providing services in IT and international trading. Azel continues to bring his vision and expertise to help expand NAPA Global's networks while delivering high quality services to our clients."
  }
];

const Offices = () => {
  const [activeCountry, setActiveCountry] = useState('vn');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isShowFullContent, setIsShowFullContent] = useState(false);
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipe: true,
    autoplay: true,
    autoplaySpeed: 10000,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    }
  };
  useEffect(() => {
    setIsShowFullContent(false);
  }, [activeCountry]);

  function handleCloseTooltip(e) {
    e.stopPropagation();
    setActiveCountry(null);
  }

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Our Offices</h1>
      <p className={styles.subTitle}>
        We have offices and representatives around the world. We speak your
        languages and understand your local challenges. Let's connect to explore
        the new possibilities.
      </p>
      <div className={styles.wrapMap}>
        <img src={WorldMap} alt='World Map' className={styles.map} />
        {arrOffices.map((entry, index) => (
          <div
            key={index}
            className={clsx(
              entry.dot,
              activeCountry === entry.activeState && styles.show
            )}
            onClick={() => setActiveCountry(entry.activeState)}
          >
            <div className={styles.wrapTooltip}>
              <div className={styles.tooltip}>
                <div className={styles.ttHeader}>
                  <img
                    alt={entry.alt}
                    src={entry.flag}
                    className={styles.flag}
                  />
                  <h3>{entry.h3}</h3>
                  <span
                    className={styles.closeIcon}
                    onClick={handleCloseTooltip}
                  >
                    &times;
                  </span>
                </div>
                <div className={styles.ttBody}>
                  <p>
                    {entry.content}
                    <strong
                      onClick={() => setIsShowFullContent(!isShowFullContent)}
                    >
                      {entry.leader}
                    </strong>
                  </p>
                  {isShowFullContent && (
                    <p className={styles.fullContent}>{entry.fullContent}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Responsive mobile */}
      <div className={styles.sliderBox}>
        <div className={styles.wrapBg}>
          <BackgroundMobile currentSlide={currentSlide} />
        </div>
        <SlideWrapper className={styles.styled}>
          <Slider {...settings}>
            {arrOffices.map((entry, index) => (
              <div className={styles.wrapSlide} key={index}>
                <div className={styles.slideRoot}>
                  <div className={styles.slideHeader}>
                    {/* <img src={VNFlag} className={styles.flag} alt='Flag' /> */}
                    <h3>
                      {entry.h3}
                      <span className={styles.flagMobile}>
                        <img
                          src={entry.flag}
                          className={styles.flag}
                          alt={entry.alt}
                        />
                      </span>
                    </h3>
                  </div>
                  <div className={styles.slideBody}>
                    <p>
                      {entry.content}
                      <strong
                        onClick={() => setIsShowFullContent(!isShowFullContent)}
                      >
                        {entry.leader}
                      </strong>
                    </p>
                    {isShowFullContent && (
                      <p className={styles.fullContent}>{entry.fullContent}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </SlideWrapper>
      </div>
    </div>
  );
};

export default Offices;
