import AQIRanges from "/src/assets/images/aqi_mini.webp";

const PageSections = () => {
  return (
    <>
      <section className="aqi-def" id="aqi-def">
        <div className="max-1500  bg-aqi">
          <div className="b">
            <div className="b-header">
              <h2>What is AQI ?</h2>
            </div>
            <div className="b-data">
              <div className="b-b">
                <p className="small">
                  &nbsp;&nbsp;The Air Quality Index (AQI) is a numerical scale
                  that communicates the level of air pollution in a specific
                  area. It consolidates data on pollutants like ozone,
                  particulate matter, sulfur dioxide, nitrogen dioxide, and
                  carbon monoxide into a single score, offering a standardized
                  measure of air quality. Ranging from 0 to 500, higher AQI
                  values indicate poorer air quality and potential health risks.
                  The scale is divided into categories, each corresponding to
                  different health implications, helping the public and
                  policymakers understand and address air pollution's impact on
                  health and the environment. Regular monitoring of AQI aids in
                  promoting air quality awareness and public well-being.
                </p>
                <ul>
                  <li className="b-b-items">
                    <h4 className="b-b-h">Ground-level Ozone (O3): </h4>
                    <p className="b-b-des small">
                      Ozone is a major component of smog and is formed by the
                      reaction of pollutants emitted by vehicles, industrial
                      facilities, and other sources. It can have respiratory and
                      other health effects.
                    </p>
                  </li>
                  <li className="b-b-items">
                    <h4 className="b-b-h">
                      Particulate Matter (PM10 and PM2.5)
                    </h4>
                    <p className="b-b-des small">
                      PM10 represents inhalable particles with diameters
                      generally 10 micrometers and smaller, while PM2.5
                      represents fine inhalable particles with diameters that
                      are generally 2.5 micrometers and smaller. These particles
                      can penetrate the respiratory system and have adverse
                      health effects.
                    </p>
                  </li>
                  <li className="b-b-items">
                    <h4 className="b-b-h">Sulfur Dioxide (SO2):</h4>
                    <p className="b-b-des small">
                      SO2 is produced by burning fossil fuels containing sulfur,
                      primarily in power plants and industrial facilities. It
                      can cause respiratory problems and contribute to acid
                      rain.
                    </p>
                  </li>
                  <li className="b-b-items">
                    <h4 className="b-b-h">Nitrogen Dioxide (NO2):</h4>
                    <p className="b-b-des small">
                      NO2 is produced by combustion processes, including those
                      in vehicles and power plants. It can irritate the lungs
                      and contribute to respiratory problems.
                    </p>
                  </li>
                  <li className="b-b-items">
                    <h4 className="b-b-h">Carbon Monoxide (CO): </h4>
                    <p className="b-b-des small">
                      CO is a colorless, odorless gas produced by incomplete
                      combustion of carbon-containing fuels. It can interfere
                      with the body's ability to transport oxygen and can have
                      adverse health effects.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="more-des">
                <h3>How to Calculate AQI</h3>
                <p className="small">
                  &nbsp;&nbsp;The Air Quality Index (AQI) is calculated based on
                  the concentrations of specific air pollutants, including
                  ground-level ozone (O3), particulate matter (PM10 and PM2.5),
                  sulfur dioxide (SO2), nitrogen dioxide (NO2), and carbon
                  monoxide (CO). The AQI provides a standardized measure to
                  assess the potential health risks associated with these
                  pollutants.
                </p>
                <div>
                  <p className="txt-center small b-c-f">
                    AQI : max(all pollutants)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="aqi-val" id="aqi-val">
        <div className="max-1500">
          <div className="b">
            <div className="b-header">
              <h2>AQI Ranges</h2>
            </div>
            <div className="b-data">
              <div className="b-b">
                <p className="small">
                  &nbsp;&nbsp;The Air Quality Index (AQI) is a numerical scale
                  used to communicate how polluted the air currently is or how
                  polluted it is forecast to become. It provides a way to
                  understand and compare the air quality in different locations.
                  The AQI is typically divided into different categories, each
                  corresponding to a different level of health concern.
                  Different countries may have their own variations of AQI, but
                  many of them share similar principles. Here's a general guide
                  to AQI values and their associated air quality levels:
                </p>
                <ul>
                  <li className="b-b-items">
                    <h4 className="b-b-h">0-50: Good</h4>
                    <p className="b-b-des small">
                      Air quality is considered satisfactory, and air pollution
                      poses little or no risk.
                    </p>
                  </li>
                  <li className="b-b-items">
                    <h4 className="b-b-h">51-100: Moderate</h4>
                    <p className="b-b-des small">
                      Air quality is acceptable; however, there may be some
                      pollutants that are a concern for a very small number of
                      people who are unusually sensitive to air pollution.
                    </p>
                  </li>
                  <li className="b-b-items">
                    <h4 className="b-b-h">
                      101-150: Unhealthy for Sensitive Groups
                    </h4>
                    <p className="b-b-des small">
                      Members of sensitive groups (e.g., individuals with
                      respiratory or heart conditions, children, and older
                      adults) may experience health effects. The general public
                      is less likely to be affected.
                    </p>
                  </li>
                  <li className="b-b-items">
                    <h4 className="b-b-h">151-200: Unhealthy</h4>
                    <p className="b-b-des small">
                      Everyone may begin to experience adverse health effects,
                      and members of sensitive groups may experience more
                      serious effects.
                    </p>
                  </li>
                  <li className="b-b-items">
                    <h4 className="b-b-h">201-300: Very Unhealthy</h4>
                    <p className="b-b-des small">
                      Health alert: everyone may experience more serious health
                      effects.
                    </p>
                  </li>
                  <li className="b-b-items">
                    <h4 className="b-b-h">301-500: Hazardous</h4>
                    <p className="b-b-des small">
                      Health warnings of emergency conditions. The entire
                      population is likely to be affected.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="img-des">
                <div className="data-img">
                  <img src={AQIRanges} alt="AQI Ranges" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageSections;
