import React, { Component } from "react";

const dados = [
  {
    nome: "Paulo",
    livro: "React",
    preco: "1000",
  },
  {
    nome: "Nico",
    livro: "Java",
    preco: "80",
  },
  {
    nome: "Daniel",
    livro: "Cobol",
    preco: "90",
  },
];

const THead = () => {
  return (
    <thead>
      <tr>
        <th>Autores</th>
        <th>Livros</th>
        <th>Preços</th>
        <th>Remover</th>
      </tr>
    </thead>
  );
};

const TBody = (props) => {
  const linhas = props.autores.map((linha, index) => {
    return (
      <tr key={index}>
        <td>{linha.nome}</td>
        <td>{linha.livro}</td>
        <td>{linha.preco}</td>
        <td>
          <button
            onClick={() => {
              props.removeAutor(index);
            }}
          >
            Remover
          </button>
        </td>
      </tr>
    );
  });
  return <tbody>{linhas}</tbody>;
};

class Tabela extends Component {
  render() {
    const { autores, removeAutor } = this.props;

    return (
      <table>
        <THead />
        <TBody autores={autores} removeAutor={removeAutor} />
      </table>
    );
  }
}

export default Tabela;
