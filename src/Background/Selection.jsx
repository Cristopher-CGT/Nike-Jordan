import "./Selection.css";

function Selection(props){

  let color = props.color;
  let direction = props.direction;
  
  return(
      <div className="info-title colors">
        <button id="circle" className={direction +"-"+ color}></button>

        <button id="red"></button>
        <button id="blue"></button>
        <button id="green"></button>
        <button id="purple"></button>
      </div>
  );
}

export default Selection