// IMPORT PADRÃO
import "./Form.css";

// IMPORT DE COMPONENTES
import CampoTexto from "../CampoTexto";
import ListaTimes from "../ListaTimes";
import Botao from "../Botao";

const Formulario = () => {
  const times = [
    "Programação",
    "Front-End",
    "Data-Science",
    "Devops",
    "Ux e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite o seu cargo" />
        <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
        <ListaTimes label="Times" itens={times} />
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
