import AboutSection from "../../components/AboutSection";
import { Link } from "react-router-dom";
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
            <source src="/inter-vid.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="nav-bar">
          <div className="nav-logo">
            <div className="logo-img"></div>
          </div>
          <div className="nav-links">
            <div className="links">
              <div className="randompic-link">
                <Link to="random">Random</Link>
              </div>
              <div className="about-link">
                <a href="#about-section">About</a>
              </div>
              <div className="login-link">
                <Link to="login">Login</Link>
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
        <div className="footer-section">
          <div className="contacts">
            <div className="contact-title">Contacts</div>
            <div>Phno : 23929920200</div>
            <a>Instagram</a>
            <a>X</a>
            <a>Facebook</a>
          </div>
          <div className="footer-logo"></div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
