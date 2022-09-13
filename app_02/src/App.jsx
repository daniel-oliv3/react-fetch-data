import { useEffect, useState } from "react";

export default function App() {

  const [cliente, setCliente] = useState({
    nome: "",
    email: "",
    idade: 0
  });

  useEffect(() => {
    fetch('http://localhost:3000/dados/dados.json')
    .then((response) => response.json())
    .then((dados_cliente) => {
      setCliente(dados_cliente);
    });


    //console.log('primeiro'); //assíncrona, 

  }, []);

  return (
    <>
      <h1>React Fetch Data</h1>
      <hr />

      <p>Nome do cliente: {cliente.nome}</p>
      <p>Nome do email: {cliente.email}</p>
      <p>Nome do idade: {cliente.idade}</p>

    </>
  );
}

