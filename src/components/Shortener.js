import { useState } from "react";
import styles from "./Shortener.module.css";

const Shortener = () => {
  const [showWarning, setShowWarning] = useState(true);

  return (
    <div className={styles.container}>
      <div className={`${styles.input} ${showWarning && styles.warning}`}>
        <input type="text" placeholder="Shorten a link here..." />
        {showWarning && (
          <div>
            <em>Please add a link</em>
          </div>
        )}
      </div>
      <button className={styles.button}>Shorten it!</button>
    </div>
  );
};

export default Shortener;
