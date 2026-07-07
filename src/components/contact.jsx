function Contact() {
  return (
    <section className="contact" id="contact">

      <p className="section-tag">CONTACT</p>

      <h2>Let's Connect</h2>

      <p className="contact-intro">
        I'm always open to discussing software development, ICT opportunities,
        internships, graduate roles, or collaborative projects. Feel free to
        reach out through any of the channels below.
      </p>

      <div className="contact-grid">

        <div className="contact-card">
          <h3>Email</h3>
          <p>sang601ke@gmail.com</p>
        </div>

        <div className="contact-card">
          <h3>Phone</h3>
          <p>+254 715 464 684</p>
        </div>

        <div className="contact-card">
          <h3>Location</h3>
          <p>Nairobi, Kenya</p>
        </div>

        <div className="contact-card">
          <h3>GitHub</h3>

          <a
            href="https://github.com/manu601"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/manu601
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;