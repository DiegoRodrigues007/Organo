// IMPORT PADRÃO
import "./CampoTexto.css";

const CampoTexto = (props) => {
  return (
    <div className="campo-texto-input">
      <label>{props.label}</label>
      <input required={props.obrigatorio} placeholder={props.placeholder} />
    </div>
  );
};

export default CampoTexto;
