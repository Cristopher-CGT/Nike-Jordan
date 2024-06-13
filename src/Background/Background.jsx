import "./Background.css";
import Brand from "../assets/image-removebg-preview (1).png"

function Background(props) {

  let bk_color = props.color;
  let side = props.direction;

  const body = document.body;

  if(side !== false){
    body.classList.remove("red");
  }

  body.classList.remove("bk-right-red");
  body.classList.remove("bk-left-red");
  
  body.classList.remove("bk-right-blue");
  body.classList.remove("bk-left-blue");
  
  body.classList.remove("bk-right-green");
  body.classList.remove("bk-left-green");
  
  body.classList.remove("bk-right-purple");
  body.classList.remove("bk-left-purple");
  
  body.classList.add("bk-" + side + "-" + bk_color);

  return (
    <>
      <img src={Brand} alt="NIKE" className="brand" />
    </>
  );
}

export default Background;
