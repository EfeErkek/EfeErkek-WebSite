import '../styles/components/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Personal Privacy Auditor',
      description: 'A comprehensive digital footprint analysis tool that scans and evaluates personal data exposure across the web. Designed to identify security threats, visualize harassment levels, and help users reclaim their digital privacy through advanced auditing algorithms.',
      tech: ['Cybersecurity', 'Privacy', 'Data Analysis', 'Web Scanning'],
      link: 'https://github.com/EfeErkek',
      image: '/proj-auth.jpg',
      status: 'Coming Soon'
    },
    {
      title: 'MergenAI',
      description: 'An advanced offline AI assistant capable of processing natural language queries locally. Leveraging specialized LLM integration and ASP.NET backends for 100% data confidentiality and real-time response accuracy.',
      tech: ['Python', 'AI', 'ASP.NET', 'LLM Integration'],
      link: 'https://github.com/EfeErkek/MergenAI',
      image: '/proj-mergen.jpg',
      status: 'View on GitHub'
    },
    {
      title: 'Fahvel',
      description: 'A native Android application developed in Java that bridges traditional coffee fortune-telling with a modern digital experience and personalized user feedback.',
      tech: ['Java', 'Android Studio', 'Mobile Architecture', 'SQL'],
      link: 'https://github.com/EfeErkek/Fahvel-FalApp-v1.0',
      image: '/proj-fahvel.jpg',
      status: 'View on GitHub'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Technical Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-img-wrapper">
              <img src={project.image} alt={project.title} className="project-img" />
              <div className="project-overlay"></div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`project-link ${project.status === 'Coming Soon' ? 'disabled' : ''}`}
              >
                {project.status} →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
