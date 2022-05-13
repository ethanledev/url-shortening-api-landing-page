import styles from "./Header.module.css";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as MenuIcon } from "../images/icon-hamburger.svg";
import Nav from "./Nav";

const Header = ({ toggleMenu }) => {
  return (
    <header className={styles.header}>
      <Logo />
      <MenuIcon className={styles.menuIcon} onClick={toggleMenu} />
      <Nav device="desktop" />
    </header>
  );
};

export default Header;
