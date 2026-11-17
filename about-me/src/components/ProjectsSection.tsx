import { projects } from "../data/projects";

export default function ProjectsSection() {
  return (
    <section>
      <h2>Current Project</h2>
      {projects.map((p) => (
        <article key={p.id} className="project">
          <div className="project-head">
            <h3>{p.name}</h3>
            <span className="status">{p.status}</span>
          </div>
          <p className="org">
            {p.org} · {p.role}
          </p>
          <p>{p.summary}</p>
          <ul className="tags">
            {p.tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          {p.link && (
            <a href={p.link} target="_blank" rel="noreferrer">
              View project →
            </a>
          )}
        </article>
      ))}
    </section>
  );
}