import "./Options.css";
import Arrows from "../Arrows/Arrows.jsx";

function Options() {

  const right = (count) => {
    let newCount = count;
  
    if (newCount < 4) {
      newCount++;
    }
    else {
      newCount = 1;
    }
  
    let color;
    switch (newCount) {
      case 2:
        color = "blue";
        break;
      case 3:
        color = "green";
        break;
      case 4:
        color = "purple";
        break;
      default:
        color = "red";
        break;
    }
  
    return [newCount, color];
  };

  const left = (count) => {
    let newCount = count;
  
    if (newCount > 1) {
      newCount--;
    }
    else {
      newCount = 4;
    }
  
    let color;
    switch (newCount) {
      case 3:
        color = "green";
        break;
      case 2:
        color = "blue";
        break;
      case 1:
        color = "red";
        break;
      default:
        color = "purple";
        break;
    }
  
    return [newCount, color];
  };

  return (
    <>
      <Arrows right={right} left={left} />
    </>
  );
}

export default Options;
