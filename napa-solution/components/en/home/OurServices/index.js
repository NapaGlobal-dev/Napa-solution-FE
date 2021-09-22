import styles from "./ourServices.module.css";
import ServiceBlock from "../ServiceBlock";
import { FetchIntroService } from "../../../../services/en/data/home";
import { FetchAllService } from "../../../../services/en/data/general";
import parser from "html-react-parser";
import appearStyles from "../../../../components/en/common/AppearAnimation/appear.module.css";
import clsx from "clsx";

const OurServices = () => {
  const { loadingIS, introService, errorIS } = FetchIntroService();
  const { loadingService, services } = FetchAllService();
  // const parse = (text, placeholder) =>
  //   loadingService ? placeholder ?? "" : parser(text?.language?.["en"] ?? "");
  const parse2 = (text, placeholder) =>
    loadingService ? placeholder ?? "" : parser(text?.["en"] ?? "");

  return (
    <div className={styles.root} id='services-section'>
      <h1 className={clsx(styles.title, appearStyles.bounce)}>
        {!loadingIS && !errorIS && parse2(introService?.title)}
      </h1>
      <p className={styles.paragraph}>
        {!loadingIS && !errorIS && parse2(introService?.subtitle)}
      </p>
      <div className={styles.blockContainer}>
        {!loadingIS &&
          services?.services?.map((service, index) => (
            <ServiceBlock
              key={index}
              {...service}
              loading={loadingService}
              index={index}
            />
          ))}
      </div>
    </div>
  );
};

export default OurServices;
