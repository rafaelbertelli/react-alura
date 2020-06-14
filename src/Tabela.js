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

const TBody = () => {
  return (
    <tbody>
      {dados.map((item, index) => {
        return (
          <tr key={index}>
            <td>{item.nome}</td>
            <td>{item.livro}</td>
            <td>{item.preco}</td>
            <td>
              <button>Remover</button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

class Tabela extends Component {
  render() {
    return (
      <table>
        <THead />
        <TBody />
      </table>
    );
  }
}

export default Tabela;
