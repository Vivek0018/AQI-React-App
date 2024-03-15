import { useState } from "react";

interface GenericDictionaryProps {
  [key: string]: any;
}
interface colors {
  start: number;
  end: number;
  class: string;
}
const PredictedValues: React.FC<GenericDictionaryProps> = ({
  aqiPredictedData,
}) => {
  const [model1, setModel1] = useState(1);
  const [model2, setModel2] = useState(0);
  const [model3, setModel3] = useState(0);

  const [advancedResults, setAdvancedResults] = useState(false);

  const getPredictedValuesHeader: any = () => {
    let temp =
      aqiPredictedData[Object.keys(aqiPredictedData)[0]]["predictions"];
    return Object.keys(temp[Object.keys(temp)[0]]).map((key, i) => {
      return (
        <div key={i} className="r-a-b-b">
          <strong>{key}</strong>
        </div>
      );
    });
  };
  const getOneDateData: any = (dateData: GenericDictionaryProps) => {
    return Object.keys(dateData).map((key, i) => {
      return (
        <div className="r-a-b-b" key={i}>
          {dateData[key].toFixed(2)}
        </div>
      );
    });
  };
  const getMaxValue = (aqiPresentData: GenericDictionaryProps) => {
    let maxKey = Object.keys(aqiPresentData)[0];
    let maxValue = aqiPresentData[maxKey];
    for (const aqi in aqiPresentData) {
      if (maxValue < aqiPresentData[aqi]) {
        maxKey = aqi;
        maxValue = aqiPresentData[aqi];
      }
    }
    return maxValue;
  };
  const getPresentAQIValues: any = (givenDayData: GenericDictionaryProps) => {
    let maxKey = Object.keys(givenDayData)[0];
    let maxValue = givenDayData[maxKey];
    for (const aqi in givenDayData) {
      if (maxValue < givenDayData[aqi]) {
        maxKey = aqi;
        maxValue = givenDayData[aqi];
      }
    }
    return (
      <>
        <div className="r-a-b-b">{maxValue.toFixed(2)}</div>
        <div className="r-a-b-b">{maxKey}</div>
      </>
    );
  };
  const getClassForColor = (aqiValue: number) => {
    let colorsClasses: colors[] = [
      {
        start: 0,
        end: 50,
        class: "good",
      },
      {
        start: 50,
        end: 100,
        class: "moderate",
      },
      {
        start: 100,
        end: 150,
        class: "unhealthy-s",
      },
      {
        start: 150,
        end: 200,
        class: "unhealthy",
      },
      {
        start: 200,
        end: 300,
        class: "v-unhealthy",
      },
      {
        start: 300,
        end: 1000,
        class: "hazardous",
      },
    ];
    for (let i in colorsClasses) {
      if (
        colorsClasses[i].start <= aqiValue &&
        colorsClasses[i].end >= aqiValue
      ) {
        return colorsClasses[i].class;
      }
    }
  };
  const getTextColorClass = (value: string) => {
    let blackTextItems = ["good", "moderate", "unhealthy-s"];
    if (value in blackTextItems) return;
    else return "white-txt";
  };

  const getPlots = (model: any) => {
    // console.log(model, aqiPredictedData[model]);

    let plots = aqiPredictedData[model]["plots"];
    return Object.keys(plots).map((param, i) => {
      return (
        <li key={i} className="plot-item">
          <h6>{param}</h6>
          <img
            src={`data:image/png;base64,${plots[param]}`}
            alt=""
            className="plot"
          />
        </li>
      );
    });
  };

  const getMetricsValues: any = (paramData: any) => {
    return Object.keys(paramData).map((metric, i) => {
      console.log(paramData, metric);

      return (
        <li key={i}>
          <span className="metric-value">
            {metric}: {paramData[metric]}
          </span>
        </li>
      );
    });
  };

  const getAccuracyMetrics = (model: any) => {
    let metrics = aqiPredictedData[model]["accuracy_metrics"];
    return Object.keys(metrics).map((param, i) => {
      // console.log(param);

      return (
        <li key={i}>
          <h6>{param}</h6>
          <ul>{getMetricsValues(metrics[param])}</ul>
        </li>
      );
    });
  };

  const getClassNames = (data: GenericDictionaryProps) => {
    const maxValue = getMaxValue(data);
    const classNames: string[] = ["r-a-b-a-item r-a-b-a"];
    const colorClass: string | undefined = getClassForColor(maxValue);
    if (colorClass) {
      classNames.push(colorClass);
      const textColorClass: string | undefined = getTextColorClass(colorClass);
      if (textColorClass) classNames.push(textColorClass);
    }
    return classNames.join(" ");
  };
  const getPredictedValuesBody: any = (model: any) => {
    let predictions = aqiPredictedData[model]["predictions"];
    return Object.keys(predictions).map((date, i) => {
      return (
        <div className={getClassNames(predictions[date])} key={i}>
          <div className="r-a-b-b">{date}</div>
          {getOneDateData(predictions[date])}
          {getPresentAQIValues(predictions[date])}
        </div>
      );
    });
  };

  const showPredictionsModel: any = (modelNumber: Number) => {
    if (modelNumber === 1) {
      setModel1(1);
      setModel2(0);
      setModel3(0);
    } else if (modelNumber === 2) {
      setModel1(0);
      setModel2(1);
      setModel3(0);
    } else if (modelNumber === 3) {
      setModel1(0);
      setModel2(0);
      setModel3(1);
    }
  };

  const setAdvancedResult: any = () => {
    setAdvancedResults((prev) => !prev);
  };

  return (
    <div className="r-a-a  margin-10">
      <div className="r-a-a-header">
        <h3 className="large">Predicted Values</h3>
        <span className="small">Predictions for 30 days from tommorrow</span>
      </div>
      <div className="predictions-container">
        <div className="predictions-models-list">
          <div
            className={`model-item ${model1 && "active"}`}
            onClick={() => showPredictionsModel(1)}
          >
            <h4>Model 1 - Prophet</h4>
          </div>
          <div
            className={`model-item ${model2 && "active"}`}
            onClick={() => showPredictionsModel(2)}
          >
            <h4>Model 2 - Exponential Smoothening</h4>
          </div>
          <div
            className={`model-item ${model3 && "active"}`}
            onClick={() => showPredictionsModel(3)}
          >
            <h4>Model 3 - ARIMA</h4>
          </div>
        </div>
        <div className="predictions-list">
          <div className={`predictions-item ${model1 && "active"}`}>
            <div className="advanced-results">
              <div
                className="show-advanced-results"
                onClick={setAdvancedResult}
              >
                <h4>
                  {advancedResults ? "Hide" : "Show"} Advanced Results
                  {!advancedResults ? (
                    <svg
                      className="eye-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                    </svg>
                  ) : (
                    <svg
                      className="eye-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z" />
                    </svg>
                  )}
                </h4>
                <i></i>
              </div>
              <ul
                className={`adv-res-container ${advancedResults && "active"}`}
              >
                <li className="adv-res-item">
                  <h5>Machine Learning Model Name : Prophet</h5>
                </li>
                <li className="adv-res-item">
                  <h5>Accuracy Metrics</h5>
                  <ul className="adv-res-container-2">
                    {getAccuracyMetrics("Prophet")}
                  </ul>
                </li>
                <li className="adv-res-item">
                  <h5>Plot</h5>
                  <ul className="plots">{getPlots("Prophet")}</ul>
                </li>
              </ul>
            </div>
            <div className="r-a-b-body medium">
              <div className="r-a-b-a-header r-a-b-a">
                <div className="r-a-b-b">
                  <strong>Date</strong>
                </div>
                {getPredictedValuesHeader()}
                <div className="r-a-b-b">
                  <strong>AQI</strong>
                </div>
                <div className="r-a-b-b">
                  <strong>Dominant Pollutant</strong>
                </div>
              </div>

              <div className="r-a-b-a-body">
                {getPredictedValuesBody("Prophet")}
              </div>
            </div>
          </div>
          <div className={`predictions-item ${model2 && "active"}`}>
            <div className="advanced-results">
              <div
                className="show-advanced-results"
                onClick={setAdvancedResult}
              >
                <h4>
                  {advancedResults ? "Hide" : "Show"} Advanced Results
                  {!advancedResults ? (
                    <svg
                      className="eye-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                    </svg>
                  ) : (
                    <svg
                      className="eye-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z" />
                    </svg>
                  )}
                </h4>
                <i></i>
              </div>
              <ul
                className={`adv-res-container ${advancedResults && "active"}`}
              >
                <li className="adv-res-item">
                  <h5>Machine Learning Model Name : Exponential Smoothening</h5>
                </li>
                <li className="adv-res-item">
                  <h5>Accuracy Metrics</h5>
                  <ul className="adv-res-container-2">
                    {getAccuracyMetrics("ExponentialSmoothening")}
                  </ul>
                </li>
                <li className="adv-res-item">
                  <h5>Plot</h5>
                  <ul className="plots">
                    {getPlots("ExponentialSmoothening")}
                  </ul>
                </li>
              </ul>
            </div>
            <div className="r-a-b-body medium">
              <div className="r-a-b-a-header r-a-b-a">
                <div className="r-a-b-b">
                  <strong>Date</strong>
                </div>
                {getPredictedValuesHeader()}
                <div className="r-a-b-b">
                  <strong>AQI</strong>
                </div>
                <div className="r-a-b-b">
                  <strong>Dominant Pollutant</strong>
                </div>
              </div>

              <div className="r-a-b-a-body">
                {getPredictedValuesBody("ExponentialSmoothening")}
              </div>
            </div>
          </div>
          <div className={`predictions-item ${model3 && "active"}`}>
            <div className="advanced-results">
              <div
                className="show-advanced-results"
                onClick={setAdvancedResult}
              >
                <h4>
                  {advancedResults ? "Hide" : "Show"} Advanced Results
                  {!advancedResults ? (
                    <svg
                      className="eye-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                    </svg>
                  ) : (
                    <svg
                      className="eye-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z" />
                    </svg>
                  )}
                </h4>
                <i></i>
              </div>
              <ul
                className={`adv-res-container ${advancedResults && "active"}`}
              >
                <li className="adv-res-item">
                  <h5>
                    Machine Learning Model Name : ARIMA(AUTO REGRESSIVE
                    INTEGRATED MOVING AVERAGE)
                  </h5>
                </li>
                <li className="adv-res-item">
                  <h5>Accuracy Metrics</h5>
                  <ul className="adv-res-container-2">
                    {getAccuracyMetrics("AutoARIMA")}
                  </ul>
                </li>
                <li className="adv-res-item">
                  <h5>Plot</h5>
                  <ul className="plots">{getPlots("AutoARIMA")}</ul>
                </li>
              </ul>
            </div>
            <div className="r-a-b-body medium">
              <div className="r-a-b-a-header r-a-b-a">
                <div className="r-a-b-b">
                  <strong>Date</strong>
                </div>
                {getPredictedValuesHeader()}
                <div className="r-a-b-b">
                  <strong>AQI</strong>
                </div>
                <div className="r-a-b-b">
                  <strong>Dominant Pollutant</strong>
                </div>
              </div>

              <div className="r-a-b-a-body">
                {getPredictedValuesBody("AutoARIMA")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictedValues;
