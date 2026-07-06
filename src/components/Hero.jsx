import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Hi, I'm Emmanuel Kipyegon</h1>

<h2>ICT Professional | Software Developer</h2>

<p>
  Passionate about building web applications, software solutions,
  and innovative technology projects that solve real-world problems.
</p>
        
        <div className="hero-buttons">
          <button>Hire Me</button>
          <button>Download CV</button>
        </div>
      </div>

      <div className="hero-image">
        <img src={profile} alt="Emmanuel Kipyegon" />
      </div>
    </section>
  );
}

export default Hero;