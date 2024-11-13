import styles from "./Header.module.css";
import Button from "../Button/Button.jsx";

function Header() {
  return (
    <header className={styles.header}>
      <h1>NINA SMREKAR</h1>
      <h2>WEB DEVELOPER</h2>
      <a href="mailto: smrekar.nina5@gmail.com">
        <Button className={styles["custom-btn"]}>CONTACT ME</Button>
      </a>
    </header>
  );
}

export default Header;
