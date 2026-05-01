import '../styles/components/Contact.css';

const Contact = () => {
  return (
    <footer id="contact" className="contact-section">
      <div className="contact-content">
        <h2 className="section-title">Get In Touch</h2>
        <p>Feel free to reach out to me for collaborations or just to say hello.</p>
        <div className="social-links">
          <a href="mailto:efeerkek1@gmail.com" className="social-btn">Email</a>
          <a href="https://www.linkedin.com/in/efe-erkek/" target="_blank" rel="noopener noreferrer" className="social-btn">LinkedIn</a>
          <a href="https://github.com/EfeErkek" target="_blank" rel="noopener noreferrer" className="social-btn">GitHub</a>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Efe Erkek</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
