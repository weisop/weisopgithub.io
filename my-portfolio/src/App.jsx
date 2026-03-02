export default function App() {
  return (
    <div className="container">
      {/* Intro */}
      <div className="card">
        <h1>Hi, I’m Emily 👋</h1>
        <p>
          UW CSE student interested in software engineering, AI, and creative
          technology. I love building cute but powerful things ✨
        </p>
      </div>

      {/* Projects */}
      <div className="card">
        <h2>Projects</h2>
        <div className="projects">
          <div className="project">
            <h3>ConQuest 🏆</h3>
            <p>Gamified study-spot discovery app for students.</p>
            <a href="#">GitHub</a>
          </div>

          <div className="project">
            <h3>NewFuse 📰</h3>
            <p>AI-powered news summarization & activism platform.</p>
            <a href="#">GitHub</a>
          </div>

          <div className="project">
            <h3>Campus VR 🏫</h3>
            <p>3D campus modeling using point clouds & depth estimation.</p>
            <a href="#">Demo</a>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="card">
        <h2>Skills</h2>
        <p>
          Python · Java · C · JavaScript · React · SQL · Git · Machine Learning
        </p>
      </div>

      {/* Contact */}
      <div className="card">
        <h2>Contact</h2>
        <p>
          Email: yourname@uw.edu <br />
          GitHub: <a href="https://github.com/your-username">your-username</a>
        </p>
      </div>

      <div className="footer">✨ Built with React & love ✨</div>
    </div>
  );
}