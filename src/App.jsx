import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import evalogo from './assets/images/IMG_1866.jpg';
import instagramIcon from './assets/images/Instagram_icon.png';
import './App.css';

// This component checks the path and renders your clickable/static header
//hoping this works alright
function NavHeader() {
  const location = useLocation();
  return (
    <header className="topnav">
      {location.pathname === '/about' ? (
        <div className="brand">
          <Link to="/" className="brand-button" title="Go home">EvaYohane</Link>
        </div>
      ) : (
        <div className="brand">EvaYohane</div>
      )}
    </header>
  );
}

function App() {
  return (
    <Router>
      <NavHeader />

      <Routes>
        {/* HOME ROUTE - All your original content here */}
        <Route path="/" element={
          <>
            <section id="home-hero">
              <div className="MainLogo">
                <Link to="/about" className="image-link">
                  <img src={evalogo} className="evabase home-image" alt="Eva" />
                </Link>
              </div>
              <div className="home-copy">
                <h1>Drag Artist, Goth, Punk and Socialist.</h1>
                <section id="next-steps">
                  <div id="social">
                    <svg className="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#social-icon"></use></svg>
                    <h2>Join the graveyard ghouls</h2>
                    <p>Find my socials below</p>
                    <ul>
                      <li><a href="https://github.com/evayohane" target="_blank" rel="noreferrer"><svg className="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#github-icon"></use></svg>GitHub</a></li>
                      <li><a href="https://discord.gg/GCZWqWf" target="_blank" rel="noreferrer"><svg className="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#discord-icon"></use></svg>Discord</a></li>
                      <li><a href="https://instagram.com/evayohane" target="_blank" rel="noreferrer"><img className="button-icon" src={instagramIcon} alt="Instagram" />Instagram</a></li>
                      <li><a href="https://x.com/evayohane12" target="_blank" rel="noreferrer"><svg className="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#x-icon"></use></svg>X</a></li>
                    </ul>
                  </div>
                </section>
              </div>
            </section>
            <div className="ticks"></div>
            <section id="spacer"></section>
          </>
        } />

        {/* ABOUT ROUTE */}
        <Route path="/about" element={
          <>
            <section id="about-page">
              <div className="about-panel">
                <h2>About me</h2>
                <p>Hi, I'm eva! An upcoming drag artist, goth and all around extroverted ADHD-er.</p>
                <p>I've been doing dev work since 13 and recently became an upcoming drag artist.</p>
                <p>You can check out more of my stuff by checking out my Instagram profile, which is below!</p>
                <p>Any queries, press the email button and you can contact me directly!</p>
                <div className="doc-links">
                  <a href="mailto:eva@evayohane.com" target="_blank" rel="noreferrer">Email me</a>
                </div>
              </div>
            </section>
            <div className="ticks"></div>
            <section id="spacer"></section>
          </>
        } />

        {/* LINKS ROUTE */}
        <Route path="/links" element={
          <section id="next-steps">
            <div id="social">
              <svg className="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#social-icon"></use></svg>
              <h2>Connect with me</h2>
              <p>Find my links and socials below</p>
              <ul>{/* ... copy your full links list here ... */}</ul>
            </div>
            <div className="ticks"></div>
            <section id="spacer"></section>
          </section>
        } />
      </Routes>

      <footer id="site-footer">
        <p>© {new Date().getFullYear()} EvaYohane. Made with love by Eva xx</p>
      </footer>
    </Router>
  );
}

export default App;