interface GenericDictionaryProps {
  [key: string]: any;
}
interface colors {
  start: number;
  end: number;
  class: string;
}
const PresentDayData: React.FC<GenericDictionaryProps> = ({
  aqiPresentData,
}) => {
  let currentDate = new Date();
  const presentDate = `${currentDate.getDate()}-${currentDate.getMonth()}-${currentDate.getFullYear()}`;
  const getPresentDayHeaderData: any = () => {
    return Object.keys(aqiPresentData).map((key) => {
      return (
        <div className="r-a-b-b">
          <strong>{key}</strong>
        </div>
      );
    });
  };
  const getPresentDayBodyData: any = () => {
    return Object.keys(aqiPresentData).map((key) => {
      return (
        <div className="r-a-b-b" key={key}>
          <strong>{aqiPresentData[key]}</strong>
        </div>
      );
    });
  };

  const getMaxValue = () => {
    let maxKey = Object.keys(aqiPresentData)[0];
    let maxValue = aqiPresentData[maxKey];
    for (const aqi in aqiPresentData) {
      if (maxValue < aqiPresentData[aqi]) {
        maxKey = aqi;
        maxValue = aqiPresentData[aqi];
      }
    }
    return [maxKey, maxValue];
  };
  const [aqiKey, aqiValue] = getMaxValue();
  const getClassForColor = () => {
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

  const classNames: string[] = ["r-a-b-a-body"];
  const colorClass: string | undefined = getClassForColor();
  if (colorClass) {
    classNames.push(colorClass);
    const textColorClass: string | undefined = getTextColorClass(colorClass);
    if (textColorClass) classNames.push(textColorClass);
  }

  return (
    <>
      <div className="r-a-a  margin-10">
        <div className="r-a-a-header">
          <h3 className="large">Present Values</h3>
        </div>
        <div className="r-a-b-body medium">
          <div className="r-a-b-a-header r-a-b-a">
            <div className="r-a-b-b">
              <strong>Date</strong>
            </div>
            {getPresentDayHeaderData()}
            <div className="r-a-b-b">
              <strong>AQI</strong>
            </div>
            <div className="r-a-b-b">
              <strong>Dominant Pollutant</strong>
            </div>
          </div>
          <div className={classNames.join(" ")}>
            <div className="r-a-b-a-item r-a-b-a">
              <div className="r-a-b-b">{presentDate}</div>
              {getPresentDayBodyData()}
              <div className="r-a-b-b">{aqiValue}</div>
              <div className="r-a-b-b">{aqiKey}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PresentDayData;
