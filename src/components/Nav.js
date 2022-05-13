import styles from "./Nav.module.css";

const Nav = ({ device }) => {
  return (
    <div className={styles[device]}>
      <nav className={styles.nav}>
        <div className={styles.links}>
          <a href="/">Features</a>
          <a href="/">Pricing</a>
          <a href="/">Resources</a>
        </div>
        <div className={styles.authLinks}>
          <a href="/">Login</a>
          <a href="/">Sign Up</a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
