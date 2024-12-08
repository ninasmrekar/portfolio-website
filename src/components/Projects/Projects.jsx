import styles from "./Projects.module.css";
import Project from "../Project/Project.jsx";
import projects from "../../projects.js";

function Projects() {
  function addProjects(project) {
    return (
      <Project
        key={project.id}
        id={project.id}
        src={"./projects/" + project.image}
        alt={project.title}
      />
    );
  }

  return (
    <main className={styles.container}>
      <h2>WORK</h2>
      <p>Click on the projects to see more information!</p>
      <div className="row">{projects.map(addProjects)}</div>
    </main>
  );
}

export default Projects;
