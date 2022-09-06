import { useEffect } from "react";

export default function App() {

  useEffect(() => {
    fetch('http://localhost:3000/dados/texto.txt')
    .then((response) => console.log(response))
  }, []);

  return (
    <>
      <h1>React Fetch Data</h1>
    </>
  );
}

