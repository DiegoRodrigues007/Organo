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

  const aoSalvar = (e) =>{
    e.preventDefault()
    console.log('form foi clicado')
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
        <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo" />
        <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
        <ListaTimes obrigatorio={true} label="Times" itens={times} />
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
