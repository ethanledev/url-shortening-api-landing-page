import styles from "./NavBar.module.css";

const NavBar = ({ device, hideMenu }) => {
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

export default NavBar;
