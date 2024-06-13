import JordanRedImage from "../assets/Jordans/jordan-red-removebg-preview-removebg-preview.png";
import JordanBlueImage from "../assets/Jordans/jordan-blue-removebg-preview.png";
import JordanGreenImage from "../assets/Jordans/jordan-green-removebg-preview.png";
import JordanPurpleImage from "../assets/Jordans/jordan-purple-removebg-preview-removebg-preview.png";
import "./Jordan.css";

function Jordan(props) {
  var selected = props.color;
  var id = props.id;
  var hide = props.hide;

  switch (selected) {
    case "blue":
      return (
        <img src={JordanBlueImage} alt="jordan-blue" id={id} className="jordan" />
    );

    case "green":
      return (
        <img src={JordanGreenImage} alt="jordan-lucky-green" id={id} className="jordan" />
      );

    case "purple":
      return (
        <img src={JordanPurpleImage} alt="jordan-purple" id={id} className="jordan" />
      );

    default:
      if(hide){
        return (
          <img src={JordanRedImage} alt="jordan-chicago" id={id} className="jordan hidden" />
        );
      }

      return (
        <img src={JordanRedImage} alt="jordan-chicago" id={id} className="jordan next_new" />
      );
  }
}

export default Jordan;
