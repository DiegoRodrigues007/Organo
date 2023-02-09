import "./ListaTimes.css";

const ListaTimes = (props) => {
  return (
    <div className="lista-times">
      <label>{props.label}</label>
      <select>
        {props.itens.map((itemDaLista) => (
          <option key={itemDaLista}>{itemDaLista}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaTimes;
