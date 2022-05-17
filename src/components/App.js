import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import Shortener from "./Shortener";
import StatisticsInfo from "./StatisticsInfo";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [recentLinks, setRecentLinks] = useState([]);
  const [copyIndex, setCopyIndex] = useState(1);

  const addRecentLink = (newLink) => {
    if (recentLinks.length < 3) {
      recentLinks.unshift(newLink);
    } else {
      recentLinks.pop();
      recentLinks.unshift(newLink);
    }
    setRecentLinks([...recentLinks]);
    localStorage.setItem("recentLinks", JSON.stringify(recentLinks));
  };

  const handleCopy = (index) => {
    navigator.clipboard.writeText(recentLinks[index].short);
    setCopyIndex(index);
    setTimeout(() => setCopyIndex(-1), 500);
  };

  const renderRecentLinks = () => {
    return recentLinks.map((link, index) => (
      <div key={link.short + index} className={styles.recentLink}>
        <a
          href={link.original}
          target="_blank"
          rel="noreferrer"
          className={styles.fullLink}
        >
          {link.original}
        </a>
        <div className={styles.shortenedLink}>
          <a href={link.fullShort} target="_blank" rel="noreferrer">
            {link.short}
          </a>
          <button
            disabled={copyIndex === index}
            onClick={() => handleCopy(index)}
          >
            {copyIndex === index ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    ));
  };

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("recentLinks"));
    if (localStorageData) {
      setRecentLinks(localStorageData);
    }
  }, []);

  return (
    <div className={styles.container}>
      <Header toggleMenu={() => setShowMenu(!showMenu)} />
      {showMenu && <Nav device="mobile" hideMenu={() => setShowMenu(false)} />}
      <main className={styles.main}>
        <h1 className="srOnly">Shortly landing page</h1>
        <section className={styles.headerSection}>
          <h2 className="srOnly">URL shortening</h2>
          <article>
            <h3>More than just shorter links</h3>
            <p>
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
            <a href="/">Get Started</a>
          </article>
        </section>
        <section className={styles.mainSection}>
          <h2 className="srOnly">Main Section</h2>
          <article>
            <Shortener addRecentLink={addRecentLink} />
            {renderRecentLinks()}
            <h3>Advanced Statistics</h3>
            <p>
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
            <StatisticsInfo />
          </article>
        </section>
        <div className={styles.boostLink}>
          <h2>Boost your links today</h2>
          <a href="/">Get started</a>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default App;
