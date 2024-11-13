import styles from "./Project.module.css";

function Project(props) {
  return (
    <a
      href={"/work/" + props.id}
      className="col-sm-6 col-md-6 col-lg-4 col-xl-3"
    >
      <div className={styles.project}>
        <img src={props.src} alt={props.alt} />
      </div>
    </a>
  );
}

export default Project;
