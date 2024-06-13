import "./Infos.css";
import Selection from "./Selection.jsx";

function Infos(props) {

  let color = props.color;
  let direction = props.direction;
  let version;
  let price;

  switch (color) {
    
    case "blue":
      version = "Retro High OG Game Royal";
      price = "180";
      break;
      
    case "green":
      version = "Retro High DMP";
      price = "370";
      break;
      
    case "purple":
      version = "Retro High OG Court Purple";
      price = "190";
      break;

    case "red":
      version = "High Bred Toe";
      price = "180";
      break;
  }

  return (

    <div className="container">
      <div className="Informations">
        <div className="info-title version">
          <p className="title quicksand-500">Air Jordan 1 High</p>
          <p className="descript quicksand-500 colorway"> Version - {version} </p>
        </div>
        <div className="info-title release">
          <p className="title reddit-sans-200">Realese Date</p>
          <p className="descript quicksand-500">2022/08/21</p>
        </div>
        <div className="info-title price">
          <p className="title reddit-sans-200">Price</p>
          <p className="descript quicksand-500">${price}</p>
        </div>
        <div className="info-title sizes">
          <p className="title reddit-sans-200">Select Size</p>
          <div className="btns-sizes">
            <button>8</button>
            <button>8.5</button>
            <button>9</button>
            <button>9.5</button>
            <button>10</button>
            <button>10.5</button>
            <button>11</button>
            <button>11.5</button>
            <button>12</button>
            <button>12.5</button>
          </div>
        </div>
        <Selection color={color} direction={direction}/>
      </div>
    </div>

  );
}

export default Infos;
