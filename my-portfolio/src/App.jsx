export default function App() {
  return (
    <div className="container">
      {/* Intro */}
      <div className="card">
        <h1>Hi, I’m Sophia 👋</h1>
        <p>
          I’m a UW Computer Science student who builds interactive prototypes at the intersection of design and engineering. I’m drawn to ambiguous problems and enjoy using rapid prototyping and iteration to turn ideas into thoughtful, human-centered experiences.
        </p>
      </div>

      {/* Live Demos */}
      <div className="card">
        <h2>Live Demos</h2>
        <div className="projects">

          {/* ConQuest */}
          <div className="project">
            <h3>ConQuest 🏆</h3>
            <p>Gamified study-spot discovery app for students.</p>
            <a href="https://github.com/weisop/hackathon"> Repo</a>

            {/* Video Embed */}
            {/* <div className="video-embed">
              <iframe
                src="https://www.youtube.com/embed/VIDEO_ID_HERE"
                title="ConQuest Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div> */}

            <ul>
              <li><strong>Designed for:</strong> College students looking for motivating study spaces</li>
              <li><strong>Problem:</strong> Studying feels isolating and repetitive</li>
              <li><strong>Approach:</strong> Used gamification and location-based mechanics to encourage exploration</li>
              <li><strong>Tech:</strong> React, JavaScript, APIs</li>
              <li><strong>Next:</strong> Add social competition and real-time updates</li>
            </ul>
          </div>

          {/* NewFuse */}
          <div className="project">
            <h3>NewFuse 📰</h3>
            <p>AI-powered news summarization & activism platform.</p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
              <a href="https://github.com/weisop/Winfo">Repo</a>
              <a href="https://www.canva.com/design/DAG_YDNpQ60/xUlZDhV0LnitXRp6bSyezg/view">
                Pitch
              </a>
            </div>

            {/* Video Embed */}
            {/* <div className="video-embed">
              <iframe
                src="https://www.youtube.com/embed/VIDEO_ID_HERE"
                title="NewFuse Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div> */}

            <ul>
              <li><strong>Designed for:</strong> Younger audiences navigating digital news overload</li>
              <li><strong>Problem:</strong> Traditional news is overwhelming and makes it hard to move from reading to action</li>
              <li><strong>Approach:</strong> Streamlined news consumption using AI summaries for news and action paths</li>
              <li><strong>Tech:</strong> JavaScript, React, Figma, Gemini API</li>
              <li><strong>Next:</strong> Explore personalization and user control over summary depth</li>
            </ul>
          </div>

          {/* Sliming Around */}
          <div className="project">
            <h3>Sliming Around 👽</h3>
            <p>Interactive slime puzzle platformer built with Unity and C#.</p>
            <a href="https://www.youtube.com/watch?v=0lKm38kWfI0">Watch Demo</a>

            {/* Video Embed */}
            {/* <div className="video-embed">
              <iframe
                src="https://www.youtube.com/embed/0lKm38kWfI0"
                title="Sliming Around Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div> */}

            <ul>
              <li><strong>Designed for:</strong> Casual players who enjoy physics-based puzzles</li>
              <li><strong>Problem:</strong> Puzzle games often lack playful experimentation</li>
              <li><strong>Approach:</strong> Designed slime physics to encourage trial-and-error play</li>
              <li><strong>Tech:</strong> Unity, C#</li>
              <li><strong>Next:</strong> Refine difficulty curves and player feedback</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Skills */}
      <div className="card">
        <h2>Skills</h2>
        <p>
          Python · Java · C · JavaScript · HTML · CSS · React · C++ · TypeScript ·
          Git · Machine Learning
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