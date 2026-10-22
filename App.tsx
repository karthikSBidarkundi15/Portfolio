import { ArrowDownToLine, ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

function Home() {
  const resumeHref = `${import.meta.env.BASE_URL.replace(/\/?$/, '/') }resume.pdf`;
  const projects: { title: string; description: string; tags: string[]; url: string; status?: string }[] = [
    { title: 'AI Resume Analyzer', description: 'Role-aware resume analysis that turns a job description into an ATS score, missing keywords and sharper bullet rewrites.', tags: ['Generative AI', 'Python', 'Streamlit'], url: 'https://github.com/karthikSBidarkundi15/resume-analyzer-ai' },
    { title: 'Gram Yatra', description: 'Real-time small-city transit tracking, designed with an SMS fallback for journeys where connectivity drops out.', tags: ['GPS / IoT', 'Real-time systems'], url: 'https://github.com/karthikSBidarkundi15/gram-yatra' },
    { title: 'AI-Based Interview Training & Proctoring System', description: 'Resume-based interview simulation with performance and emotion analysis, plus face and eye tracking.', tags: ['Computer Vision', 'OpenCV', 'AI'], url: 'https://github.com/karthikSBidarkundi15/AI-Based-Interview-Training-and-Proctoring-System' },
    { title: 'Smart Emergency Vehicle Priority System', description: 'An ongoing computer-vision project exploring emergency vehicle detection and traffic-signal priority.', tags: ['Computer Vision', 'AI'], status: 'In progress', url: 'https://github.com/karthikSBidarkundi15/Smart-Emergency-Vehicle-Priority-System-Using-AI' },
    { title: 'AI Powered Multi-Interview Simulator', description: 'Role-based conversational interview rounds paired with real-time feedback to make practice more actionable.', tags: ['LLM Integration', 'Conversational AI'], url: 'https://github.com/karthikSBidarkundi15/Ai-multi-interview-simulator' },
    { title: 'Face Mask Detection', description: 'Real-time face mask detection built with OpenCV and a convolutional neural network.', tags: ['OpenCV', 'CNN', 'Computer Vision'], url: 'https://github.com/karthikSBidarkundi15/face-mask-detection' },
  ];
  const skillGroups = [
    { label: 'Build', skills: 'Python · SQL · Git · Streamlit' },
    { label: 'AI / ML', skills: 'Machine Learning · Deep Learning · CNN · Generative AI · LLM Integration' },
    { label: 'Foundations', skills: 'Data Structures & Algorithms · DBMS · Computer Networks' },
    { label: 'Applied tools', skills: 'OpenCV · Groq API · GPS / IoT Integration' },
    { label: 'Focus', skills: 'Computer Vision · Applied AI · Practical LLM tools' },
  ];
  return (
    <div className="portfolio">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Karthik Bidarkundi home"><span className="brand-mark">kb</span><span>Karthik Bidarkundi</span></a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#work">Selected work</a><a href="#about">About</a><a href="#skills">Toolkit</a>
          <a className="nav-contact" href="#contact">Get in touch <ArrowUpRight size={13} aria-hidden="true" /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="reveal">
            <div className="eyebrow">AI / ML engineering undergraduate <span>— Bengaluru, India</span></div>
            <h1>Curiosity,<br />put to <span>work.</span></h1>
            <p className="hero-copy">I’m Karthik — an AI/ML engineering student who likes turning technical curiosity into useful tools. My work sits at the intersection of computer vision, applied AI and LLM-powered experiences.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowRight size={15} aria-hidden="true" /></a>
              <a className="button button-secondary" href={resumeHref} target="_blank" rel="noreferrer">View resume <ArrowUpRight size={15} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="hero-art reveal reveal-delay" aria-label="Abstract orbital diagram">
            <div className="orbit" /><div className="art-core"><span className="art-glyph">AI</span></div>
            <div className="art-label">OBSERVE<br />BUILD<br />ITERATE</div>
          </div>
        </section>

        <div className="ticker" aria-label="Areas of interest"><div className="ticker-inner">
          <span>COMPUTER VISION <b>·</b></span><span>APPLIED AI <b>·</b></span><span>LLM TOOLS <b>·</b></span><span>ENGINEERING CURIOSITY <b>·</b></span>
        </div></div>

        <section className="section" id="work">
          <div className="section-head"><div><div className="section-kicker">01 / Selected work</div><h2 className="section-title">Ideas made tangible.</h2></div><p className="section-note">A collection of tools built around real problems, practical interfaces and learning by doing.</p></div>
          <div className="projects">
            {projects.map((project, index) => <article className="project-card" key={project.title}>
              <div className="project-top"><span className="project-num">PROJECT / 0{index + 1}</span>{project.status && <span className="project-status">{project.status}</span>}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-bottom"><div className="project-tags">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
                <a className="project-link" href={project.url} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}>GITHUB <ArrowUpRight size={14} aria-hidden="true" /></a>
              </div>
            </article>)}
          </div>
        </section>

        <section className="about-band" id="about">
          <div className="about-inner">
            <div><div className="section-kicker">02 / A little context</div><h2 className="section-title">Engineering is how I make sense of things.</h2></div>
            <div className="about-text">
              <p>I’m currently pursuing a <strong>B.E. in Artificial Intelligence and Machine Learning</strong> at JSS Academy of Technical Education, Bengaluru.</p>
              <p>I’m drawn to problems where software meets the everyday: a better way to practice an interview, understand a resume, or get a bus when the signal is weak. I like learning by building, and I’m especially curious about how AI can work reliably outside a demo.</p>
              <div className="education"><div><div className="education-title">JSS Academy of Technical Education</div><div className="education-sub">B.E. Artificial Intelligence and Machine Learning</div></div><div className="education-date">2023 — 2027</div></div>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="skills-layout">
            <div><div className="section-kicker">03 / Toolkit</div><h2 className="section-title">Tools I reach for.</h2></div>
            <div className="skill-group">{skillGroups.map(group => <div className="skill-column" key={group.label}><div className="skill-label">{group.label}</div><div className="skill-items">{group.skills}</div></div>)}</div>
          </div>
        </section>

        <section className="section" id="recognition">
          <div className="section-head"><div><div className="section-kicker">04 / Beyond the build</div><h2 className="section-title">Learning, in community.</h2></div></div>
          <div className="credential-layout">
            <div>
              <div className="credential"><div><div className="credential-title">Data Structures and Algorithms</div><div className="credential-meta">Certification</div></div><div className="credential-year">2025</div></div>
              <div className="credential"><div><div className="credential-title">Computer Networks</div><div className="credential-meta">Certification</div></div><div className="credential-year">2025</div></div>
            </div>
            <aside className="recognition"><div className="recognition-label">AI Club · JSSATE</div><p>Selected in the internal round of the Smart India Hackathon 2025.</p></aside>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-inner">
            <div><div className="section-kicker">05 / Contact</div><h2 className="contact-title">Let’s build something useful.</h2><p className="contact-copy">Open to thoughtful conversations, project ideas and opportunities to learn together.</p></div>
            <div className="contact-actions">
              <a className="button button-primary" href="mailto:karthikbidarkundi@gmail.com"><Mail size={15} aria-hidden="true" /> Email Karthik</a>
              <a className="button button-secondary" href={resumeHref} download="Karthik-Bidarkundi-Resume.pdf"><ArrowDownToLine size={15} aria-hidden="true" /> Download resume</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer"><span>© {new Date().getFullYear()} Karthik Bidarkundi</span><span><MapPin size={12} aria-hidden="true" /> Bengaluru, India</span><a href="tel:+918217545841"><Phone size={12} aria-hidden="true" /> +91 8217545841</a></footer>
    </div>
  );
}


export default function App() {
  return <Home />;
}
