export default function ProjectCard({ title, description, url }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Ir al demo →
      </a>
    </div>
  );
}
