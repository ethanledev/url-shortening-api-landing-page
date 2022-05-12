import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Header from "./Header";
import NavBar from "./NavBar";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={styles.container}>
      <Header toggleMenu={() => setShowMenu(!showMenu)} />
      {showMenu && (
        <NavBar device="mobile" hideMenu={() => setShowMenu(false)} />
      )}
      <main className={styles.main}>
        <h1 className="srOnly">Shortly landing page</h1>
        <section>
          <h2 className="srOnly">URL shortening</h2>
        </section>
        <section>
          <h2>Advanced Statistics</h2>
        </section>
      </main>
    </div>
  );
};

export default App;
