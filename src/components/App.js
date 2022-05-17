import { useState } from "react";
import styles from "./App.module.css";
import Header from "./Header";
import Nav from "./Nav";
import Shortener from "./Shortener";
import StatisticsInfo from "./StatisticsInfo";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  const renderRecentLinks = () => {
    const links = [];
    for (let i = 0; i < 3; i++) {
      links.push(
        <div key={i} className={styles.recentLink}>
          <a
            href="https://github.com/hieuhmle/"
            target="_blank"
            rel="noreferrer"
            className={styles.fullLink}
          >
            https://github.com/hieuhmle/
          </a>
          <div className={styles.shortenedLink}>
            <a href="https://shrtco.de/B27Cjl" target="_blank" rel="noreferrer">
              shrtco.de/B27Cjl
            </a>
            <button>Copy</button>
          </div>
        </div>
      );
    }
    return links;
  };

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
            <Shortener />
            {renderRecentLinks()}
            <h3>Advanced Statistics</h3>
            <p>
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
            <StatisticsInfo />
          </article>
        </section>
      </main>
    </div>
  );
};

export default App;
