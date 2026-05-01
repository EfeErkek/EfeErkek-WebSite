import '../styles/components/Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'YAŞAR BİLGİ',
      role: 'Intern Developer',
      period: 'Jul 2024 - Aug 2024',
      description: 'Gained hands-on experience in corporate software development life cycles (SDLC). Observed and supported software testing, maintenance, and enhancement processes in a professional environment, improving knowledge of industry-standard coding practices.'
    },
    {
      company: 'Agenzia Turizm',
      role: 'Computer Operator',
      period: 'Apr 2023 - Oct 2023',
      description: 'Managed technical operations and data management systems. Responsible for ensuring system stability, troubleshooting operational issues, and optimizing workflow efficiency through effective computer resource management.'
    }
  ];

  const education = [
    {
      school: 'Yaşar University',
      degree: 'Management Information Systems (MIS)',
      period: '2025 - Present',
      description: 'Bridging the gap between software engineering and business management strategies.'
    },
    {
      school: 'Yaşar University',
      degree: 'Computer Programming',
      period: '2023 - 2025',
      description: 'Focused on core programming languages, algorithms, and application development fundamentals.'
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="experience-column">
          <h2 className="section-title">Work Experience</h2>
          <div className="experience-list">
            {experiences.map((exp, index) => (
              <div key={index} className="exp-card">
                <div className="exp-header">
                  <h3>{exp.role}</h3>
                  <span className="exp-company">{exp.company}</span>
                  <span className="exp-period">{exp.period}</span>
                </div>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="education-column">
          <h2 className="section-title">Education</h2>
          <div className="education-list">
            {education.map((edu, index) => (
              <div key={index} className="edu-card">
                <div className="edu-header">
                  <h3>{edu.degree}</h3>
                  <span className="edu-school">{edu.school}</span>
                  <span className="edu-period">{edu.period}</span>
                </div>
                <p>{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
