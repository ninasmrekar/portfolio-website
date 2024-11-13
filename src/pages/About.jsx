import Nav from "../components/Nav/Nav.jsx";
import Footer from "../components/Footer/Footer.jsx";
import styles from "./About.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <Nav />
      <main>
        <h2>ABOUT ME</h2>
        <p>
          Hey there, I am Nina, a web developer based in Zurich, Switzerland. I
          have completed a four-year apprenticeship as Application Developer and
          am currently studying at Eastern Switzerland University of Applied
          Sciences. I create and design web applications. I work on frontend and
          backend and am familiar with technologies like React, JavaScript,
          Node.js, HTML, Bootstrap, CSS, Java and C#. On this website you can
          find some of my projects that I worked on in the past. I am a
          hardworking person with many interests who is constantly trying to
          learn something new. In my freetime I like to read, walk with my dog,
          draw and bake. If you are interested in my work feel free to contact
          me.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
