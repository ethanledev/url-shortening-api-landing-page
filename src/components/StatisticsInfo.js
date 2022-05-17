import styles from "./StatisticsInfo.module.css";
import { ReactComponent as BrandRecognition } from "../images/icon-brand-recognition.svg";
import { ReactComponent as DetailedRecords } from "../images/icon-detailed-records.svg";
import { ReactComponent as FullyCustomizable } from "../images/icon-fully-customizable.svg";

const StatisticsInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.stats}>
        <div className={styles.icon}>
          <BrandRecognition />
        </div>
        <h4>Brand Recognition</h4>
        <p>
          Boost your brand recognition with each click. Generic links don't mean
          a thing. Branded links help instil confidence in your content.
        </p>
      </div>
      <div className={styles.connector}></div>
      <div className={styles.stats}>
        <div className={styles.icon}>
          <DetailedRecords />
        </div>
        <h4>Detailed Records</h4>
        <p>
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </p>
      </div>
      <div className={styles.connector}></div>
      <div className={styles.stats}>
        <div className={styles.icon}>
          <FullyCustomizable />
        </div>
        <h4>Fully Customizable</h4>
        <p>
          Inprove brand awareness and content discoverability through
          customizable links, supercharging audience engagement.
        </p>
      </div>
    </div>
  );
};

export default StatisticsInfo;
