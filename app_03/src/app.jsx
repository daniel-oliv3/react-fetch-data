import axios from "axios";
import { useState, useEffect } from "react";

export default function App(){

    const [produtos, setProdutos] = useState({});

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
        .then((response) => {
            //console.log(response.data.products);
            setProdutos(response.data.products);
        })
    }, []);

    return (
        <>
            <h1>React Axios</h1>
            <hr/>
            <ul>
                {Object.keys(produtos).map((key) => {
                    return (
                        <li>{produtos[key].title}</li>
                    )
                })}
            </ul>
        </>
    )
}






