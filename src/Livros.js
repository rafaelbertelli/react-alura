import React, { Component, Fragment } from "react";
import Header from "./Header";

import DataTable from "./DataTable";

class Livros extends Component {
  constructor(props) {
    super(props);

    this.state = {
      autores: [
        {
          nome: "Paulo",
          livro: "React",
          preco: "1000",
        },
        {
          nome: "Daniel",
          livro: "Java",
          preco: "99",
        },
        {
          nome: "Marcos",
          livro: "Design",
          preco: "150",
        },
        {
          nome: "Bruno",
          livro: "DevOps",
          preco: "100",
        },
      ],
      titulo: "Livros",
    };
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <h1>Livros</h1>
          <DataTable
            dados={this.state.autores}
            titulo={this.state.titulo}
            colunas={["livro"]}
          />
        </div>
      </Fragment>
    );
  }
}
export default Livros;
