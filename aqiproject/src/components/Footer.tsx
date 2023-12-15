import AQILogo from "/src/assets/images/AQILogo.png";

const Footer = () => {
  return (
    <>
      <section className="d-s">
        <div className="max-1500">
          <div className="b d">
            <div className="b-header">
              <h2>Model Information</h2>
            </div>
            <div className="d-a">
              <ul>
                <li className="d-items">
                  <h3>
                    Algorithm Used : Prophet - A Time Series Algorithm by
                    Facebook
                    <a
                      href="http://facebook.github.io/prophet/"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="small-svg"
                        viewBox="0 0 640 512"
                      >
                        <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
                      </svg>
                    </a>
                  </h3>
                  <p className="small">
                    &nbsp;&nbsp;FB Prophet is an open-source time series
                    forecasting tool developed by Facebook. It is designed to be
                    easy to use and fast, making it suitable for a wide range of
                    applications. FB Prophet is based on a decomposable additive
                    model, which means that it breaks down the time series data
                    into three components: trend, seasonality, and holidays. The
                    trend component represents the overall direction of the
                    data, while the seasonality component captures the periodic
                    fluctuations in the data. The holidays component accounts
                    for the impact of known events, such as holidays or
                    promotional campaigns. FB Prophet is particularly
                    well-suited for forecasting time series data that exhibits
                    strong seasonality or holiday effects.
                  </p>
                </li>
                <li className="d-items">
                  <h3>
                    Data Source : WAQI API
                    <a href="https://aqicn.org/api/" target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="small-svg"
                        viewBox="0 0 640 512"
                      >
                        <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
                      </svg>
                    </a>
                  </h3>
                  <p className="small">
                    &nbsp;&nbsp; The WAQI API is a tool that provides air
                    quality data for over 100,000 stations worldwide. To use the
                    API, you'll need to create an account and obtain an API
                    token. Once you have your token, you can use it to make HTTP
                    requests to the WAQI API to retrieve real-time, historical,
                    or forecast AQI data. The response will be in JSON format,
                    which you can parse to extract the desired data.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="c max-1500">
          <div className="c-a">
            <div className="c-a-a">
              <div className="c-a-a-a logo-container">
                <img src={AQILogo} alt="AQI" className="logo" />
              </div>
              <div className="c-a-z">
                <span className="small">© AQI All rights reserved</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
