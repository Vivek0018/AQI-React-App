import { ChangeEvent, FormEvent, useState, MouseEvent } from "react";

import PageSections from "./PageSections";
import LoadingAnimations from "./LoadingAnimations";
import PresentDayData from "./PresentDayData";
import PredictedValues from "./PredictedValues";
import delhiImage from "/src/assets/images/DelhiImg.jpg";
import newYorkImg from "/src/assets/images/NewYorkImg.jpeg";
import tokyoImg from "/src/assets/images/TokyoImg.jpeg";

interface FormState {
  inputValue: string;
}
const MainBody = () => {
  const [formState, setformState] = useState<FormState>({ inputValue: "" });
  // const [submitted, setSubmitted] = useState(false);
  // const [data, setData] = useState(null);
  // const handleCityClick = (event: SyntheticEvent) => {
  //   const element = event.target as HTMLDivElement;
  //   const cityName = element.getAttribute("city-name");
  //   setSubmitted(true);
  // };
  const [isLoadingAnimation, setIsLoadingAnimation] = useState(false);

  const [parentContent, setParentContent] = useState(<></>);

  const updateContent = (childContent: any) => {
    setIsLoadingAnimation(false);
    setParentContent((prevContent) => (
      <>
        <div className="results-div max-1500">{childContent}</div>
        {prevContent}
      </>
    ));
  };
  const handleCityClick = (event: MouseEvent) => {
    const element: HTMLDivElement = event.target as HTMLDivElement;
    const key: any = element.getAttribute("city-name");
    setIsLoadingAnimation(true);
    // alert(formState.inputValue);
    // fetchData(formState.inputValue);

    fetchData(key);
  };
  const fetchData = async (key: string) => {
    const response = await fetch(
      `https://fast-api-new.onrender.com/city/${key}`
    );
    // setData(response);

    const responseData = await response.json();

    if (responseData.code == 404)
      updateContent(
        <div className="results-div max-1500">
          <div className="not-found">
            <div className="header-data-n-f">
              <h4 className="margin-10">No Data Found for "{key}"</h4>
            </div>
            <div className="sub-div-n-f">
              <span className="small">
                Retry using Another Proper city name.
              </span>
            </div>
          </div>
        </div>
      );
    else {
      //whole response data
      const data = responseData.response;
      //predicted values data
      const predictedData = data.predicted_data;
      //present day data
      const presentDayData = data.presentDayData;
      const cityName = data.city_name;
      const cityStation = data.city_station;
      const cityNameFromStation = String(cityStation).split(",");
      const countryCode = data.country_code;

      const returnData = (
        <>
          <div className="r-header margin-10">
            <h2>Showing Results for {cityName}</h2>
          </div>
          <div className="r-content small margin-10">
            <div className="r-res-data">
              <div className="r-res-item">
                City&nbsp;:&nbsp;<strong>{cityNameFromStation}</strong>
              </div>
              <div className="r-res-item">
                Station&nbsp;:&nbsp;<strong>{cityStation}</strong>
              </div>
              <div className="r-res-item">
                Country Code&nbsp;:&nbsp;<strong>{countryCode}</strong>
              </div>
            </div>
            <div className="r-r-res-d">
              <PresentDayData aqiPresentData={presentDayData} />
              <PredictedValues aqiPredictedData={predictedData} />
            </div>
          </div>
        </>
      );

      updateContent(returnData);
    }
    // console.log(data);
  };
  //handing form submit
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setformState({ inputValue: "" });
    setIsLoadingAnimation(true);
    // alert(formState.inputValue);
    // fetchData(formState.inputValue);

    fetchData(formState.inputValue);
  };
  //handling input change
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setformState({ inputValue: event.target.value });
  };
  return (
    <>
      <main>
        <div className="wrapper">
          <div className="main-container max-1500">
            <div className="heading-container">
              <div className="text-container">
                <h1>Air Quality Index Predictor</h1>
                <p className="caption">
                  Based on Time Series Forecasting Machine Learning Model
                </p>
              </div>
            </div>
            <div className="container">
              <div className="a">
                <div className="aa">
                  <div className="a-a">
                    <div className="a-a-a">
                      <h3 className="medium">predict air quality of a city</h3>
                    </div>
                    <form
                      id="myForm"
                      className="a-a-a-form a-a-b"
                      onSubmit={handleSubmit}
                    >
                      <input
                        type="text"
                        placeholder="search by city name..."
                        className="input"
                        value={formState.inputValue}
                        onChange={handleInputChange}
                      />
                      <button className="submit-form" type="submit">
                        <svg
                          className="small search-icon small-svg"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                        </svg>
                      </button>
                    </form>
                  </div>
                  <div className="a-b">
                    <div className="description small">
                      <p title="description aqi prediction">
                        Enter any City name to view the Predictions of Air
                        Quality Index of 30 days from now. If the entered city
                        has any past data then Future values are predicted using
                        Machine Learning Models.
                      </p>
                      <div className="more-a">
                        <a
                          href="#aqi-def"
                          title="What is AQI"
                          className="a-b-a"
                        >
                          What is AQI ?
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <section id="e-ex">
        <div className="e max-1500">
          <div className="e-a">
            <div className="e-a-a">
              <div className="e-header margin-10">
                <h2>Some Popular Cities</h2>
              </div>
              <div className="cities-e">
                <div className="e-a-a-a">
                  <div className="e-a-a-a-a e-1" onClick={handleCityClick}>
                    <div className="e-city-data">
                      <div className="e-img-container">
                        <img src={delhiImage} alt="Delhi" />
                      </div>
                      <div className="e-city-head margin-10">
                        <h4 className="large white-txt">Delhi</h4>
                      </div>
                    </div>
                    <div className="e-a-hidden" city-name="Delhi">
                      <div className="data-sec-e  white-txt">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="small-svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z" />
                        </svg>
                        <h4>View AQI</h4>
                      </div>
                    </div>
                  </div>
                  <div className="e-a-a-a-a e-2" onClick={handleCityClick}>
                    <div className="e-city-data">
                      <div className="e-img-container">
                        <img src={newYorkImg} alt="NewYork" />
                      </div>
                      <div className="e-city-head margin-10">
                        <h4 className="large white-txt">New York</h4>
                      </div>
                    </div>
                    <div className="e-a-hidden" city-name="New York">
                      <div className="data-sec-e  white-txt">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="small-svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z" />
                        </svg>
                        <h4>View AQI</h4>
                      </div>
                    </div>
                  </div>
                  <div className="e-a-a-a-a e-3" onClick={handleCityClick}>
                    <div className="e-city-data">
                      <div className="e-img-container">
                        <img src={tokyoImg} alt="Tokyo" />
                      </div>
                      <div className="e-city-head margin-10">
                        <h4 className="large white-txt">Tokyo</h4>
                      </div>
                    </div>
                    <div className="e-a-hidden" city-name="Tokyo">
                      <div className="data-sec-e  white-txt">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="small-svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z" />
                        </svg>
                        <h4>View AQI</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PageSections />
      <section id="results">
        {isLoadingAnimation ? (
          <div className="results-div max-1500">
            <LoadingAnimations />
          </div>
        ) : (
          ""
        )}
        {parentContent}
      </section>
    </>
  );
};

export default MainBody;
