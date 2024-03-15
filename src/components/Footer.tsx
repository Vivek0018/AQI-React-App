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
                    Algorithm Used : Exponential Smoothening
                    <a
                      href="https://www.sktime.net/en/v0.23.1/api_reference/auto_generated/sktime.forecasting.exp_smoothing.ExponentialSmoothing.html#:~:text=The%20alpha%20value%20of%20the,float%20or%20None%2C%20default%3DNone"
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
                    &nbsp;&nbsp;Exponential smoothing was proposed in the late
                    1950s (Brown, 1959; Holt, 1957; Winters, 1960), and has
                    motivated some of the most successful forecasting methods.
                    Forecasts produced using exponential smoothing methods are
                    weighted averages of past observations, with the weights
                    decaying exponentially as the observations get older. In
                    other words, the more recent the observation the higher the
                    associated weight. This framework generates reliable
                    forecasts quickly and for a wide range of time series, which
                    is a great advantage and of major importance to applications
                    in industry.
                  </p>
                </li>
                <li className="d-items">
                  <h3>
                    Algorithm Used : ARIMA
                    <a
                      href="https://en.wikipedia.org/wiki/Autoregressive_integrated_moving_average"
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
                    &nbsp;&nbsp;In statistics and econometrics, and in
                    particular in time series analysis, an autoregressive
                    integrated moving average (ARIMA) model is a generalization
                    of an autoregressive moving average (ARMA) model. To better
                    comprehend the data or to forecast upcoming series points,
                    both of these models are fitted to time series data. ARIMA
                    models are applied in some cases where data show evidence of
                    non-stationarity in the sense of mean (but not
                    variance/autocovariance), where an initial differencing step
                    (corresponding to the "integrated" part of the model) can be
                    applied one or more times to eliminate the non-stationarity
                    of the mean function (i.e., the trend).[1] When the
                    seasonality shows in a time series, the
                    seasonal-differencing[2] could be applied to eliminate the
                    seasonal component. Since the ARMA model, according to the
                    Wold's decomposition theorem,[3][4][5] is theoretically
                    sufficient to describe a regular (a.k.a. purely
                    nondeterministic[5]) wide-sense stationary time series, we
                    are motivated to make stationary a non-stationary time
                    series, e.g., by using differencing, before we can use the
                    ARMA model.[6] Note that if the time series contains a
                    predictable sub-process (a.k.a. pure sine or complex-valued
                    exponential process[4]), the predictable component is
                    treated as a non-zero-mean but periodic (i.e., seasonal)
                    component in the ARIMA framework so that it is eliminated by
                    the seasonal differencing.
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
