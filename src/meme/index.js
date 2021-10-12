import html2canvas from "html2canvas";
import { useState } from "react";
import "./style.css";
function MemeApp() {
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [img, setImg] = useState("");
  const onchangeLinea1 = (e) => {
    setLinea1(e.target.value);
  };
  const onchangeLinea2 = (e) => {
    setLinea2(e.target.value);
  };
  const onchangeImg = (e) => {
    setImg(e.target.value);
  };
  const onSaveMene = (e) => {
    html2canvas(document.querySelector("#meme")).then((canvas) => {
      let img = canvas.toDataURL("image/jpg");
      let link = document.createElement("a");
      link.download = "meme.jpg";
      link.href = img;
      link.click();
    });
  };
  return (
    <>
      <select onChange={onchangeImg}>
        <option value="" selected disabled>Selecciona un meme</option>
        <option value="fire">House on Fire</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select>
      <br />
      <input onChange={onchangeLinea1} type="text" placeholder="Linea 1" />
      <br />
      <input onChange={onchangeLinea2} type="text" placeholder="Linea 2" />
      <br />
      <button onClick={onSaveMene}>Exportar</button>
      <div className="meme" id="meme">
        <span>{linea1}</span>
        <span>{linea2}</span>
        {img ? <img src={`/img/${img}.jpg`} /> : <img src="https://png.pngtree.com/png-vector/20190419/ourlarge/pngtree-blue-camera-vector-clipart-png-image_969203.jpg"/>}
      </div>
    </>
  );
}

export default MemeApp;
