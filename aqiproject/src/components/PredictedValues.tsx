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
  const getPredictedValuesHeader: any = () => {
    return Object.keys(aqiPredictedData[Object.keys(aqiPredictedData)[0]]).map(
      (key) => {
        return (
          <div className="r-a-b-b">
            <strong>{key}</strong>
          </div>
        );
      }
    );
  };
  const getOneDateData: any = (dateData: GenericDictionaryProps) => {
    return Object.keys(dateData).map((key) => {
      return <div className="r-a-b-b">{dateData[key].toFixed(2)}</div>;
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
        <div className="r-a-b-b">{maxKey}</div>
        <div className="r-a-b-b">{maxValue.toFixed(2)}</div>
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
  const getPredictedValuesBody: any = () => {
    return Object.keys(aqiPredictedData).map((date) => {
      return (
        <div className={getClassNames(aqiPredictedData[date])}>
          <div className="r-a-b-b">{date}</div>
          {getOneDateData(aqiPredictedData[date])}
          {getPresentAQIValues(aqiPredictedData[date])}
        </div>
      );
    });
  };
  return (
    <div className="r-a-a  margin-10">
      <div className="r-a-a-header">
        <h3 className="large">Predicted Values</h3>
        <span className="small">Predictions for 30 days from tommorrow</span>
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
        <div className="r-a-b-a-body">{getPredictedValuesBody()}</div>
      </div>
    </div>
  );
};

export default PredictedValues;
