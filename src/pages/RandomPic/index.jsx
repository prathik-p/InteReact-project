import "./index.css";

function RandomPic() {
  return (
    <>
      <div className="main-content">
        <div className="random-navbar">
          <div className="random-home-link">
            <a href="/">Home</a>
          </div>
        </div>
        <div className="random-pic-grid">
          <div className="grid-item">
            <img src="https://random.imagecdn.app/500/350" />
          </div>
          <div className="grid-item">
            <img src="https://random.imagecdn.app/499/350" />
          </div>
          <div className="grid-item">
            <img src="https://random.imagecdn.app/500/349" />
          </div>
          <div className="grid-item">
            <img src="https://random.imagecdn.app/501/351" />
          </div>
          <div className="grid-item">
            <img src="https://random.imagecdn.app/502/350" />
          </div>
          <div className="grid-item">
            <img src="https://random.imagecdn.app/500/352" />
          </div>
        </div>
      </div>
    </>
  );
}

export default RandomPic;
