import { useState, useEffect, useRef } from "react";

interface ListItems {
  path: string;
  viewBox: string;
  text: string;
}

const LoadingAnimations = () => {
  const [items, setItems] = useState<ListItems[]>([
    {
      path: "M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z",
      viewBox: "0 0 640 512",
      text: "Collecting Data...",
    },
    {
      path: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zm-312 8v64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80-96V280c0 13.3 10.7 24 24 24s24-10.7 24-24V120c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80 64v96c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24s-24 10.7-24 24z",
      viewBox: "0 0 512 512",
      text: "Analyzing Data...",
    },
    {
      path: "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm64 192c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm64-64c0-17.7 14.3-32 32-32s32 14.3 32 32V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V160zM320 288c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32z",
      viewBox: "0 0 448 512",
      text: "Preparing Results...",
    },
  ]);
  const [displayedItems, setDisplayedItems] = useState<ListItems | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const targetRef = useRef<HTMLDivElement>(null);

  let time: number;
  useEffect(() => {
    if (currentIndex === 0) {
      time = 100;
      if (targetRef.current)
        targetRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      time = 10000;
    }
    const timeoutId = setTimeout(() => {
      if (currentIndex < items.length) {
        setDisplayedItems(items[currentIndex]);
        setItems((prev) => prev);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, time);

    return () => clearTimeout(timeoutId);
  }, [currentIndex, items]);

  return (
    <div className="loading-animation" ref={targetRef}>
      {displayedItems && (
        <div className="loader-section">
          <div className="loader-upper-section">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="large-svg"
              viewBox={displayedItems.viewBox}
            >
              <path d={displayedItems.path} />
            </svg>
          </div>
          <div className="loader-lower-section">
            <strong className="large-font">{displayedItems.text}</strong>
            <p className="small">This might take upto 2-3min</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoadingAnimations;
