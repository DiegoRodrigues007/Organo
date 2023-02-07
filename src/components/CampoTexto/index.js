// IMPORT PADRÃO
import "./CampoTexto.css";

const CampoTexto = () => {
  return (
    <div className="campo-texto-input">
      <label>Nome</label>
      <input
        placeholder="Digite o seu nome"
      />
    </div>
  );
};

export default CampoTexto;
