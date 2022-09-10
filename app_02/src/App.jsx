import { useEffect } from "react";

export default function App() {

  useEffect(() => {
    fetch('http://localhost:3000/dados/dados.json')
    .then((response) => response.json())
    .then((dados_cliente) => console.log(dados_cliente))


    console.log('primeiro'); //assíncrona, 

  }, []);

  return (
    <>
      <h1>React Fetch Data</h1>
    </>
  );
}

