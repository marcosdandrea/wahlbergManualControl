import "./styles.css";
import Knot from "../Knot";
import { useRef, useState } from "react";
import useMoveScreen from "../../hook/useMoveScreen";
import ScreenIndexSelector from "../ScreenIndexSelector";

const Slider = () => {
  const sliderRef = useRef(null);
  const [knotPosition, setKntoPosition] = useState(0);
  const [startTouchYPosition, setStartTouchYPosition] = useState(0);
  const [screenIndex, setScreenIndex] = useState(0);
  const { moveScreen } = useMoveScreen({ resolution: 1, screenIndex: screenIndex });

  const onTouchStart = (e) => {
    setStartTouchYPosition(e.touches[0].clientY);
  };

  const onTouchMove = (e) => {
    const sliderRectHeight = sliderRef.current.getBoundingClientRect().height;
    const absoluteDelta = e.touches[0].clientY - startTouchYPosition;
    const relativeDelta = absoluteDelta / (sliderRectHeight / 2);
    setKntoPosition(absoluteDelta);
    moveScreen(relativeDelta);
  };

  const onTouchEnd = (e) => {
    setKntoPosition(0);
    moveScreen(0);
  };

  const handleOnChangeScreenSelection = (screenIndex) => {
    setScreenIndex (screenIndex)
  }

  return (
    <div className="sliderContainer">
        <ScreenIndexSelector
            onChangeSelection={handleOnChangeScreenSelection}
        />
      <div
        ref={sliderRef}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchEnd}
        onTouchMove={onTouchMove}
        className="slider">
        <Knot knotPosition={knotPosition} />
      </div>
    </div>
  );
};

export default Slider;
