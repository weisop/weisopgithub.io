export default function App() {
  return (
    <div className="container">
      {/* Intro */}
      <div className="card">
        <h1>Hi, I’m Sophia 👋</h1>
        <p>
          UW CS student interested in software engineering, AI, and creative
          technology. I love building and being creative with code!
        </p>
      </div>

      {/* Projects */}
      <div className="card">
        <h2>Projects</h2>
        <div className="projects">
          <div className="project">
            <h3>ConQuest 🏆</h3>
            <p>Gamified study-spot discovery app for students.</p>
            <a href="https://github.com/weisop/hackathon">GitHub</a>
          </div>

          <div className="project">
            <h3>NewFuse 📰</h3>
            <p>AI-powered news summarization & activism platform.</p>
            <a href="https://github.com/weisop/Winfo">GitHub</a>
          </div>

          <div className="project">
            <h3>Sliming Around 👽</h3>
            <p>Interactive slime puzzle platformer game built with Unity and C#.</p>
            <a href="https://www.youtube.com/watch?v=0lKm38kWfI0">Prototype Demo</a>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="card">
        <h2>Skills</h2>
        <p>
          Python · Java · C · JavaScript · HTML · CSS · React · C++ · TypeScript · C ·Git · Machine Learning
        </p>
      </div>

      {/* Contact */}
      <div className="card">
        <h2>Contact</h2>
        <p>
          Email: sophiawei8888@gmail.com <br />
          GitHub: <a href="https://github.com/weisop">weisop</a>
        </p>
      </div>

      <div className="footer"></div>
    </div>
  );
}