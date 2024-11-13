import Header from "../components/Header/Header.jsx";
import Nav from "../components/Nav/Nav.jsx";
import styles from "./Home.module.css";

const HomePage = () => {
  return (
    <div className={styles["home-page"]}>
      <Header />
      <Nav />
    </div>
  );
};

export default HomePage;
