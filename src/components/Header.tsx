import aqiLogo from "/src/assets/images/AQILogo.png";

const Header = () => {
  return (
    <header>
      <div className="header-data max-1500">
        <div className="logo-container">
          <img src={aqiLogo} alt="AQI" className="logo" />
        </div>
        <div className="links">
          <a className="active" href="/">
            Predictor
          </a>
          <a href="/live-aqi/">Live AQI Map</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
