import '../styles/components/About.css';

const About = () => {
  const skills = [
    'Flutter', 'Python', 'C#', 'Java', 'SQL', 
    'Selenium', 'Playwright', 'Leadership',
    'Agile Management', 'Public Speaking', 'Crisis Management',
    'VS Code', 'Visual Studio', 'Android Studio', 'IntelliJ IDEA'
  ];

  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      <div className="about-container">
        <div className="about-text">
          <p>
            I blend my technical background with the leadership experience I’ve gained as the 
            <strong> Chairman of the IEEE Yaşar University Student Branch</strong>.
          </p>
          <p>
            My work focuses on building <strong>AI-based assistants</strong>, web applications, and automations 
            that simplify daily tasks. I enjoy bridging the gap between the technical "kitchen" 
            of software and management strategies.
          </p>
          <p>
            With a <strong>C1 Level English</strong> proficiency, I am comfortable in global communication 
            and technical documentation. I specialize in <strong>Mobile Development (Flutter)</strong>, 
            <strong>Web Automation (Selenium, Playwright)</strong>, and <strong>Database Management</strong>.
          </p>
          
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <span key={index} className="skill-badge">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
