import { useParams } from "react-router-dom";
import Nav from "../components/Nav/Nav.jsx";
import Footer from "../components/Footer/Footer.jsx";
import projects from "../projects.js";
import "./ProjectPage.css";
import Button from "../components/Button/Button.jsx";

const ProjectPage = () => {
  let { id } = useParams();
  let project = projects.find((item) => item.id.toString() === id);

  return (
    <div>
      <Nav />
      <main className="project-page">
        <img
          className="project-img"
          src={"/public/projects/" + project.image}
          alt={project.title}
        />
        <section>
          <h2>{project.title.toUpperCase()}</h2>
          <p>{project.description}</p>
          <a href={project.link}>
            <Button className="view-btn">VIEW PROJECT</Button>
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectPage;
