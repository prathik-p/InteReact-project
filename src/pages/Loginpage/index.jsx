import { useState } from "react";
import "./index.css";

function Loginpage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleChangeUsername(e) {
    setUsername(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function validateLogin(e) {
    if (username == "prathik" && password == "broski") {
      console.log("success");
    } else {
      console.log("fail");
    }
  }

  return (
    <>
      <div className="main-content">
        <div className="nav-bar"></div>
        <div className="login-main-container">
          <div className="login-about">
            <p>
              Please Login <br />
              with your details!
            </p>
          </div>
          <div className="login-container">
            <div className="login-form">
              <form>
                <input
                  value={username}
                  onChange={handleChangeUsername}
                  placeholder="Username"
                  type="text"
                />
                <input
                  value={password}
                  onChange={handleChangePassword}
                  placeholder="Password"
                  type="text"
                />
                <button onClick={validateLogin}>Submit!</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loginpage;
