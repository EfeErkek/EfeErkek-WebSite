import '../styles/components/Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm <span className="highlight">Efe</span></h1>
        <p className="hero-subtitle">Software Developer & MIS Student</p>
        <div className="hero-cta">
          <a href="#projects" className="btn">View My Work</a>
          <a href="#contact" className="btn btn-outline">Get In Touch</a>
        </div>
      </div>
      <div className="hero-image">
        <div className="image-container">
          <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Efe Erkek" className="profile-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
