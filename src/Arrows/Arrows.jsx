import "./Arrows.css";
import Background from "../Background/Background.jsx";
import Jordan from "../Background/Jordan.jsx";
import Infos from "../Background/Infos.jsx";
import { useState, useEffect } from "react";

function Arrows(props) {

  function Disable(){
    const btn_l = document.querySelector("#left");
    const btn_r = document.querySelector("#right");
    
    btn_l.setAttribute("disabled", true);
    btn_r.setAttribute("disabled", true);
    
    setTimeout(() => {
      btn_l.removeAttribute("disabled");
      btn_r.removeAttribute("disabled");
    }, 1900);
  }

  // Arrows vai devolver o background e o infos para o App ou Options
  // State e function do background com infos que sera alterado na chamada do Right e Left Click
  // k = Jordan image + Background + infos
  let [k, setK] = useState(
    <>
      <Background color="red" direction={false}/>
      <Jordan color="red" id="jordan-last" hide={true} />
      <Jordan color="red" id="jordan-img" />
      <Infos color="red" direction={false}/>
    </>
  );
  
  function re_setK(color, last, direction){
    setK(
      <>
        <Background color={color} direction={direction} />
        <Jordan color={last} id="jordan-last" /> {/* Jordan anterior */}
        <Jordan color={color} id="jordan-img" /> {/* Jordan atual */}
        <Infos color={color} direction={direction} />
      </>
    ); 
  };
  

  let [count, setCount] = useState(1);
  let [color, setColor] = useState('red');

  const right = props.right;
  const left = props.left;
  

  // Function Right and Left Click chama a function do props, o retorno vai para aas 2 variaveis e elas sao adicionadas nos states (color e count)
  const RightClick = () => {
    const [newCount, newColor] = right(count);
    re_setK(newColor, color, "right");

    setColor(newColor);
    setCount(newCount);
  };

  const LeftClick = () => {
    const [newCount, newColor] = left(count);
    re_setK(newColor, color, "left");

    setColor(newColor);
    setCount(newCount);
  };

  function Action_element(new_clss, old_clss, id){
    
    const element = document.getElementById(id);
    
    element.classList.remove("hidden");
    element.classList.remove(new_clss);
    element.classList.remove(old_clss);

    void element.offsetWidth;
    element.classList.add(new_clss);

    if(id == "jordan-last"){
      element.addEventListener('animationend', () => {
        element.classList.add("hidden");
      });
    }
  }

  useEffect(() => {
    // Esta função será executada após a renderização do componente
    Disable();
  }, []);

  return(
    <>
      { k }
      <div className="color-selection">
        <p>
          Após 1 ano de contrato da Nike com Michael Jordan e por pedido da
          marca o designer Peeter Moore criou o modelo Air Jordan 1. O tênis era
          personalizado e atendia às exigências do que Jordan gostava em um
          tênis: ele queria um modelo que encaixasse no formato do seu pé com
          facilidade.
        </p>
        <div className="arrow-btn">
          <button className="btn" id="left" onClick={async () => { 
            Disable();
            await LeftClick();
            Action_element('next_last', 'previous_last', 'jordan-last');  // Jordan anterior (animação Meio para a Direita) 0 -> E
            Action_element('previous_new', 'next_new', 'jordan-img');   // Jordan posterior (animação Esquerda para o Meio) E -> 0
          }
          }>{"<"}</button>

          {/* Fazer condicional para a remoção de class no inicio do programa */}
          <button className="btn" id="right" onClick={async () => { 
            Disable();
            await RightClick();
            Action_element('previous_last', 'next_last', 'jordan-last');  // Jordan anterior (animação Meio para a esquerda) E <- 0
            Action_element('next_new', 'previous_new', 'jordan-img');  // Jordan posterior (animação Direita para o Meio) 0 <- E
          }
          }>{">"}</button>
        </div>
      </div>
    </>
  );
}

export default Arrows;