function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>

        <p className="contact-intro">
          Feel free to reach out for opportunities, collaborations, or technical discussions.
        </p>

        <div className="contact-content">

          {/* Contact Info */}
          <div className="contact-info">
            <h3>Get in Touch</h3>

            <p><strong>Email:</strong> emmanuel@example.com</p>
            <p><strong>Location:</strong> Nairobi, Kenya</p>

            <div className="social-links">
              <a href="#" target="_blank">GitHub</a>
              <a href="#" target="_blank">LinkedIn</a>
              <a href="#" target="_blank">WhatsApp</a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="6" required></textarea>

            <button type="submit">Send Message</button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;