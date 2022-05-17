import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as Facebook } from "../images/icon-facebook.svg";
import { ReactComponent as Twitter } from "../images/icon-twitter.svg";
import { ReactComponent as Pinterest } from "../images/icon-pinterest.svg";
import { ReactComponent as Instagram } from "../images/icon-instagram.svg";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo />
      <div className={styles.links}>
        <div className={styles.footerMenu}>
          <div>Features</div>
          <a href="/">Link Shortening</a>
          <a href="/">Branded Links</a>
          <a href="/">Analytics</a>
        </div>
        <div className={styles.footerMenu}>
          <div>Resources</div>
          <a href="/">Blog</a>
          <a href="/">Developers</a>
          <a href="/">Support</a>
        </div>
        <div className={styles.footerMenu}>
          <div>Company</div>
          <a href="/">About</a>
          <a href="/">Our Team</a>
          <a href="/">Careers</a>
          <a href="/">Contact</a>
        </div>
      </div>
      <div className={styles.socialLinks}>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
        >
          <Facebook />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter"
        >
          <Twitter />
        </a>
        <a
          href="https://pinterest.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Pinterest"
        >
          <Pinterest />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <Instagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
