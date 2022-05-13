import { useState } from "react";
import styles from "./App.module.css";
import Header from "./Header";
import Nav from "./Nav";
import Shortener from "./Shortener";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);

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
          <div className={styles.shortenerContainer}>
            <Shortener />
          </div>
          <h2>Advanced Statistics</h2>
        </section>
      </main>
    </div>
  );
};

export default App;
