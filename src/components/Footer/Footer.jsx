import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import emailIcon from "../../assets/icons/email.svg";
import githubIcon from "../../assets/icons/github.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>Copyright © {currentYear} Nina Smrekar. All Rights Reserved.</p>
      <div className={styles.icons}>
        <Link to="mailto: smrekar.nina5@gmail.com">
          <img src={emailIcon} alt="email icon" />
        </Link>
        <Link to="https://github.com/ninasmrekar">
          <img src={githubIcon} alt="github icon" />
        </Link>
        <Link to="https://www.linkedin.com/in/nina-smrekar">
          <img src={linkedinIcon} alt="linkedin icon" />
        </Link>
        <Link to="https://www.instagram.com/nina.sm_5/">
          <img src={instagramIcon} alt="instagram icon" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
