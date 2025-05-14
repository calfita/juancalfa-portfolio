import './styles/main.css';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import projects from './data/projects';

export default function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <h2 className="section-title">Proyectos</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
