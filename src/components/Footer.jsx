function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <h3>Emmanuel Kipyegon</h3>
        <p>ICT Professional | Software Developer</p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <p className="footer-bottom">
          © {new Date().getFullYear()} All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;