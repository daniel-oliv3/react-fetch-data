import { useEffect } from "react";

export default function App() {

  useEffect(() => {
    fetch('http://localhost:3000/dados/texto.txt')
    .then((response) => response.text())
    .then((texto) => console.log(texto))


    console.log('primeiro'); //assíncrona, 

  }, []);

  return (
    <>
      <h1>React Fetch Data</h1>
    </>
  );
}

