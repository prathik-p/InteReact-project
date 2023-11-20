import AboutSection from "../../components/Aboutsection";
import "./index.css";

function Homepage() {
  window.onload = function () {
    document.getElementById("intereactVideo").play();
  };

  return (
    <>
      <div className="main-content">
        <div className="bgvideo-container">
          <video autoPlay muted loop playsInline id="intereactVideo">
            <source src="src/assets/inter-vid.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="nav-bar">
          <div className="nav-logo">
            <div className="logo-img"></div>
          </div>
          <div className="nav-links">
            <div className="links">
              <div className="default-link">
                <a>Default</a>
              </div>
              <div className="about-link">
                <a href="#about-section">About</a>
              </div>
              <div className="login-link">
                <a href="login">Login</a>
              </div>
            </div>
          </div>
        </div>
        <div className="main-container">
          <div className="intereact-sign-container">
            <span>InteReact</span>
          </div>
        </div>
        <div id="about-section">
          <AboutSection />
        </div>
        <div className="footer-section"></div>
      </div>
    </>
  );
}

export default Homepage;
