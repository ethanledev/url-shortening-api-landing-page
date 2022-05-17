import { useState } from "react";
import styles from "./Shortener.module.css";

const Shortener = ({ addRecentLink }) => {
  const [warning, setWarning] = useState("");
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);

  const shortenLink = () => {
    if (link.length === 0) {
      setWarning("Please add a link");
      return;
    }

    setLoading(true);

    fetch("https://api.shrtco.de/v2/shorten?url=" + link)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.ok) {
          const { result } = data;
          addRecentLink({
            original: result.original_link,
            short: result.short_link,
            fullShort: result.full_short_link,
          });
          setLink("");
        } else {
          setWarning(data.error);
        }
      });
  };

  const handleOnChange = (e) => {
    if (warning.length > 0) {
      setWarning("");
    }

    setLink(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.input} ${warning.length && styles.warning}`}>
        <input
          type="text"
          placeholder="Shorten a link here..."
          value={link}
          onChange={(e) => handleOnChange(e)}
        />
        {warning.length > 0 && (
          <div>
            <em>{warning}</em>
          </div>
        )}
      </div>
      <button className={styles.button} onClick={shortenLink}>
        {loading ? "Loading..." : "Shorten it!"}
      </button>
    </div>
  );
};

export default Shortener;
